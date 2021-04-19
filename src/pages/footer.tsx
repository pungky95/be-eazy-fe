import React, {Component} from "react";

export default class Footer extends Component<{}> {
    render() {
        return <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>menu</h5>
                        <ul>
                            <li><a href="#">sub menu</a></li>
                            <li><a href="#">sub menu</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>menu</h5>
                        <ul>
                            <li><a href="#">sub menu</a></li>
                            <li><a href="#">sub menu</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>menu</h5>
                        <ul>
                            <li><a href="#">sub menu</a></li>
                            <li><a href="#">sub menu</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Company</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec
                            mattis
                            feugiat, velit purus euismod odio, quis vulputate velit urna.</p>
                        <p><a href="mailto:" className="external-links">mail@mail.com</a></p>
                    </div>
                </div>
                <div className="divider"/>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <a href="#"><i className="icon ion-logo-facebook"/></a>
                        <a href="#"><i className="icon ion-logo-instagram"/></a>
                        <a href="#"><i className="icon ion-logo-twitter"/></a>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <small>&copy; All rights reserved. Made by <a href="" target="blank" className="external-links">Be
                            Eazy</a></small>
                    </div>
                </div>
            </div>
        </footer>
    }
}