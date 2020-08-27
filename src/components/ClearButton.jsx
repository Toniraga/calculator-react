import React from "react";
import "./ClearButton.css";

export const ClearButton = ({ children, handleClear }) => (
	<div className="clear-btn" onClick={handleClear}>
		{children}
	</div>
);
