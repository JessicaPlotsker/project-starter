import React from 'react';
import {Form , Button}  from 'react-bootstrap';
import logo from './assets/AniLibLogo.png';
import './App.css';



class App extends React.Component {
  state={
    input: ''
  }

  handleChange = (event) =>{
    console.log(event.target.value)
    this.setState({input : event.target.value})
  }
  render() {
    return (
      <div>
      <img className="AniLib" src={logo}></img>

        {/* <image src={logo} /> */}
        <h1 className="Ani-text"> AniLib </h1>
  

<Form>
  <Form.Control type= "text" placeholder="Enter a title" onChange={this.handleChange} />
  </Form>
  <div> Manga Title: {this.state.input}</div>
  {this.state.input.length === 0 ? <h1>No Results</h1> : null}
 
  <Button variant= "outline-primary">Submit</Button>{''}
  
      </div>
    );
  }
}


export default App;
