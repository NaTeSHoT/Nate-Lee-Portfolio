import React, {Component} from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'
import {Redirect, Router} from 'react-router-dom'
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
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Java Project #1</CardTitle>
                        <CardText>
                            An interactive drawing GUI App that uses JavaFX
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/NaTeSHoT/Interactive-Drawing-GUI-Application" colored>GitHub</Button>
                            
                            
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
                // assembly single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Assembly Project #1</CardTitle>
                        <CardText>
                            A Full Adder Circuit Simulator created through Assembly Language Programming
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/NaTeSHoT/Full-Adder-Circuit" colored>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "N"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                // c++ single proj
                <div className = 'projects-grid'>
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                    <CardTitle style = {{color:'white', height: '176px',  background: 
                    'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>C++ Project #1</CardTitle>
                    <CardText>
                        A program that reads school transcript text files and outputs student information and calculated major and overall GPA
                    </CardText>
                    <CardActions border>
                        <Button href = "https://github.com/NaTeSHoT/Student-Transcript-Evaluator" colored>GitHub</Button>
                        
                    </CardActions>
                    <CardMenu style = {{color:'#fff'}}>
                        <IconButton name = "N"/>
                    </CardMenu>
                </Card>
            </div>
            )
        }
        else if(this.state.activeTab === 3) {
            return (
                // react single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>React Project #1</CardTitle>
                        <CardText>
                            An interactive web app that is currently in progress
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/NaTeSHoT/movie101" colored>GitHub</Button>
                            
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
            <div className = "category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple> 
                    <Tab>Java</Tab>
                    <Tab>Assembly</Tab>
                    <Tab>C++</Tab>
                    <Tab>React</Tab>

                </Tabs>
              
                    <Grid>
                        <Cell col = {12}>
                            <div className = "content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
               
            </div>
        )
    }
}
export default Projects