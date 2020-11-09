import React, { Component, useState } from 'react';
import './App.css';
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Map/Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { osm, vector } from "./Map/Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "./Map/Controls";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			geojsonObject: {},
			isLoaded: false
		}
		this.getData = this.getData.bind(this)
	}
	componentDidMount() {
		this.getData()
	}

	getData() {
		console.log("getting data")
		fetch("data/testData.json")
		.then(res => res.json())
		.then(
		  (result) => {
			  console.log(result)
			this.setState({
			  geojsonObject: result, 
			  isLoaded: true
			}, () => console.log(this.state));
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			console.log(error)
		  }
		)
	}

	render() {
	

		const center = [-94.9065, 38.9884];
	const zoom = 0;
		
		return (
			
			<div>
				<Map center={fromLonLat(center)} zoom={zoom}>
					<Layers>
						<TileLayer
							source={osm()}
							zIndex={0}
						/>
{this.state.isLoaded ? 
	<VectorLayer
								source={new GeoJSON().readFeatures(this.state.geojsonObject)}
								
							/>
: null}
							
						
					</Layers>
					<Controls>
						<FullScreenControl />
					</Controls>
				</Map>
				
			</div>
		);
	}
}


export default App;
