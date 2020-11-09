import React, { Component } from 'react';

class CountBy extends Component {
   

    componentDidMount() {

    }
    componentDidUpdate() {

    }

    render() {
        var RequestNodes = this.props.dataBucket.map((request) => {
            return (<div onClick={(e) => this.props.updateBucket(request.properties.country)}>{request.properties.country}</div>)
     });
        return (
            
            <div>Count By Tool
                {RequestNodes}
            </div>
        )
    }
}

export default CountBy;