import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';
import Header from "./component/Header";
import WeatherDisplay from './component/Weather';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
import axios from 'axios';

const URL = 'http://localhost:8000/api/code';

// const PLACES = [
//   { name: "Khmelnytskyi", zip: "29015" },
//   { name: "Palo Alto", zip: "94303" },
//   { name: "San Jose", zip: "94088" },
//   { name: "Santa Cruz", zip: "95062" },
//   { name: "Honolulu", zip: "96803" }
// ];
// console.log("PLACES Original", PLACES)

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
      PLACES: []
    }
  }
  // getPlaces() {
  //   fetch('http://localhost:8000/api/code')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log("Response", responseJson)
  //       this.setState({ PLACES: responseJson })
  //       console.log("PLACES: ", this.state.PLACES)
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  // componentDidMount() {
  //  this.getPlaces()
  // }
  componentWillMount() {
    axios
      .get(URL)
      .then(response => {
        const newPlaces = response.data.map(c => {
          return {
            name: c.name,
            zip: c.zip
          };
        });
        const newState = Object.assign({}, this.state, {
          PLACES: newPlaces
        });
        this.setState(newState)
      })
  }
  render() {
    const activePlace = this.state.activePlace;
    const PLACES = this.state.PLACES;
    if (PLACES.length === 0) {
      return (<h1>Load....</h1>)
    }
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
