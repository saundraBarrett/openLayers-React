import React from "react";

const ResetBucket = (props) => {
	return (<button onClick={() => props.updateBucket("reset")}>Reset</button>)
};

export default ResetBucket;