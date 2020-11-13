import React from "react";
import ToolIcon from "../ToolIcons/ToolIcons";
import { formatToolTag, openTool } from "../../../Helpers"

const OpenTools = (props) => {
  return (
    <div className="d-flex open-tools">
      {props.launchedTools.map((tool) => <div key={tool.props.uuid} onClick={() => openTool(tool.props.uuid)} style={{textAlign: "center"}} id={"open_" + tool.props.uuid}><div>{formatToolTag(tool.props.tag)}</div><ToolIcon {...tool.props} /></div>)}
    </div>
  )
};

export default OpenTools;
