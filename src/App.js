import React, { Component, Fragment } from "react";
import "./App.scss";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Map/Layers";
import { osm, vector } from "./Map/Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl, ResetBucket } from "./Map/Controls";
import ExecutiveToolbar from "./Components/Common/ExecutiveToolbar/ExecutiveToolbar";
import ToolLauncher from "./Components/Common/ToolLauncher/ToolLauncher";
import { createUUID } from "./Helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBucket: {},
      isLoaded: false,
      filteredBucket: {},
	  launchedTools: [],
    bucketList: ["Population", "Another Bucket"],
    availableThemes: [
      {name: "Light Gray", class: "default", default: true},
      {name: "Dark Blue", class: "blue-theme"}
    ]
    };
    this.getData = this.getData.bind(this);
    this.updateBucket = this.updateBucket.bind(this);
    this.launchTool = this.launchTool.bind(this);
    this.closeTool = this.closeTool.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("data/world-cities.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            dataBucket: result,
            filteredBucket: result,
            isLoaded: true,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  closeTool(id) {
    if (id !== "all") {
      // Removes selected tool from launched tools
      const filteredItems = this.state.launchedTools.filter(function (item) {
        return item.props.uuid !== id;
      });
      this.setState({
        launchedTools: filteredItems,
      });
    } else {
      this.setState({
        launchedTools: []
      });
    }
  }



  launchTool(t, d) {
    // Adds requested tool to launched tools state variables
    this.setState({
      launchedTools: [
        ...this.state.launchedTools,
        <ToolLauncher
          tag={t}
          dataBucket={this.state.dataBucket}
          updateBucket={this.updateBucket}
          draggable={d}
          closeTool={this.closeTool}
		  uuid={createUUID()}
		  bucketList={this.state.bucketList}
      changeBucket={this.changeBucket}
      minimizeTool={this.minimizeTool}
        />,
      ],
    });
  }

  changeBucket(b) {
	  console.log("Changing buckets for a specific tool")
  }

  changeTheme(theme) {
    console.log(theme)
    document.getElementById("root").className = theme
  }

  updateBucket(e) {
    if (e !== "reset") {
      let thisFilteredBucket = { type: this.state.dataBucket.type };
      thisFilteredBucket.features = this.state.dataBucket.features.filter(
		// eslint-disable-next-line
        (item) => {
          if (item.properties.country === e) {
            return item;
          }
        }
      );
      this.setState({
        filteredBucket: thisFilteredBucket,
        toggleView: !this.state.toggleView,
      });
    } else {
      this.setState({
        filteredBucket: this.state.dataBucket,
        toggleView: !this.state.toggleView,
      });
    }
  }

  render() {
    const center = [-94.9065, 38.9884];
    const zoom = 0;
    return (
      <div>
        {this.state.isLoaded ? (
          <Fragment>
            <ExecutiveToolbar
              launchTool={this.launchTool}
			  closeTool={this.closeTool}
        launchedTools={this.state.launchedTools}
        availableThemes={this.state.availableThemes}
        changeTheme={this.changeTheme}
            />
            <Map center={fromLonLat(center)} zoom={zoom}>
              <Layers>
                <TileLayer source={osm()} zIndex={0} />
                {this.state.toggleView === true ? (
                  <VectorLayer
                    source={vector({
                      features: new GeoJSON().readFeatures(
                        this.state.filteredBucket,
                        { featureProjection: get("EPSG:3857") }
                      ),
					})}
                  />
                ) : (
                  <Fragment>
                    <VectorLayer
                      source={vector({
                        features: new GeoJSON().readFeatures(
                          this.state.filteredBucket,
                          { featureProjection: get("EPSG:3857") }
                        ),
                      })}
                    />
                  </Fragment>
                )}
              </Layers>
              <Controls>
                <FullScreenControl />
                <ResetBucket updateBucket={this.updateBucket} />
              </Controls>
            </Map>
          </Fragment>
        ) : null}
        {this.state.launchedTools}
      </div>
    );
  }
}

export default App;
