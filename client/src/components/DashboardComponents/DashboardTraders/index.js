import React, { Component } from "react";
import axios from "axios";
import "./style.css"

class DashboardTraders extends Component {

  constructor() {
    super()
    this.state = {
      trader1: "",
      trader2: "",
      trader3: "",
      trader4: "",
      trader5: "",
    }
  }

  componentDidMount = () => {
    
    axios.get(`/traders/`)
    .then(response => {
      console.log(response.data);

      this.setState({
        trader1: response.data[0].username,
      })

      })


  }


  render() {
    return (
      <div style={{ height: 500,  paddingTop: 120, marginTop:60, textAlign: "center" }} className="jumbotron">
        <h3>New Traders:</h3>
          <ul>
            <li>{this.state.trader1}</li>
          </ul>
      </div>
    );
  }
}

export default DashboardTraders;
