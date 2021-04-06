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
                <div class = "flex flex-col bg-gray-400 bg-opacity-50 w-5/6 sm:w-2/3 rounded items-center text-center p-2">
                    <h1 class = "sm:text-6xl text-2xl text-gray-800 font-bold">Welcome to my Portfolio!</h1>
                    <h3 class = "sm:text-2xl text-lg">
                        I'm a third-year Computer Science student at UC Santa Cruz. During this academic year, I will
                        be constantly looking for opportunities for a summer Software Engineering Internship. 
                        Over the course of the two years of which I have been exploring and growing within the Computer
                        Science field, I've accumulate a strong understanding of data structures, algorithms, and both object-oriented
                        and functional programming. Most importantly, I've gained an unquenchable sense of curiosity for software engineering. 
                    </h3>
                </div>
                <div class = "pt-32 w-5/6  items-center flex flex-col">
                <div class="flex font-yeseva items-center bg-gray-400 bg-opacity-50 rounded ">
                    <div class="w-1/2" data-aos="fade-up">
                        <img class="w-4/5 float-right" src= "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                    </div>
                    <div class="flex w-1/2 justify-start" data-aos="fade-down">
                        <p class="w-5/6 lg:text-xl md:text-lg text-xs font-montserrat pl-4">New experiences are something I always look forward to!</p>
                    </div>
                </div>

                <div class="flex w-full bg-gray-400 bg-opacity-50 rounded ">
                    <div class="flex justify-end items-center lg:text-lg sm:text-md text-xs w-1/2 font-montserrat"  data-aos="fade-up"> 
                        <p class="w-5/6 lg:text-xl md:text-lg text-xs font-montserrat pl-4">I am proud to have been born and raised in the Bay Area.</p>
                    </div>
                    <div class="w-1/2"  data-aos="fade-down">
                        <img class="w-5/6" src="https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1338.JPEG?alt=media&token=0e2a5534-7a38-4a44-a7da-0239bc01478a" />
                    </div>
                </div>

                <div class="flex font-yeseva items-center pb-20 bg-gray-400 bg-opacity-50 rounded">
                    <div class="w-1/2" data-aos="fade-up">
                        <img class="w-4/5 float-right" src= "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1109.jpeg?alt=media&token=938a9b93-a110-4685-9aab-20a8f89ce8e4"/>
                    </div>
                    <div class="flex w-1/2 justify-start" data-aos="fade-down">
                        <p class="w-5/6 lg:text-xl md:text-lg text-xs font-montserrat pl-4">Maintaining an active lifestyle has strengthened my body, mind, and spirit.</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default About