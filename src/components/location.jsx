import React from 'react';

const location = ( withPathname ) =>
	window.location.origin + (withPathname ? window.location.pathname : '');

const Location = ({ withPathname, asLink = false }) =>
	asLink === false
		? <div> { location( withPathname ) } </div>
		: <a href={location( withPathname )}>{ location( withPathname ) }</a>;

export default Location;
