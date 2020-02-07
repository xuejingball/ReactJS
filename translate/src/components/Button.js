import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // static contextType = LanguageContext; // need to be exactly contextType only when use this.context

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {value => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    };
}

export default Button;