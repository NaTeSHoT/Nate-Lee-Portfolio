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
                        courses = "Relevant Course Work: Upper-division level Data Structures and Algorithms, Computer Architecture, Operating Systems"
                        />

                        <Education 
                        startYear = {2019} 
                        endYear = {2020}
                        schoolName = "Diablo Valley College"
                        schoolDescription = "Major: Computer Science | GPA: 3.72"
                        courses = "Relevant Course Work: Multivariable Vector Calculus for Engineers III, Advanced Programming in C and C++, Discrete Mathematics, Physics for Engineers II: Thermodynamics and Electromagnetism, Object-Oriented Programming in C++, Linear Algebra, Differential Equations, Assembly Language Programming, Program Design and Data Structures "
                        />
                         <Education 
                        startYear = {2018} 
                        endYear = {2019}
                        schoolName = "Arizona State University"
                        schoolDescription = "Major: Computer Science | GPA: 3.76"
                        courses = "Relevant Course Work: Principles of Programming, Calculus for Engineers I, Physics for Engineers I: Mechanics, Object-Oriented Programming in Java and Data Structures, Calculus for Engineers II "
                        />

                        <hr class = "py-4"style = {{borderTop: '3px solid #7f9cf5'}}/>
                        <h2 class = "text-5xl pb-4">Experience</h2>
                        <Experience
                        startYear = {'March' + ' '+ 2020}
                        endYear = {'Present'}
                        jobName = {'Full Stack Web Developer at PN'}
                        jobDescription = {'PN is an organization that works with web and native app development. All programs deployed have been written with HTML/CSS, JavaScript, and the React library. At PN we utilize various team building tools such as Git, Kanban, and Slack.'}
                        />
                        <Experience
                        startYear = {'August' + ' '+ 2019}
                        endYear = {'March' + ' '+ 2020}
                        jobName = {'Computer Science Instructor at Brilliant Minds Academy'}
                        jobDescription = {'I was responsible for teaching C++ to a class of 10 students at Brilliant Minds Academy in Pleasanton, California. Class would begin with a lecture and end with a small coding exercise for everyone to try. The opportunity of teaching object-oriented programming allowed me to not only facilitate my knowledge of C++, but witness the benefits of working for something greater than myself.'}
                        />
                        <Experience
                        startYear = {'July' + ' '+ 2019}
                        endYear = {'March' + ' '+ 2020}
                        jobName = {'Coding Tutor'}
                        jobDescription = {'I was a freelancing programming tutor for high school students that were interested in computer science. I would often help teach students various concepts of college level coding classes that they were enrolled in.'}
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
                         skill = 'Python'
                         progress = {60}
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