import React from "react";
import { Form, Button } from "react-bootstrap";
import logo from "./assets/AniLibLogo.png";
import "./App.css";
class App extends React.Component {
  state = {
    input: "",
    showLibrary:false,
    library: [
      {
        id: 1,
        Name: "queens college library",
        Address: "65-30 kissena blvd, flushing, ny 11367",
      },
      {
        id: 2,
        Name: "west hempstead public library",
        Address: "500 hempstead ave, west hempstead, ny 11552",
      },
      {
        id: 3,
        Name: "new york city public library",
        Address: "476 5th ave, new york, ny 10018",
      },
      {
        id: 4,
        Name: "queens public library",
        Address: "41-17 main st, flushing, ny 11355",
      },
      {
        id: 5,
        Name: "brooklyn public library",
        Address: "203 arlington ave. at, warwick st, brooklyn, ny 11207",
      },
    ],
  };
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({showLibrary: true})
    console.log("handle submit")
    };
  render() {
    let library = this.state.showLibrary;
    return (
      <div>
        <img className="AniLib" src={logo}></img>
        {/* <image src={logo} /> */}
        <h1 className="Ani-text"> AniLib </h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            className='input-box'
            type="text"
            placeholder="Enter a title"
            onChange={this.handleChange}
          />
          <Button className="submit" type="submit" variant="outline-primary">
          Submit
        </Button>
        </Form>
        <div style={{textAlign:"center"}}>   Manga Title: {this.state.input} </div>
        {library &&  this.state.library.map((libraries) => (
          <div className='results' key={libraries.Name}>
            <div>{libraries.Name}: </div>
            <div>{libraries.Address}</div>
          </div>
        )) }
        {""}
      </div>
    );
  }
}
export default App;