import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import { SignInWithGoogle } from "../../component/firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handlechanges = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handlesubmit = event => {
        event.preventDefault();
        this.setState({ username: "", password: "" });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <p>signin with username and password</p>
                <form onSubmit={this.handlesubmit}>
                    <FormInput type="text" name="username" handlechange={this.handlechanges} value={this.state.username} label="username" />
                    <FormInput type="text" name="password" handlechange={this.handlechanges} value={this.state.password} label="password" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp