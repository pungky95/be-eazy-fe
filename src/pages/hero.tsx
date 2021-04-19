import React, {Component} from "react";

export default class Hero extends Component<{}> {
    render() {
        return <section id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5 col-sm-5 col-xs-5 hero-drop">
                        <div className="uploadOuter">
                            <span className="dragBox">
                            drop image here <br/> or <br/>
                            <label htmlFor="selectfile" className="btn btn-primary">Upload Image</label>
                            <input type="file" id="selectfile"/>
                            </span>
                            <ul className="quality">
                                <li><input type="radio" id="test1" name="radio-group" checked/>
                                    <label htmlFor="test1">standard</label></li>
                                <li><input type="radio" id="test2" name="radio-group"/>
                                    <label htmlFor="test2">smoothly</label></li>
                            </ul>
                        </div>
                        <div id="preview"/>
                    </div>
                    <div className="col-md-6 content-box hero-content">
                        <span>Automatically Remove Background</span>
                        <h1>Save your Time and<br/> make your work <b>easier</b></h1>
                        <p>Just upload the image and remove background with fully automatically AI, <span
                            className="ln">100% AUTOMATIC & FREE</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    }
}
