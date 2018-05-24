import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Header from "./component/Header";
import WeatherDisplay from './component/Weather';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

// const PLACES = [
//   { name: "Khmelnytskyi", zip: "29015" },
//   { name: "Palo Alto", zip: "94303" },
//   { name: "San Jose", zip: "94088" },
//   { name: "Santa Cruz", zip: "95062" },
//   { name: "Honolulu", zip: "96803" }
// ];


// const PLACES = [] 
// fetch('http://localhost:8000/api/code')
//   .then(res => res.json())
//   .then(data => {
//     return PLACES = data
//   })
// console.log(PLACES)

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
      PLACES: []
    }
  }
  componentLoad() {
    fetch('http://localhost:8000/api/code')
      .then(res => res.json())
      .then(data => {
        this.setState({PLACES: data})
      })
  }
  render() {
    this.componentLoad();
    const activePlace = this.state.activePlace;
    const PLACES = this.state.PLACES;
    console.log(PLACES)
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav
                bsStyle="pills"
                stacked
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}
              >
                {PLACES.map((place, index) => (
                  <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                ))}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
