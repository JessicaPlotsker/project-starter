import React from 'react';
import {Form , Button}  from 'react-bootstrap';
import logo from './assets/AniLibLogo.png';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
      <img className="AniLib" src={logo}></img>

        {/* <image src={logo} /> */}
        <h1 className="Ani-text"> AniLib </h1>
  

<Form>
  <Form.Control type= "text" placeholder="Enter a title" />
  </Form>
 
  <Button variant= "outline-primary">Submit</Button>{''}
  
      </div>
    );
  }
}


export default App;
