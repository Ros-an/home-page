import React from 'react'
import * as members from "./Members.json";
import "./Community.css"
function Community() {
    return (
        <div className="community">
            <div className="heading">
                <h1>Join the Linktree community</h1>
                <p>The world's biggest influencers, creators, publishers and brands use Linktree in their marketing strategy.</p>
            </div>
            <div className="community__members">
                {
                    members.data.map(item =>{
                        return (
                        <article key={item.id}>
                            <div className="member-img">
                             <img src={item.picture} alt={item.name} />
                             <Logo/>
                            </div>
                            <div className="member-detail">
                                <img src={item.avatar} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
            <div className="btn">
                <button>GET STARTED FOR FREE</button>
            </div>
        </div>
    )
}

export default Community



export function Logo() {
    return (
        <svg viewBox="0 0 24 24" className="svg-logo"><path d="M8.92,2.44a1.06,1.06,0,0,0-1.86,0L.1,15.07A1,1,0,0,0,1,16.44h4.7v4.78a.9.9,0,0,0,.89.89H9.33a.91.91,0,0,0,.89-.89V16.44H8.92a1.05,1.05,0,0,1-1-.89A1,1,0,0,1,8,15.07l3.89-7h0Z"></path><path d="M15.08,2.44a1.06,1.06,0,0,1,1.86,0l7,12.63A1,1,0,0,1,23,16.44H18.39v4.78a.9.9,0,0,1-.89.89H14.59a.9.9,0,0,1-.89-.89V16.44H15a1.05,1.05,0,0,0,1.06-.89,1,1,0,0,0-.08-.48L12.08,8h0Z"></path></svg>
    )
}