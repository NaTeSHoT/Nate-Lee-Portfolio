import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Education extends Component {
    render () {
        return (
            <Grid>
                <Cell col = {4}>
                    <p class = "text-2xl">{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col  = {8}>
                     <h4 class = "text-3xl pb-4"style = {{marginTop: '0px'}}>{this.props.schoolName}</h4>
                     <p class = "text-xl pb-4">{this.props.schoolDescription}</p>
                     <p class = "text-xl pb-4">{this.props.courses}</p>
                </Cell>
            </Grid>
          
        )
    }
}
export default Education