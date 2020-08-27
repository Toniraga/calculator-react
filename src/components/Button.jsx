import React from "react";
import "./Button.css";

const isOperator = (val) => {
	return !isNaN(val) || val === "." || val === "=";
};

export const Button = ({ children, handleClick }) => (
	<div
		className={`button-wrapper ${
			isOperator(children) ? null : 'operator'
		}`}
		onClick={() => handleClick(children)}
	>
		{children}
	</div>
);
