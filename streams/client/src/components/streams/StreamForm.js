import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    renderError({ error, touched }) { // within Field meta data, there is active, error, warning, invalid, touched, visited, etc field
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    // Component function receive props from Field, including input,meta and label
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    // onSubmit function will call the props.onSubmit call back function which was passed down by StreamForm parent
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> {/* handleSubmit is redux-form builtin submit event listener */}
            {/* Field names are unique for that field, corresponding to a value in the form values
                Component can be statefull class or stateless function
            */} 
                <Field name="title" component={this.renderInput} label="Enter Title" /> 
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

// a synchronous validation function that takes the form values and props (reduxForm props, etc form: "streamForm") passed into your component. 
// If validation passes, it should return {}. 
// If validation fails, it should return the validation errors in the form { field1: <String>, field2: <String> }. 
// Defaults to (values, props) => ({}).
const validate = function (formValues) {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm', // a unique name for the form 
    validate
})(StreamForm);