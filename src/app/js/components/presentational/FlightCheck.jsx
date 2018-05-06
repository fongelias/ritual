import React, { Component } from 'react'




const Step = ({name, completed}) => (
	<div className="step">
		<span>{completed.toString()}</span>
		<span>{name}</span>
	</div>
)




export const FlightCheck = ({steps}) => (
	<div className="flightCheck">
		{
			Object.entries(steps).map(([name, completed]) => {
				return (
					<Step name={name} completed={completed} key={name}/>
				)
			})
		}
	</div>
)