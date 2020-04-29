import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
class About extends Component {
    render() {
        return (
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col = {12}>
                        
                        <div className = "banner-text">
                            <h1>Welcome to my Portfolio!</h1>
                        <hr/>
                        <p>I am a Computer Science student at UC Santa Cruz. Programming has been the one academic subject that I've truly grown an affinity for, and it has motivated me to invest as much of my life into this field. I am always in search for learning opportunities, whether it be research or work experience.  </p>
                        
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About