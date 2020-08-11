import React, {Component} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
class About extends Component {
    componentDidMount = () => {
        
        AOS.init({duration: 3000})
    }
    render() {
        return (
            <div class = "flex flex-col bg-gray-200  w-screen pt-4 items-center "> 
                <div class = "flex flex-col bg-gray-400 w-2/3 rounded items-center text-center">
                    <h1 class = "text-gray-800">Welcome to my Portfolio!</h1>
                    <h3>
                        I'm a third-year Computer Science student at UC Santa Cruz. During this academic year, I will
                        be constantly looking for opportunities for a summer Software Engineering Internship. 
                        Over the course of the two years of which I have been exploring and growing within the Computer
                        Science field, I've accumulate a strong understanding of data structures, algorithms, and both object-oriented
                        and functional programming - but most importantly I've gained an unquenchable sense of curiosity. 
                    </h3>
                </div>
                <div class = "pt-32 w-5/6 items-center  flex flex-col">
                <div class = "my-12 h-auto w-full flex bg-gray-400 justify-between rounded" data-aos = "fade-right" data-aos-easing="ease-in-sine" >
                    <h1 class = "pl-32 w-1/2 flex text-justify  text-4xl items-center text-justify text-gray-800 rounded ">
                    Experience is one of life's greatest teachers, and experience has been something of which I pursue quite frequently.
                    </h1>
                    <img class = "rounded w-1/3 h-1/3 "src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                </div>

                <div class = "my-12 h-auto w-full bg-gray-400 flex justify-between rounded" data-aos = "fade-left" data-aos-easing="ease-in-sine" > 
                    <img class = "rounded w-1/3 h-1/3"src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_9407.jpeg?alt=media&token=e6084ee6-5180-43c7-949e-6cde9d7420e8"/>
                    <h1 class = "pr-32 w-1/2 flex text-justify  text-4xl items-center text-justify text-gray-800 rounded ">
                     I am proud to have been born and raised in the Bay Area.
                    </h1>
                </div>
                <div class = "my-12 h-auto w-full bg-gray-400 flex justify-between rounded" data-aos="fade-right" data-aos-easing="ease-in-sine" >
                <h1 class = "pl-32 w-1/2 flex text-justify  text-4xl items-center text-justify text-gray-800 rounded ">
                     Staying healthy has not only benefitted my body; but my mind and spirit as well.
                    </h1>
                    <img class = "w-1/3 h-1/3 rounded"src = " https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1109.jpeg?alt=media&token=938a9b93-a110-4685-9aab-20a8f89ce8e4"/>
                </div>
             </div>
            </div>
        )
    }
}
export default About