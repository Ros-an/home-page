import React from 'react'
import Hero from "./section/Hero";
import SiteDetail from "./section/SiteDetail";
import Features from "./section/Features";
import Community from "./section/Community";
import FeaturedIn from "./section/FeaturedIn";

import "./Content.css";

function Content() {
    return (
        <section className="content-wrapper">
            <Hero />
            <SiteDetail />
            <Features />
            <Community />
            <FeaturedIn />
        </section>
    )
}

export default Content
