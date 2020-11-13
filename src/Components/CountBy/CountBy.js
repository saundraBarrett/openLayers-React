import React, { Component } from "react";

class CountBy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch("data/countries.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            countries: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  countCities(c) {
    console.log(this.props.dataBucket.features[0].properties.country);
    var count = 0;
    for (var i = 0; i < this.props.dataBucket.features.length; ++i) {
      if (
        this.props.dataBucket.features[i].properties.country ===
        c.Code.toLowerCase()
      )
        count++;
    }
    return count;
  }

  render() {
    var RequestNodes = this.state.countries.map((request, i) => {
      return (
        <div
          key={i}
          className="col-sm-3 border selectable d-flex"
          onClick={(e) => this.props.updateBucket(request.Code.toLowerCase())}
        >
          <small className="col p-0 text-left">
            {request.Name}
            </small>     
            <small  className="col p-0 text-right">
            {this.countCities(request)}
                </small>       
            
          
        </div>
      );
    });
    return <div className="row m-1">{RequestNodes}</div>;
  }
}

export default CountBy;
