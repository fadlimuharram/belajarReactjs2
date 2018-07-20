import React from 'react';
import {render} from 'react-dom';
import AwesomeCOmponenet from './AwesomeComponent.jsx';


class App extends React.Component {
    render(){
        return(
            <div>
                <p> Hello React Project </p>
                <AwesomeCOmponenet />
            </div>
        )
    }
}

render(<App/>,document.getElementById('app'));