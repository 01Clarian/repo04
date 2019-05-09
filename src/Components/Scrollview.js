import React from 'react';

const ScrollView = (props) => {
	return(
		<div className= 'pa3' style={{overflowY: 'scroll', border: '3px solid black', borderColor: "yellow", opacity: "0.8", height: '500px'}}>
			{props.children}
		</div>
	)
}

export default ScrollView;