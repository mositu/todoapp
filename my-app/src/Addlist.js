import React, { Component } from 'react';

class Addlist extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);

        this.state = {
            newtask:''
        }
    }

    handleInputChange(e) {
		this.setState({
			newtask: e.target.value
        })
    }
    
    addTask(taskname){
        if(!taskname){
            return
        }
        this.props.add(taskname)
        this.props.close()
    }

    handleButtonClick(){
        this.addTask(this.state.newtask)
    }

    render() { 
        console.log(this.props);
        return (
            <div className='wrapper'>
                    <div className='mywindow'>
                        <div className='mywindow-title'>plan</div>
                        <input 
                            id='myinput'
                            type="text"
                            placeholder="i think..."
                            autoComplete="off"
                            value = {this.state.newtask}
                            onChange={this.handleInputChange}
                        />
                        <div className="button-wrapper">
                            <div className="button" onClick={this.handleButtonClick}>ok</div>
                            <div className='button' onClick={this.props.close}>cancel</div>
                        </div>
                        
                    </div>
                    
                </div>
        );
    }
}
 
export default Addlist;