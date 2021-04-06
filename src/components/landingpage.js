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
                        src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0111.jpeg?alt=media&token=b76f8a94-c45f-4329-ab93-ec13d2465281"
                        alt = "avatar"
                         />
                         <div class = "bg-gray-400 h-full  bg-opacity-50 sm:w-3/4 m-auto rounded text-center" >
                            <h1 class = "pb-2 sm:pb-0 bg-opacity-75 w-3/4 m-auto rounded text-center font-bold text-4xl sm:text-6xl items-center text-gray-800">Nathaniel Lee's Portfolio</h1>
                            <hr class = "border-dotted border-t-8 border-gray-800  w-1/3 m-auto"/>
            
                            <p class = "text-2xl sm: text-base p-2">HTML/CSS | Firebase | JavaScript | React | Node.js | Expo | Git | Java | Python </p>
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
                    

                <div class="flex font-yeseva items-center bg-gray-400 bg-opacity-50 rounded">
                    <div class="w-1/2" data-aos="fade-up">
                        <img class="w-4/5 float-right" src= "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                    </div>
                    <div class="flex w-1/2 justify-start" data-aos="fade-down">
                        <p class="w-5/6 lg:text-xl md:text-lg text-xs font-montserrat pl-4">New experiences are something I always look forward to!</p>
                    </div>
                </div>

                <div class="flex w-full bg-gray-400 bg-opacity-50 rounded">
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
export default Landing
