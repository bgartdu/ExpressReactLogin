import React from 'react';
import Global from "../Global";
import ChangePassword from '../components/ChangePassword';


class ControlPanel extends React.Component {
    static contextType = Global;
    
    // constructor() {
    //     super();
    // }
    
    render() {
        return <div className="row">
			<ChangePassword />
		</div>
    }    
}

export default ControlPanel;