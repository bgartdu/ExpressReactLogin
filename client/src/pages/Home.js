import React from 'react';
import Global from "../Global";


class Home extends React.Component {
    static contextType = Global;
    
    // constructor() {
    //     super();
    // }
    
    render() {
        return <div>
			<h1>Home Page</h1>
		</div>
    }    
}

export default Home;