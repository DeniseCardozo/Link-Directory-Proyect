import React, { useState } from "react";
import NewURLCard from "./NewURLCard";


export default function BotonAddBox() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <React.Fragment>
            <button type="button" onClick={handleClick}>+</button>
            {show && <NewURLCard />}

        </React.Fragment>
    )
}