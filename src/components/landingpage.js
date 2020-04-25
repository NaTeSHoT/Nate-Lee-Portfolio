import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
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
                            <h1>Computer Science Student at UC Santa Cruz</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | C++ | Java | Assembly </p>
                        <div className = "social-links">

                            {/** LinkedIn */}
                            <a href = "http://google.com" target = "_blank" rel = "noopener noreferrer">
                                <i className = "fa fa-github-square"  aria-hidden = "true"/>
                            </a>
                             {/** Github */}
                             <a href = "http://google.com" target = "_blank" rel = "noopener noreferrer">
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