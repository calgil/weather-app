import React from "react";
import moment from "moment";

const DayCard = ({ data, degreeType, speedType }) => {
    const { temp, dt, imgId, desc, feelsLike, humidity, windSpeed } = data;

    const newDate = new Date();
    newDate.setTime(dt * 1000);

    const icon =`owf owf-${imgId} owf-5x`;

    const fahrenheit = Math.round(temp);

    const celsius = Math.round((fahrenheit - 32) * (5/9));

    const imperial = Math.round(windSpeed);

    const kilometers = Math.round(windSpeed * 1.609);

    return (
        <div className="col-sm-2">
            <div className="card">
                <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                    <p className="text-muted">{moment(newDate).format('MMMM Do, h:m a')}</p>
                    <i className={icon} />
                    <h2>{degreeType === 'celsius' ? `${celsius} °C` : `${fahrenheit} °F`}</h2>
                    <p className="card-text m-0">Feels like: {feelsLike}</p>
                    <div className="card-body">
                        <p className="card-text">{desc}</p>
                        <p className="card-text m-0">Humidty: {humidity}</p>
                        <p className="card-text m-0">
                            Wind speed: {speedType === 'imperial' ? `${imperial}` : `${kilometers}` }
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default DayCard;