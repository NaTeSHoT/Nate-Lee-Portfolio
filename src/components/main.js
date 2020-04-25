import React from 'react';
import Landing from './landingpage';
import About from "./about";
import Contact from "./contact";
import Projects from "./projects"
import Resume from "./resume"

import {Route, Switch } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path = "/" component = {Landing}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/contact" component = {Contact}/>
        <Route exact path = "/projects" component = {Projects}/>
        <Route exact path = "/resume" component = {Resume}/>

    </Switch>
)
export default Main