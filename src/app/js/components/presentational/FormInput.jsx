import React, { Component } from 'react';


export const FormInput = ({ value, placeholder, type, changeFn, error }) => (
	<div className="formInput">
		<label>{placeholder}</label>
		<input type={type} value={value} placeholder={placeholder} onChange={changeFn}/>
		<span className={error ? "active" : ""}>{error}</span>
	</div>
)