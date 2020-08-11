import React, {Component} from 'react'
class Contact extends Component {
    render() {
        return (
           
            <div class = "bg-gray-200 w-screen flex flex-col items-center justify-center pt-4">
                <div class = "flex flex-col w-2/3 bg-gray-400 items-center justify-center rounded ">
                    <h1 class = "text-gray-800">Feel free to reach out!</h1>
                    <div class = "flex text-gray-800 text-4xl items-center justify-between"> 
                        <i className = "fa fa-phone -square fa-2x pr-4" aria-hidden = "true"/>
                        (925)-999-5426
                     </div>
                    <a class = "flex text-gray-800 text-4xl items-center justify-between "href = "mailto:naelee@ucsc.edu" target = "_blank" rel = "noopener noreferrer">
                        <i className = "fa fa-envelope fa-2x pr-4"  aria-hidden = "true"/>
                        naelee@ucsc.edu
                     </a>
                    <a class = "flex text-gray-800 text-4xl items-center justify-between" href = "http://github.com/nateelee" target = "_blank" rel = "noopener noreferrer">
                        <i className = "fa fa-github-square fa-2x pr-4 "  aria-hidden = "true"/>
                        github.com/nateelee
                    </a>
                    <a class = "flex text-gray-800 text-4xl items-center justify-between" href = "https://www.linkedin.com/in/nateelee/" target = "_blank" rel = "noopener noreferrer">
                        <i className = "fa fa-linkedin-square fa-2x pr-4"  aria-hidden = "true"/>
                        linkedin.com/nateelee
                    </a>
                </div>
                <div class = "rounded items-center justify-center flex bg-gray-400 w-2/3 pt-12 pb-4">
                    <img class = "w-1/3 h-1/3" src = "https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/DSC07278.jpeg?alt=media&token=4246872d-7a6d-4abf-b773-9fc9d08a50c6">
                    </img>
                </div>
            </div>
        )
    }
}
export default Contact