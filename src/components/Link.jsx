import React from "react";
 const Link = ({ href, ...props }) => {
	return <a href={href}>{props.children}</a>;
};

export default Link
