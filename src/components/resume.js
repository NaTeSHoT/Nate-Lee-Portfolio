import React, {Component} from 'react'
import {Grid, Cell} from "react-mdl"
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div class = "bg-gray-800">
                <Grid>
                    <Cell col = {4}>
                        <div class = "items-center justify-center flex">
                            <img src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_9901.jpeg?alt=media&token=7052d0c6-49b1-4825-847f-93fc841374fd"
                            alt = "avatar"
                            style = {{height: '200px'}}
                            />

                        </div>
                        <h2 class = "text-white pt-8 text-5xl">Nathaniel Lee</h2>
                        <h4 class = "text-white pt-4 text-2xl pb-4">Student at UC Santa Cruz</h4>
                        <hr  style = {{borderTop: '3px solid #7f9cf5', width: '-50%'}}/>
                        <p class = "text-white py-4 text-xl">I am pursuing a Bachelor's Degree in Computer Science</p>
                        <hr  style = {{borderTop: '3px solid #7f9cf5', width: '-50%'}}/>
                        <h5 class = "text-white text-2xl pt-4">Location</h5>
                        <p class = "text-white text-xl pt-4">San Ramon, California</p>
                        <h5 class = "text-white text-2xl pt-4">Phone</h5>
                        <p class = "text-white text-xl pt-4">(925)-999-5426</p>
                        <h5 class = "text-white text-2xl pt-4">Email</h5>
                        <p class = "text-white text-xl pt-4">naelee@ucsc.edu</p>
                        <h5 class = "text-white text-2xl pt-4">Web</h5>
                        <p class = "text-white text-xl pt-4 pb-4">https://nate-lee-portfolio.web.app/</p>
                        <hr class = "pt-2" style = {{borderTop: '3px solid #7f9cf5', width: '-50%'}}/>
                    </Cell>
                    <Cell className = 'resume-right-col' col = {8}>
                        <h2 class = "text-5xl pb-4">Education</h2>  

                        <Education 
                        startYear = {2020} 
                        endYear = {2022}
                        schoolName = "University of California, Santa Cruz"
                        schoolDescription = "Major: Computer Science"
                        courses = "Relevant Course Work: Advanced Data Structures and Algorithms, Computer Architecture, Operating Systems"
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

                        <hr class = "py-4"style = {{borderTop: '3px solid #7f9cf5'}}/>
                        <h2 class = "text-5xl pb-4">Experience</h2>
                        <Experience
                        startYear = {'March' + ' '+ 2020}
                        endYear = {'Present'}
                        jobName = {'Full Stack Web Developer at PN'}
                        jobDescription = {'My work consisted of single paged application developement using the React library.'}
                        />
                        <Experience
                        startYear = {'July' + ' '+ 2019}
                        endYear = {'March' + ' '+ 2020}
                        jobName = {'Computer Science Tutor'}
                        jobDescription = {'My own tutoring business in San Ramon, California where I help assist high schoolers in their advanced programming courses.'}
                        />
                         <Experience
                        startYear = {'August' + ' '+ 2019}
                        endYear = {'March' + ' '+ 2020}
                        jobName = {'Computer Science Instructor at Brilliant Minds Academy'}
                        jobDescription = {'I teach the fundamentals of programming in C++ and Java at Brilliant Minds Academy in Pleasanton, California.'}
                        />
                         <hr class = "py-4" style = {{borderTop: '3px solid #7f9cf5'}}/>
                         <h2 class = "text-5xl pb-4">Skills</h2>
                         <Skills
                         skill = 'JavaScript'
                         progress = {75}
                         />
                         <Skills
                         skill = 'ReactJS'
                         progress = {75}
                         />
                          <Skills
                         skill = 'C++'
                         progress = {85}
                         />
                          <Skills
                         skill = 'Java'
                         progress = {80}
                         />
                          <Skills
                         skill = 'Assembly Language'
                         progress = {80}
                         />
                          <Skills
                         skill = 'HTML/CSS'
                         progress = {60}
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