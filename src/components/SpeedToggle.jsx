import React from "react";

const SpeedToggle = ({ updateForecastSpeed }) => {
    
    return (
        <select 
            name="speed-type" 
            id="speed"
            onChange={updateForecastSpeed}
        >
            <option value="imperial">Murican</option>
            <option value="metric">Everywhere Else</option>
        </select>
    )
}

export default SpeedToggle;