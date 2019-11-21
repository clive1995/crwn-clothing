import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import Shop from "./component/shop/shop.component";
import { Switch, Route } from 'react-router-dom'
import Header from "./component/header/header.component";
import './App.css';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth } from "./component/firebase/firebase.utils";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentuser: null
    }
  }

  unsubscribeAuth = null
  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header siginprop={this.state.currentuser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/signup" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
