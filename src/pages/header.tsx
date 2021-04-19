import React, {Component} from "react";

export default class Header extends Component<{}> {
    render() {
        return (
            <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon ion-md-menu"/>
                </button>
                <a href="./"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                                  className="img-fluid nav-logo-mobile" alt="Be Eazy"/></a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="container">
                        <a href="./"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
                                          className="img-fluid nav-logo-desktop"
                                          alt="Be Eazy"/></a>
                        <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250"
                            data-offset="65">
                            <li className="nav-item nav-custom-link">
                                <a className="nav-link" href="./">Home <i
                                    className="icon ion-ios-arrow-forward icon-mobile"/></a>
                            </li>
                            <li className="nav-item nav-custom-link">
                                <a className="nav-link" href="#marketing">Features <i
                                    className="icon ion-ios-arrow-forward icon-mobile"/></a>
                            </li>
                            <li className="nav-item nav-custom-link">
                                <a className="nav-link" href="#testimonials">Testimonials <i
                                    className="icon ion-ios-arrow-forward icon-mobile"/></a>
                            </li>
                            <li className="nav-item nav-custom-link">
                                <a className="nav-link" href="#pricing">Pricing <i
                                    className="icon ion-ios-arrow-forward icon-mobile"/></a>
                            </li>
                            <li className="nav-item nav-custom-link btn btn-demo-small">
                                <a className="nav-link" href="#">Try for Free <i
                                    className="icon ion-ios-arrow-forward icon-mobile"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
