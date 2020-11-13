import React, { Component } from 'react';

class ListTool extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }

    render() {
        var RequestNodes = this.props.dataBucket.features.map((request, i) => {      
                return (<div key={i} className="col" onClick={(e) => this.props.updateBucket(request.properties.country)}>{request.properties.country}</div>)
         });
        return (
            
            <div className="row">
                {RequestNodes}
            </div>
        )
    }
}

export default ListTool;