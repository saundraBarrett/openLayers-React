// This Component is used at the top of the tools launched by rnd

import React from "react";
import IconButton from "../IconButton/IconButton";
import BucketList from "../BucketList/BucketList";
import { ShowPoints } from "./index";
import { formatToolTag, minimizeTool } from "../../../Helpers"



const ToolToolbar = (props) => {
  return (
    <div className="tool-toolbar">
      <div className="d-flex p-1 control-bar">
        <div className="tool-label">
          {formatToolTag(props.tag)}
        </div>
        <div className="ml-auto">
        <IconButton
            onClick={() => minimizeTool(props.uuid)}
            iconname="FaMinus"
            tooltip="Minimize Tool"
          />
          <IconButton
            onClick={() => props.closeTool(props.uuid)}
            iconname="BsSquare"
          />
          <IconButton
            onClick={() => props.closeTool(props.uuid)}
            iconname="FaTimes"
          />
        </div>
      </div>

      <div className="d-flex p-1">
        <BucketList {...props} />
      </div>
      
      <div className="d-flex p-1">
        <ShowPoints />
      </div>

    </div>
  );
};

export default ToolToolbar;
