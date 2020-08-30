import React, { Component } from 'react';
import './Myheader.css';
class Myheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:{}
        }
    }
    
    componentWillMount() {
        let date = new Date()
        let today = date.getDate()
        let month = date.getMonth()+1
        let year =  date.getFullYear()
        this.setState(()=>{
            return {
                date:{
                    today,
                    month,
                    year
                }
            }
        })

    }

    handleInputChange(e){
        console.log(e);
    }

    render() { 
        return (
            <div className='header'>
                <div className="date">
                    <div className="today">{this.state.date.today}</div>
                    <div>
                        <div className="month">{this.state.date.month}月</div>
                        <div className="year">{this.state.date.year}</div>
                    </div>
                   
                </div>
                <div className = 'title'>
                    <h1 className='work'>work<span className='iconfont icon-work'></span></h1>
                    <div>{this.props.tasknum}tasks</div>
                    <div>{this.props.havedone}done
                </div>
                </div>
            </div>
        );
    }
}
 
export default Myheader;