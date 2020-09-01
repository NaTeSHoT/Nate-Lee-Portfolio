import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }
  
    toggleCategories() {
        
        if (this.state.activeTab === 0) {
            return(
                // java single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Interactive Drawing App</CardTitle>
                        <CardText>
                            An interactive drawing GUI App that uses JavaFX
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Interactive-Drawing-GUI-Application" colored>GitHub</Button>
                            
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                // c++ single proj
                <div className = 'flex justify-between items-center w-full h-auto flex-col sm:flex-row'>
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                    <CardTitle style = {{color:'white', height: '176px',  background: 
                    'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Transcript Evaluator</CardTitle>
                    <CardText style = {{height: '175px'}}>
                        A program that reads school transcript text files and outputs student information and calculated major and overall GPA
                    </CardText>
                    <CardActions border>
                        <Button href = "https://github.com/nateelee/Student-Transcript-Evaluator" colored>GitHub</Button>
                    </CardActions>
                    <CardMenu style = {{color:'#fff'}}>
                        <IconButton name = "N"/>
                    </CardMenu>
                </Card>
                <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Vehicle Maintenace Program</CardTitle>
                        <CardText style = {{height: '175px'}}>
                            This program uses inheritance with multiple types of vehicles stemming from one vehicle parent class. Multiple functions and data are derived from the vehicle parent class. 
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Vehicle-Maintenace-Program" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
            </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return (
                // react single proj
                <div className = 'flex justify-between items-center w-full h-auto flex-col sm:flex-row'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Screenbook</CardTitle>
                        <CardText style = {{height: '175px'}}>
                                A social platform where users can review and share movies. This is a single page application that 
                                was created through the React library and router. Several other APIs were utilized such as Google's Login,
                                Firebase Database and Storage, and a Movie Database.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/movie101" colored>GitHub</Button>
                            <Button href = "https://screenbook-pn.web.app/" colored>Screenbook</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Covid-19 Statewide Tracker</CardTitle>
                        <CardText style = {{height: '175px'}}>
                            This web app handles and processes real-time covid updates from The Atlantic’s covid API. Various libraries like React and other Node packages are utilized. The interface and experience is designed to help raise awareness of the coronavirus spread throughout the United States.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Covid-State-Tracker" colored>GitHub</Button>
                            <Button href = "https://covid19statewidetracker.web.app/" colored>Covid-19 Tracker</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Nate's Portfolio</CardTitle>
                        <CardText style = {{height: '175px'}}>
                            You're on it right now! Created with the React library, this application best represents my work and where you can learn more about me. 
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Nate-Lee-Portfolio" colored>GitHub</Button>
                            <Button href = "https://nate-lee-portfolio.web.app/" colored>Portfolio</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                // python
                <div className = 'flex justify-between items-center w-full h-auto flex-col sm:flex-row'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Weather Tracker</CardTitle>
                        <CardText style = {{height:'175px'}}>
                            This application utilizes python and Django to read JSON files from the OpenWeather API and display real-time weather forecasts.
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Weather-Tracker" colored>GitHub</Button>
                            <Button href = "http://nateelee.pythonanywhere.com/" colored>Weather Tracker</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                    <div class = "w-4 h-4"></div>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://firebasestorage.googleapis.com/v0/b/nate-lee-portfolio.appspot.com/o/lastpng.jpg?alt=media&token=a56c04a8-069a-426c-aa4b-587330dfa2c0) center/ cover'}}>Hangman</CardTitle>
                        <CardText style = {{height: '175px'}}>
                            A python program that simulates the hangman game. To use the game, first create a directory with these files. Then open the terminal and cd into that directory and run the command line "python hangman.py"
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Hangman" colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        
        }
    }
    
    render() {
        return (
            <div className = "flex flex-col items-center  w-screen bg-gray-200 h-screen">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple> 
                  
                    <Tab >Java</Tab>
                    <Tab >C++</Tab>
                    <Tab >React</Tab>
                    <Tab >Python</Tab>
                    
                </Tabs>
                <div class = "bg-gray-200">
                    <Grid>
                        <Cell col = {12}>
                            <div className = "content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </div>
               
            </div>
        )
    }
}
export default Projects