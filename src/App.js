import React, { Component, Fragment } from 'react';
import './App.css';
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Map/Layers";
import { osm, vector } from "./Map/Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "./Map/Controls";
import CountBy from "./Components/CountBy/CountBy"
import { Rnd } from "react-rnd";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataBucket: {},
			isLoaded: false,
			filteredBucket: {},
			filteredView: false
		}
		this.getData = this.getData.bind(this)
		this.updateBucket = this.updateBucket.bind(this)
	}
	componentDidMount() {
		this.getData()
	}

	getData() {
		fetch("data/world-cities.json")
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
					this.setState({
						dataBucket: result,
						filteredBucket: result,
						isLoaded: true
					});
				},
				(error) => {
					console.log(error)
				}
			)
	}

	updateBucket(e) {
		console.log(e)
		let thisFilteredBucket = { "type": "FeatureCollection" }
		thisFilteredBucket.features = this.state.dataBucket.features.filter(item => {
			if (item.properties.country === e) {
				return item;
			}
		});
		this.setState({
			filteredBucket: thisFilteredBucket,
			toggleView: !this.state.toggleView
		})

	}


	render() {
		const center = [-94.9065, 38.9884];
		const zoom = 0;

		return (
			<div>
				{this.state.isLoaded ?
					<Fragment>
						<Map center={fromLonLat(center)} zoom={zoom}>
							<Layers>
								<TileLayer
									source={osm()}
									zIndex={0}
								/>
								{this.state.toggleView === false ?
									<VectorLayer
										source={vector({ features: new GeoJSON().readFeatures(this.state.filteredBucket, { featureProjection: get('EPSG:3857') }) })}
									/>
									: <Fragment>
										<VectorLayer
											source={vector({ features: new GeoJSON().readFeatures(this.state.filteredBucket, { featureProjection: get('EPSG:3857') }) })}
										/>
									</Fragment>

								}

							</Layers>
							<Controls>
								<FullScreenControl />
							</Controls>
						</Map>
						<Rnd
							default={{
								x: 0,
								y: 0,
								width: 320,
								height: 200
							}}
						>
							Rnd
  </Rnd>
						<CountBy {...this.state} dataBucket={this.state.dataBucket.features} updateBucket={this.updateBucket} />
					</Fragment>

					: null}

			</div>
		);
	}
}


export default App;
