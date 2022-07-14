import React from "react";
import DayCard from "./DayCard";
import DegreeToggle from "./DegreeToggle";
import {WEATHER_API, WEATHER_URL} from "../constants"

class ForecastContianer extends React.Component {

   async componentDidMount() {
        try {
            const response = await fetch(`${WEATHER_URL}${WEATHER_API}`);
            const json = await response.json();
            console.log(json);
        } catch(err) {
            console.error('There was an error');
        }
    }


    render() {
        return (
            <div>
                <div>Forecast Container</div>
                <DegreeToggle />
                <DayCard />
            </div>
        )
    }
}

export default ForecastContianer;