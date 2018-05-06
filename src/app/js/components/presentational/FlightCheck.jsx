import React, { Component } from 'react'




const Step = ({description, completed}) => (
	<div className="step">
		<span>{completed.toString()}</span>
		<span>{description}</span>
	</div>
)




export const FlightCheck = ({steps}) => (
	<div className="flightCheck">
		{
			steps.map(({name, description, completed}) => {
				return (
					<Step description={description} completed={completed} key={name}/>
				)
			})
		}
	</div>
)