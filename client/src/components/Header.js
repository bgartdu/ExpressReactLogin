import React from 'react';
import Global from "../Global";


class Header extends React.Component {
	static contextType = Global;
	
	// constructor() {
	//	 super();
	// }
	
	render() {
		return <div className ="row card valign-wrapper">
			<div className="col s8"><h5>Login Example</h5></div>
			<div className="col card s4">
				{
					this.context.username ? [
						`Currently logged in as ${this.context.username}`,
						<br />,
						<a href = "/controlPanel"> Control Panel </a>, "|",
						<a href = "#" onClick={this.context.logout}>Log Out</a>
					] : [
						<a href = "/login"> go to login </a>
					]
				}
			</div>
		</div>
	}	
}

export default Header;