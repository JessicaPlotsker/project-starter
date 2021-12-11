import React from "react";
import { Form, Button } from "react-bootstrap";
import logo from "./assets/AniLibLogo.png";
import "./App.css";

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// var randVol = getRandomArbitrary(1, 20);

class App extends React.Component {
  state = {
    input: "",
    showLibrary:false,
    library: [
      {
        id: 1,
        Title: "Naruto",
        Volume: Math.floor(Math.random() * (20 - 1) + 1),
        Name: "queens college library",
        Address: "65-30 kissena blvd, flushing, ny 11367",
      },
      {
        id: 2,
        Volume: Math.floor(Math.random() * (20 - 1) + 1),
        Name: "west hempstead public library",
        Address: "500 hempstead ave, west hempstead, ny 11552",
      },
      {
        id: 3,
        Volume: Math.floor(Math.random() * (20 - 1) + 1),
        Name: "new york city public library",
        Address: "476 5th ave, new york, ny 10018",
      },
      {
        id: 4,
        Volume: Math.floor(Math.random() * (20 - 1) + 1),
        Name: "queens public library",
        Address: "41-17 main st, flushing, ny 11355",
      },
      {
        id: 5,
        Volume: Math.floor(Math.random() * (20 - 1) + 1),
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
  resetClicked (input) {

      window.location.reload();
      console.log("reset");
      window.location.reload(false);
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
          <div className="buttons">
            <Button className="submit-button" type="submit" variant="outline-primary">Search</Button>
            <Button className="reset-button" type="reset" variant="outline-primary" onClick={() => window.location.reload(false)}>Reset</Button>
          </div>
        </Form>
        {/* <div style={{textAlign:"center"}}>   Manga Title: {this.state.input} </div> */}
        {library &&  this.state.library.map((libraries) => (
          <div className='results' key={libraries.Name}>
            <div>Title: {this.state.input}</div>
            <div>Volume: {libraries.Volume}</div>
            <div>Library: {libraries.Name}</div>
            <div>Address: {libraries.Address}</div>
          </div>
        )) }
        {""}
      </div>
    );
  }
}
export default App;