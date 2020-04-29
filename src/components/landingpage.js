import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'
class Landing extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        <img
                            src = "https://avatarfiles.alphacoders.com/131/131718.jpg"
                            alt = "avatar"
                            className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>Computer Science Student (Portfolio still in BETA)</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | C++ | Java | Assembly </p>
                        <div className = "social-links">

                            {/** GitHub */}
                            <a href = "http://github.com/NaTeSHoT" target = "_blank" rel = "noopener noreferrer">
                                <i className = "fa fa-github-square"  aria-hidden = "true"/>
                            </a>
                             {/** LinkedIn */}
                           
                             <a href = "http://www.linkedin.com/in/nateshot/" target = "_blank" rel = "noopener noreferrer">
                                <i className = "fa fa-linkedin-square"  aria-hidden = "true"/>
                            </a>
                           
                            

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing