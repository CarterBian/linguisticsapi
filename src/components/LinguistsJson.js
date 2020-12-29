import React, { useEffect, useState } from 'react';
import ReactJson from 'react-json-view';
import './LinguistsJson.css';

function LinguistsJson() {
    const [linguists, setLinguists] = useState({});
    useEffect(() => {
        fetch("https://linguisticsapi.herokuapp.com/api/linguists").then(
            res => res.json()).then(data => {
                setLinguists(data.linguists);
            });
    }, []);
    return (
        <div id="top" className="ui raised very padded text container segment">
            <h2 className="ui header">Linguists Bios</h2>
            <div className="json">
                {linguists.length > 0 ? (
                    <ReactJson src={linguists} />
                ) : (
                    <div id="rel" class="ui active loader"></div>
                )}
            </div>
        </div>

    );
}

export default LinguistsJson;