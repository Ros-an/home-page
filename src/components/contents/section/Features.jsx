import React from 'react';
import * as features from "./features-data.json";
import "./Features.css";
function Features() {
    return (
        <>
        <div className="feature">
            {features.data.map(item=> {
                return (
                    <article key={item.id}>
                        <img src={item.picture} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                    </article>
                )
            })}
        </div>
        <div className="see-all-feature">
            <button>SEE ALL FEATURES</button>
        </div>
        </>
    )
}

export default Features
