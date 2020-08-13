import React, {Component} from 'react'

import AOS from "aos"
import "aos/dist/aos.css"


class Landing extends Component {
    componentDidMount = () => {
        AOS.init({duration: 3000})
    }
    render() {
        return (
            <div class = "bg-gray-200 w-screen flex flex-col items-center justify-center">
                <div class = "w-5/6 pt-16 sm:pt-12 flex flex-col items-center justify-center">
                        <img
                        class = "sm:w-1/3 sm:h-1/3 pb-2 sm:pb-4 rounded"
                        src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1338.JPEG?alt=media&token=0e2a5534-7a38-4a44-a7da-0239bc01478a"
                        alt = "avatar"
                         />
                         <div class = "bg-gray-400 h-full  bg-opacity-50 sm:w-3/4 m-auto rounded text-center" >
                            <h1 class = "pb-2 sm:pb-0 bg-opacity-75 w-3/4 m-auto rounded text-center font-bold text-4xl sm:text-6xl items-center text-gray-800">Nathaniel Lee's Portfolio</h1>
                            <hr class = "border-dotted border-t-8 border-gray-800  w-1/3 m-auto"/>
            
                            <p class = "text-2xl sm: text-base p-2">HTML/CSS | Tailwind | JavaScript | React | NodeJS | C++ | Git | Java | Assembly </p>
                            <div className = "justify-evenly flex">
                                <a href = "http://github.com/nateelee" target = "_blank" rel = "noopener noreferrer">
                                    <i className = "fa fa-github-square fa-4x text-gray-800"  aria-hidden = "true"/>
                                </a>
                                <a href = "https://screenbook-pn.web.app/" target = "_blank" rel = "noopener noreferrer">
                                    <i class="fa fa-code fa-4x text-gray-800 " aria-hidden="true"></i>
                                </a> 
                                <a href = "http://www.linkedin.com/in/nateelee/" target = "_blank" rel = "noopener noreferrer">
                                    <i className = "fa fa-linkedin-square fa-4x text-gray-800"  aria-hidden = "true"/>
                                </a> 
                            </div> 
                        </div>
                </div>
                <div class = "pt-32 w-5/6  items-center flex flex-col">
                    <div class = "my-12 h-auto w-full flex sm:flex-row flex-col bg-gray-400 bg-opacity-50 justify-between rounded " data-aos = "fade-right" data-aos-easing="ease-in-sine" >
                        <h1 class = "sm:pl-32 sm:w-1/2 flex   text-sm sm:text-4xl items-center  sm:text-justify text-gray-800 rounded ">
                            New experiences are something I always look forward to!
                        </h1>
                        <img class = "rounded sm:w-1/3 sm:h-1/3 "src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                    </div>

                    <div class = "my-12 h-auto w-full flex sm:flex-row flex-col bg-gray-400 bg-opacity-50 justify-between rounded" data-aos = "fade-left" data-aos-easing="ease-in-sine" > 
                        <img class = "rounded  h-1/2 sm:w-1/3 sm:h-1/3"src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_9407.jpeg?alt=media&token=e6084ee6-5180-43c7-949e-6cde9d7420e8"/>
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
export default Landing
