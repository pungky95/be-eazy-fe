import React, {Component} from "react";

export default class Marketing extends Component<{}> {
    render() {
        return <section id="marketing">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="content-box">
                            <span>100% AUTOMATIC & FREE,<br/>Perfect for Personal & Business</span>
                            <h2>Save Time & Money</h2>
                            <p>No more green screen photo shoots, No more team of designers hassling with Photoshop - Be
                                Eazy
                                makes your business more profitable and efficient.</p>
                            <a href="#" className="btn btn-regular">Start Free Trial</a>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="compare-bx">
                            <div className="compare">
                                <img src={process.env.PUBLIC_URL + '/assets/images/hero-before.jpg'} alt=""/>
                                <img src={process.env.PUBLIC_URL + '/assets/images/hero-after.png'} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}