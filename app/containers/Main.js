import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
	render(){
		return(
			<div>
				<nav>
				  <div 
				  	className="nav-wrapper"
				  	style = {styles.navBar}>
				  	<Link 
				  		to='/'
				  		style={styles.logo}> 
				  		Movie Lister
				  	</Link>
				    
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">

				      <li><a href="/" style={styles.fontColor}>Home</a></li>
				      <li><a href="/" style={styles.fontColor}>Login</a></li>
				      <li><a href="/" style={styles.fontColor}>Register</a></li>
				    </ul>
				  </div>
				</nav>
	        
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})