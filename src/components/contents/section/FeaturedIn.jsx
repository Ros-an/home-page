import React from 'react';
import "./FeaturedIn.css";
const featuredInData = [
    {
        id: 1,
        picture: "https://images.ctfassets.net/lbsm39fugycf/1TGgA5Sm1U3E5lzgEjIKDg/2a340632f7c7c0fb7e253f1c41f7d94b/digital-trends-blue-grey.svg"
    },
    {
        id: 2,
        picture: "https://images.ctfassets.net/lbsm39fugycf/srzEJDFtp52HRAKTs787R/ab5383c8e1deec2563e62af841ea73c6/entrepreneur-blue-grey__2_.svg"
    },
    {
        id: 3,
        picture: "https://images.ctfassets.net/lbsm39fugycf/1cjCnc1zKiV1RpAqxAzutv/db7914019a26465799647e69247ff831/forbes-blue-grey.svg"
    },
    {
        id: 4,
        picture: "https://images.ctfassets.net/lbsm39fugycf/2653SKgVHqFZ59GHD29wAk/ec7e26434abe9c756befb2f4f04b7784/engadget-blue-grey.svg"
    }
]

function FeaturedIn() {
    return (
        <div className="featured-in">
            <p>As featured In</p>
            <div className="featured-in--item">
                {featuredInData.map(item=>{
                    return (
                        <div key={item.id}>
                            <img src={item.picture} alt={item.id} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedIn


