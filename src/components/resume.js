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
                        <h4 style = {{color: 'grey'}}>Student at UC Santa Cruz</h4>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                        <p>I am pursuing a Bachelor's Degree in Computer Science</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                        <h5>Home</h5>
                        <p>San Ramon, California</p>
                        <h5>Phone</h5>
                        <p>(925)-999-5426</p>
                        <h5>Email</h5>
                        <p>nathaniel902@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://nate-lee-portfolio.web.app/</p>
                        <hr style = {{borderTop: '3px solid #833fb2', width: '-50%'}}/>
                    </Cell>
                    <Cell className = 'resume-right-col' col = {8}>
                        <h2>Education</h2>  

                        <Education 
                        startYear = {2020} 
                        endYear = {2022}
                        schoolName = "University of California, Santa Cruz"
                        schoolDescription = "Major: Computer Science"
                        />

                        <Education 
                        startYear = {2019} 
                        endYear = {2020}
                        schoolName = "Diablo Valley College"
                        schoolDescription = "Major: Computer Science"
                        courses = "Relevant Course Work: Multivariable Vector Calculus for Engineers III, Advanced Programming in C and C++, Discrete Mathematics, Physics for Engineers II: Thermodynamics and Electromagnetism, Object-Oriented Programming in C++, Linear Algebra, Differential Equations, Assembly Language Programming, Program Design and Data Structures "
                        />
                         <Education 
                        startYear = {2018} 
                        endYear = {2019}
                        schoolName = "Arizona State University"
                        schoolDescription = "Major: Computer Science"
                        courses = "Relevant Course Work: Principles of Programming, Calculus for Engineers I, Physics for Engineers I: Mechanics, Object-Oriented Programming in Java and Data Structures, Calculus for Engineers II "
                        />

                        <hr style = {{borderTOp: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                        startYear = {'July' + ' '+ 2019}
                        endYear = {'Present'}
                        jobName = {'Computer Science Tutor'}
                        jobDescription = {'My own tutoring business in San Ramon, California where I help assist high schoolers in their advanced programming courses.'}
                        />
                         <Experience
                        startYear = {'August' + ' '+ 2019}
                        endYear = {'Present'}
                        jobName = {'Computer Science Instructor at Brilliant Minds Academy'}
                        jobDescription = {'I teach the fundamentals of programming in C++ and Java at Brilliant Minds Academy in Pleasanton, California.'}
                        />
                         <hr style = {{borderTOp: '3px solid #e22947'}}/>
                         <h2>Skills</h2>
                         <Skills
                         skill = 'JavaScript'
                         progress = {60}
                         />
                         <Skills
                         skill = 'ReactJS'
                         progress = {50}
                         />
                          <Skills
                         skill = 'C++'
                         progress = {80}
                         />
                          <Skills
                         skill = 'Java'
                         progress = {75}
                         />
                          <Skills
                         skill = 'Assembly Language'
                         progress = {80}
                         />
                          <Skills
                         skill = 'HTML/CSS'
                         progress = {40}
                         />
                          <Skills
                         skill = 'Heavy Lifting'
                         progress = {95}
                         />
                    

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume