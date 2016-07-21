import React from 'react';

import HomeContainer from './HomeContainer'

const Main = React.createClass({
	render(){
		return(
			<div>
				<nav>
					<ul>
						<li>Menu One</li>
						<li>Menu Two</li>
						<li>Menu Three</li>
					</ul>
				</nav>

				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Main;