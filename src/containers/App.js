import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import Errorboundry from '../component/Errorboundry';
// import {robots} from './robots';

class App extends Component {
	constructor(){
	super()
	this.state= {
		robots : [],
		searchfild:'',
		}
	}

	componentDidMount() {
	    fetch('https://jsonplaceholder.typicode.com/users')
	         .then(response=> response.json())
	         .then(users => this.setState({robots : users})); 
		    
		    
	    // this.setState({robots : robots})

	}

	onSearchChange = (event) => {
		this.setState({ searchfild: event.target.value});
	}
	render(){
	const {robots,searchfild}= this.state;
	const filterrobots= robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchfild.toLowerCase())
		})
	if (!robots.length){
		return <h1 className='tc pv7'>Loading..</h1>
	} else { 
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1> 
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<Errorboundry>
						<CardList robots = {filterrobots} />
					</Errorboundry>	
				</Scroll>
			</div>
			)
		}
    }
}
export default App;