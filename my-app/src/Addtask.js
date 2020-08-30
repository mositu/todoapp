import React, { Component } from 'react';
import './Addtask.css';
import Addlist from './Addlist';

class Addtask extends Component {
    constructor(props) {
        super(props);

        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);

        this.state = {
            isAdd: false
        }
    }

    handleAddClick(){
        let isAdd = true
        this.setState({
            isAdd
        })
    }

    handleCloseClick(){
        let isAdd = false
        this.setState({
            isAdd
        })
    }

    addTask(taskname){
        this.props.addTaskevent(taskname)
    }

    render() {     
        return (
            <div>
                <div className='addbutton iconfont icon-AddwithcircleF' onClick={this.handleAddClick}></div>
                {this.state.isAdd && <Addlist add={this.props.addTaskevent} close={this.handleCloseClick}/>}

            </div>  
            
        );
    }
}

export default Addtask;