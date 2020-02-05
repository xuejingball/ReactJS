import React from 'react';

class SearchBar extends React.Component {
    state = { searchText: '' }

    onInputChange = event => {
        this.setState( {searchText: event.target.value} );
    }

    onFormSubmit = event => {
        event.preventDefault(); // if the event does not get explicitly handled, its default action should not be taken as it normally would be
        // Form submit default event is to reload the page

        //TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchText} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;