import React from "react";
import World from "@svg-maps/world";
import {SVGMap} from "react-svg-map";
import {Pulse} from "../Pulse/Pulse";
import './MapChart.scss';
import "react-svg-map/lib/index.css";

const LOCATION_LIST = [
	{location: 'India', color: 'rgb(144,83,137)'},
	{location: 'China', color: 'rgb(198,206,91)'},
	{location: 'Tanzania', color: 'rgb(209,53,39)'},
	{location: 'Kenya', color: 'rgb(0,149,159)'},
	{location: 'United Arab Emirates', color: 'rgb(0,139,200)'},
	{location: 'South Africa', color: 'rgb(242,200,1)'},
	{location: 'Uganda', color: 'rgb(128, 121, 239)'},
];
const LocationList = () => {
	return (
			<div className='MapChart-locationList'>
				{LOCATION_LIST.map((location, index) => (
						<div className='MapChart-location' key={index}>
							<Pulse isDisabled color={location.color}/>
							<div>{location.location}</div>
						</div>
				))}
			</div>
	);
}
const MapChart = () => {
	return <div className='MapChart-worldMap'>
		<SVGMap map={World}/>
		<LocationList/>
	</div>;
};
export default MapChart;
