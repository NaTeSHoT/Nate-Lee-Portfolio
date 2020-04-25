import React, {Component} from 'react'
import {Grid, Cell} from "react-mdl"
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col = {4}>
                        <div style = {{textAlign: 'center'}}>
                            <img src = "https://avatarfiles.alphacoders.com/131/131718.jpg"
                            alt = "avatar"
                            style = {{height: '200px'}}
                            />

                        </div>
                        <h2 style = {{paddTop: '2em'}}>Nathaniel Lee</h2>
                        <h4 style = {{color: 'grey'}}>Programmer</h4>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                        <p>I need to write a short description of my experience here</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                        <h5>Address</h5>
                        <p>516 Balmoral Ct Sar Ramon, CA</p>
                        <h5>Phone</h5>
                        <p>9259995426</p>
                        <h5>Email</h5>
                        <p>nathaniel902@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://nate-lee-portfolio.firebaseapp.com/</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                    </Cell>
                    <Cell className = 'resume-right-col' col = {8}>
                        <h2>Education</h2>  

                        <Education 
                        startYear = {2020} 
                        endYear = {2022}
                        schoolName = "UCSC"
                        schoolDescription = "my recent school, i am studying ...."
                        />

                        <Education 
                        startYear = {2019} 
                        endYear = {2020}
                        schoolName = "DVC"
                        schoolDescription = "my recent school, i am studying ...."
                        />
                         <Education 
                        startYear = {2018} 
                        endYear = {2019}
                        schoolName = "ASU"
                        schoolDescription = "my recent school, i am studying ...."
                        />

                        <hr style = {{borderTOp: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                        startYear = {2019}
                        endYear = {'Present'}
                        jobName = {'Tutor'}
                        jobDescription = {'first good job'}
                        />
                         <Experience
                        startYear = {2019}
                        endYear = {'Present'}
                        jobName = {'Teacher'}
                        jobDescription = {'second good job'}
                        />
                         <hr style = {{borderTOp: '3px solid #e22947'}}/>
                         <h2>Skills</h2>
                         <Skills
                         skill = 'javascript'
                         progress = {100}
                         />
                         <Skills
                         skill = 'react'
                         progress = {30}
                         />
                          <Skills
                         skill = 'c++'
                         progress = {50}
                         />
                         



                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume