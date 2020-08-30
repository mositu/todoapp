import React, { Component } from 'react';
import Myheader from './Myheader';
import Addtask from './Addtask';
import './Todolist.css'

class TodoList extends Component {

	constructor(props) {
		super(props);

		this.handleAddTask = this.handleAddTask.bind(this);

		this.state = {
			havedone: 0,
			list: [
				{
					task: 'Learning React',
					haveDone: false
				   },
				   {
					task: 'Learning Jsx',
					haveDone: false
				   },
				   {
					task: 'React in action',
					haveDone: false
				   }
			]
		}
	}

	handleDone(index){
		const list = [...this.state.list];
		if (list[index].haveDone) {
			list[index].haveDone = !list[index].haveDone
			let num = this.state.havedone-1
			this.setState({havedone:num})
		} else {
			list[index].haveDone = !list[index].haveDone
			let num = this.state.havedone+1
			this.setState({havedone:num})
		}
		
		this.setState({list})
	}

	handleButtonClick(index){
		const list = [...this.state.list];
		list.splice(index, 1);
		let num = this.state.havedone <= 0 ? this.state.havedone :this.state.havedone-1
		this.setState({havedone:num})
		this.setState({list})
	}
	handleAddTask(task){
		const list = [...this.state.list];
		const newtask = {
			task,
			haveDone: false
		}
		list.push(newtask)
		this.setState({list})
	}

	listItems() {
		return this.state.list.map((item,index)=>{
			return(
				<li className ='list-item' key={index}>
					<div className={item.haveDone?'task task-done':'task'} onClick={ this.handleDone.bind(this,index)}>{item.task}</div>
					<div className='button iconfont icon-delete' onClick={this.handleButtonClick.bind(this,index)}></div>
				</li>
				
			)
		})
	}

	render() {

		return (
			<div className='main'>
				<Myheader tasknum = {this.state.list.length} havedone = {this.state.havedone}/>
				<div className="container">
					<div className='list-title'>Today</div>
					<ul>
						{this.listItems()}
					</ul>
				</div>
				<Addtask addTaskevent = {this.handleAddTask.bind(this)}/>
			</div>
		);
	}

}

export default TodoList;