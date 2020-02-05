import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onUserSubmit(this.state.term);
        // this could be undefined
        // 1. constructor() {this.drive = this.drive.bind(this)}
        // 2. use arrow function: onFormSubmit = event => {}
        // 3. invoke this.onFormSubmit() instead of useing the reference
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => {
                                this.setState({ term: e.target.value }); // everytime setState, render func gets re-render again
                                // easily use e.target.value.toUpperCase() to automatically transform input to upper case
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;