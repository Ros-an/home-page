import React from 'react'
import "./SiteDetail.css";
import * as featureData from "./site-detail.json";
function SiteDetail() {
    return (
        <div className="sitedetail">
            {featureData.listOfFeat.map((item, index) => {
                let flow = index%2 ? "right-to-left":"left-to-right";
             return (
                <article className={flow} key={item.id}>
                    {
                        flow === "left-to-right" && (
                        <>
                            <div className="video-section">
                                <video key={item.videoKey} playsInline autoPlay muted loop>
                                    <source src={item.src}></source>
                                </video>
                            </div>
                            <div className="text-section">
                                <h2>{item.title}</h2>
                                <p>{item.detail}</p>
                            </div>
                        </>)
                    }
                    {
                        flow === "right-to-left" && (
                        <>
                            <div className="text-section">
                                <h2>{item.title}</h2>
                                <p>{item.detail}</p>
                            </div>
                            <div className="video-section">
                                <video key={item.videoKey} playsInline autoPlay muted loop>
                                    <source src={item.src}></source>
                                </video>
                            </div>
                        </>)
                    }
                </article>
             )
            })}
        </div>
    )
}

export default SiteDetail
