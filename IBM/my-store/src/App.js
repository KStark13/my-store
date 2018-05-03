import React, { Component } from 'react';
import LoginForm from "./components/Login/Login";
import LoginPage from "./components/pages/Loginpage";
import Items from "./pages/Items";



class App extends Component {
  render() {
    return (
      <div>
      <LoginPage />
      <LoginForm />
      <Items/>
      </div>
    );
  }
}

export default App;
