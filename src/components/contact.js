import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent, CardMenu} from 'react-mdl'
class Contact extends Component {
    render() {
        return (
            <div className = 'contact-body'>
                <Grid className = 'contact-grid'>
                    <Cell col = {4}>
                        <h2>Nathaniel Lee</h2>
                        <img
                            src = "https://avatarfiles.alphacoders.com/131/131718.jpg"

                            alt = "avatar"
                            style = {{height: '250px'}}
                            
                        />
                        <p style = {{width: '75%', margin: 'auto', paddingTop: '1em'}}>I need to show my own face here</p>
                    </Cell>
                    <Cell col = {6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className = "contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-phone -square" aria-hidden = "true"/>
                                        (925) 999-5426
                                       
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-envelope" aria-hidden = "true"/>
                                        nathaniel902@gmail.com
                                       
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-linkedin-square" aria-hidden = "true"/>
                                        linkedin.com/NaTeSHoT
                                       
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className = "fa fa-github-square" aria-hidden = "true"/>
                                        github.com/NaTeSHoT
                                       
                                    </ListItemContent>
                                </ListItem>
                        </List>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact