import React, {Component} from 'react'

import AOS from "aos"
import "aos/dist/aos.css"


class Landing extends Component {
    componentDidMount = () => {
        AOS.init({duration: 3000})
    }
    render() {
        return (
            <div class = "bg-gray-800 w-screen flex flex-col items-center justify-center">
                <div class = "w-5/6 pt-12 flex flex-col items-center justify-center">
                        <img
                        class = "w-1/3 h-1/3 "
                        //src = "https://avatarfiles.alphacoders.com/131/131718.jpg"
                        src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_1338.JPEG?alt=media&token=0e2a5534-7a38-4a44-a7da-0239bc01478a"
                        alt = "avatar"
                        
                         />
                         <div className = "banner-text" >
                             <h1>Nathaniel Lee's Portfolio</h1>
                         <hr/>
                         <p>HTML/CSS | Tailwind | JavaScript | React | NodeJS | C++ | Java | Assembly </p>
                         <div className = "social-links">

                            
                        <a href = "http://github.com/nateelee" target = "_blank" rel = "noopener noreferrer">
                              <i className = "fa fa-github-square "  aria-hidden = "true"/>
                            </a>
                            
                           
                             <a href = "http://www.linkedin.com/in/nateelee/" target = "_blank" rel = "noopener noreferrer">
                               <i className = "fa fa-linkedin-square"  aria-hidden = "true"/>
                            </a> 
                    </div> 
                </div>
              
             </div>
             <div class = "pt-32 w-5/6 items-center  flex flex-col">
                <div class = "my-12 h-auto w-full flex bg-gray-200 justify-between rounded" data-aos = "fade-right" data-aos-easing="ease-in-sine" >
                    <h1 class = "pl-32 w-1/2 flex text-justify  text-4xl items-center text-justify text-gray-800 rounded ">
                    Experience is one of life's greatest teachers, and experience has been something of which I pursue quite frequently.
                    </h1>
                    <img class = "rounded w-1/3 h-1/3 "src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_0257.jpeg?alt=media&token=a008173b-393f-4d96-a22c-be870acba052"/>
                </div>

                <div class = "my-12 h-auto w-full bg-gray-200 flex justify-between rounded" data-aos = "fade-left" data-aos-easing="ease-in-sine" > 
                    <img class = "rounded w-1/3 h-1/3"src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/IMG_9407.jpeg?alt=media&token=e6084ee6-5180-43c7-949e-6cde9d7420e8"/>
                    <h1 class = "pr-32 w-1/2 flex text-justify  text-4xl items-center text-justify text-gray-800 rounded ">
                     I am proud to have been born and raised in the Bay Area.
                    </h1>
                </div>
                <div class = "my-12 h-auto w-full bg-gray-200 flex justify-between rounded" data-aos="fade-right" data-aos-easing="ease-in-sine" >
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
export default Landing
