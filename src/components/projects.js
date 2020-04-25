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

                        <CardTitle style = {{color:'black', height: '176px',  background: 
                        'url(https://www.chip.de/ii/7/9/0/9/0/6/6/4/0fc51f82e036e1d3.jpg) center/ cover'}}>Java Project #1</CardTitle>
                        <CardText>
                            Description Goes Here
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "share"/>
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
                        'url(https://hackr.io/tutorials/learn-assembly-language/logo/logo-assembly-language?ver=1557983975) center/ cover'}}>Assembly Project #1</CardTitle>
                        <CardText>
                            Description Goes Here
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "share"/>
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

                    <CardTitle style = {{color:'black', height: '176px',  background: 
                    'url(https://www.chip.de/ii/7/9/0/9/0/6/6/4/0fc51f82e036e1d3.jpg) center/ cover'}}>C++ Project #1</CardTitle>
                    <CardText>
                        Description Goes Here
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        
                    </CardActions>
                    <CardMenu style = {{color:'#fff'}}>
                        <IconButton name = "share"/>
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

                        <CardTitle style = {{color:'black', height: '176px',  background: 
                        'url(https://www.chip.de/ii/7/9/0/9/0/6/6/4/0fc51f82e036e1d3.jpg) center/ cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Description Goes Here
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            
                        </CardActions>
                        <CardMenu style = {{color:'#fff'}}>
                            <IconButton name = "share"/>
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