import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
// import {WEATHER_API, API_PREFIX, WEATHER_URL} from "../constants"
import SpeedToggle from "./SpeedToggle";
import ZipcodeInput from "./ZipcodeInput";
import WeatherService from "../services";

const weather = new WeatherService();
class ForecastContianer extends React.Component {
    state = {
        data: [],
        loading: false,
        error: false,
        degreeType: 'fahrenheit',
        speedType: 'imperial',
        zipcode: '',
    }

     async componentDidMount(){
        this.setState({ loading: true })
        weather.fetchFiveDayForeCast()
            .then((res) => {
                if(res & res.response.ok) {
                    this.setState({ 
                        data: res.data,
                        loading: false,
                     })
                } else {
                    this.setState({loading: false})
                }
        }, (error) => {
            console.log(error);
            this.setState({ 
                error: true,
                loading: false,
             })
        })
    }


    updateForecastDegree = ({target: {value }}) => 
        this.setState({ degreeType: value });

    updateForecastSpeed = ({target: {value }}) => 
        this.setState({ speedType: value });

    updateZipcode = ({target: {value }}) => {
        let error;
        const numbers = /^[0-9]+$/;

        value.match(numbers)
        ? error = false : error = true;
        if ((!error && value.length === 5)) {
            if(value > 0 && value < 99951){
                this.setState({ zipcode: Number(value) });
            }
            }
    }
        

    render() {
        const { data, loading, error, degreeType, speedType,  } = this.state;
        return (
            <div className="container mt-5">
                <div className="display-1 jumbotron bg-light py-5 mb-5">Forecast Container</div>
                {/* { (!loading && zipcode) && <div className="text-muted">{city.name}, {city.country}</div> } */}
                <ZipcodeInput 
                    updateZipcode={this.updateZipcode}
                />
                <DegreeToggle 
                    updateForecastDegree={this.updateForecastDegree}
                    degreeType={degreeType}
                />
                <SpeedToggle 
                    updateForecastSpeed={this.updateForecastSpeed}
                    speedType={speedType}
                />
                <div className="row justify-content-center">
                {!loading ? data.map((item) => (
                    <DayCard 
                        data={item} 
                        key={item.dt} 
                        degreeType={degreeType}
                        speedType={speedType}
                    />
                )) : <div>Loading...</div>
                }
                </div>
                { error && <h3 className="text-danger">Error loading 😞</h3> }
            </div>
        )
    }
}

export default ForecastContianer;