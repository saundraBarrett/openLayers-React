import React from 'react';
import * as icons from 'react-icons/all';

const ToolIcons = (props) => {
    let toolIcon;
    switch(props.tag) {
        case "CountBy":
            toolIcon = < icons.BiAbacus />
          break;
        case "ListTool":
            toolIcon = < icons.FcList />
          break;
        case "BucketManager":
            toolIcon = < icons.FcIcons8Cup />
          break;
        case "DataSearch":
            toolIcon = < icons.FcSearch />
          break;    
        default:
            toolIcon = <icons.FaTools />
      }
    return toolIcon

}

export default ToolIcons;