import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import Shop from "./component/shop/shop.component";
import {Switch,Route} from 'react-router-dom'
import Header from "./component/header/header.component";
import './App.css';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/signup" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
