import React, {Component} from "react";
import Header from "./header";
import Hero from './hero';
import Marketing from "./marketing";
import Testimonial from "./testimonial";
import Pricing from "./pricing";
import CallToAction from "./callToAction";
import Footer from "./footer";

export default class Layout extends Component<{}> {
    render() {
        return (
            <div>
                <Header/>
                <Hero/>
                <Marketing/>
                <Testimonial/>
                <Pricing/>
                <CallToAction/>
                <Footer/>
            </div>
        )
    }
}