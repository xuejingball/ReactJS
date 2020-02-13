import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    // this onSubmit function is a call back function passes to StreamForm, which will call createStream action creator
    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);