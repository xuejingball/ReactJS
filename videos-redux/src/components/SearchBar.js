import React from 'react';
import { connect } from 'react-redux';
import { fetchYoutubeAndSelectFirst } from '../actions';

class SearchBar extends React.Component {
    state = { searchText: '' }

    onInputChange = event => {
        this.setState({ searchText: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.fetchYoutubeAndSelectFirst(this.state.searchText);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchText} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { fetchYoutubeAndSelectFirst })(SearchBar);
