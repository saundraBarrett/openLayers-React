import React from 'react';
import "./executive_toolbar.scss";
import MenuBar from './MenuBar'
import OpenTools from './OpenTools'

const ExecutiveToolbar = (props) => {
    console.log(props)
 return (
    <div className="executive-toolbar">
       <MenuBar {...props}/>
      <OpenTools {...props}/>
    </div>
 )
}

export default ExecutiveToolbar;