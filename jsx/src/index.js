// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!';
// }

// Create a react component
const App = () => {
    const labelText = 'Enter name: '; // but we are not allowed to reference a whole js object in jsx text area
    const buttonText2 = {text: 'Click Me!'};
    const style = {backgroundColor: 'blue', color: 'white'};
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText2.text}
                {/* {getButtonText()} */}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);