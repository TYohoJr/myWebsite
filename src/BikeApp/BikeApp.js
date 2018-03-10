import React, { Component } from 'react';
import "./BikeApp.css";

export default class BikeApp extends Component {
    render() {
        return (
            <div>
                <p id="bike-app-info">Bike App was created by a group of 7 people (including myself) during my time in Montana Code School.<br/>
                The user can sign up and enter their work address. After signing in a map with their current location shows on the screen.<br/>
                 The user can then click "Get Me To Work!" to show a route from their current locationto their work. The map has a bike layer on top to promote biking over driving.<br/>
                 Group work finished on 2-23-18 and I make commits periodically</p>
                 <a href="https://stark-scrubland-94670.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                 <br/>
                 <p id="live-site-info">(use "test" for both the username and password, or feel free to sign up!)</p>
                 {/* <br/> */}
                 <a href="" target="_blank" rel="noopener noreferrer">Base Code</a>
                 <br/>
                 <a id="info-bottom" href="" target="_blank" rel="noopener noreferrer">Server Code</a>
                 <br/>
                <img id="bike-app-img" src={require("../BikeApp.jpg")} alt="Bike App"/>
            </div>
        )
    }
}
