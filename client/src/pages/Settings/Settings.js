import React, { Component } from "react";
import Navbar from "../../components/partial/Navbar";
import Slider from '../../components/partial/Slider';
import "./Settings.css";

export default class Settings extends Component {
    constructor() {
        super();
        this.state = {
            AutoSave: false,
            DarkMode: false,
            Opacity: false
        }
        this.handle = this.handle.bind(this);
    }
    handle({target: {name}}) {
        this.setState(prv => ({
            [name]: !prv[name]
        }));
    }
    render() {
        return (
            <div className="Setting-menu">
                <Navbar/>
                <div className="options">
                    <div className="opt">
                        AutoSave <Slider name="AutoSave" on={this.state.AutoSave} handle={this.handle} />
                    </div>
                    <h6 className="opt-header">THEME</h6>
                    <div className="opt">
                        DarkMode <Slider name="DarkMode" on={this.state.DarkMode} handle={this.handle} />
                    </div>
                    <div className="opt">
                        Opacity <Slider name="Opacity" on={this.state.Opacity} handle={this.handle} />
                    </div>
                </div>
            </div>
        );
    }
}