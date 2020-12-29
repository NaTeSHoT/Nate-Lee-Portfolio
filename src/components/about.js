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
                <div class = " pt-12 sm:pt-32 w-5/6  items-center flex flex-col">
                    <div class = "my-12 h-auto w-full flex sm:flex-row flex-col bg-gray-400 bg-opacity-50 justify-between rounded " data-aos = "fade-right" data-aos-easing="ease-in-sine" data-aos-once="true" >
                        <h1 class = "sm:pl-32 sm:w-1/2 flex   text-sm sm:text-4xl items-center  sm:text-justify text-gray-800 rounded ">
                            New experiences are something I always look forward to!
                        </h1>
                        <img class = "rounded sm:w-1/3 sm:h-1/3 "src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                    </div>
                    <div class = "my-12 h-auto w-full flex sm:flex-row flex-col bg-gray-400 bg-opacity-50 justify-between rounded" data-aos = "fade-left" data-aos-easing="ease-in-sine" > 
                        <img class = "rounded  h-1/2 sm:w-1/3 sm:h-1/3"src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0111.jpeg?alt=media&token=b76f8a94-c45f-4329-ab93-ec13d2465281"/>
                            <h1 class = " sm:pr-32 sm:w-1/2 flex  text-sm sm:text-4xl items-center  sm:text-justify text-gray-800 rounded ">
                                I am proud to have been born and raised in the Bay Area.
                            </h1>
                    </div>
                    <div class = "my-12 h-auto w-full flex sm:flex-row flex-col bg-gray-400 bg-opacity-50 justify-between rounded" data-aos="fade-right" data-aos-easing="ease-in-sine" >
                        <h1 class = "sm:pl-32 sm:w-1/2 flex   text-sm sm:text-4xl items-center  sm:text-justify text-gray-800 rounded">
                            Maintaining an active lifestyle has strengthened my body, mind, and spirit.
                        </h1>
                        <img class = "sm:w-1/3 sm:h-1/3 rounded"src = " https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1109.jpeg?alt=media&token=938a9b93-a110-4685-9aab-20a8f89ce8e4"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default About