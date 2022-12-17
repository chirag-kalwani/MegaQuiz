import React from 'react';
import BarLoader from "react-spinners/BarLoader";

function Spinner(props) {
    return (
        <div className="sweet-loading">
            <BarLoader
                color="#36d7b7"
                cssOverride={{}}
            />
        </div>
    );
}

export default Spinner;