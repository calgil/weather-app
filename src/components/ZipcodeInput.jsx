import React from "react";

const ZipcodeInput = ({ updateZipcode }) => {

    return (
        <label htmlFor="zipcode">
            Enter Zip code
            <input 
            type="text" 
            placeholder="Zipcode"
            onChange={updateZipcode}
            maxLength={"5"}
            />
        </label>
    )
}

export default ZipcodeInput;