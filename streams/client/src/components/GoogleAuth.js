import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        // initialize google's js lib makes auth request to Google
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '914788218317-5kge3aqvse6c2r3s28pr9lnfqcrcffut.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //user clicks signin or sign out, auth detect the change, trigger action creator to operate actions
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId()); // user clicks signin or sign out, auth detect the change, trigger action creator to operate actions
        } else {
            this.props.signOut();
        }
    };

    // if user clicks to sign in, google auth direct to sign in
    onSignInClick = () => {
        this.auth.signIn();
    };

    // if user clicks to sign out, google auth direct to sign out
    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);