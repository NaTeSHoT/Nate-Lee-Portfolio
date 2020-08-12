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
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Interactive Drawing App</CardTitle>
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
                // assembly single proj
                <div className = 'projects-grid'>
                    <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>

                        <CardTitle style = {{color:'white', height: '176px',  background: 
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Full Adder Circuit</CardTitle>
                        <CardText>
                            A Full Adder Circuit Simulator created through Assembly Language Programming
                        </CardText>
                        <CardActions border>
                            <Button href = "https://github.com/nateelee/Full-Adder-Circuit" colored>GitHub</Button>
                            
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
                    'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Transcript Evaluator</CardTitle>
                    <CardText>
                        A program that reads school transcript text files and outputs student information and calculated major and overall GPA
                    </CardText>
                    <CardActions border>
                        <Button href = "https://github.com/nateelee/Student-Transcript-Evaluator" colored>GitHub</Button>
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
                        'url(https://images.all-free-download.com/images/graphiclarge/black_velvet_203064.jpg) center/ cover'}}>Screenbook</CardTitle>
                        <CardText>
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
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className = "flex flex-col items-center  w-screen bg-gray-200 h-screen">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple> 
                    <Tab>Java</Tab>
                    <Tab>Assembly</Tab>
                    <Tab>C++</Tab>
                    <Tab>React</Tab>

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