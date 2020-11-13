import React, { Component } from "react";
import { Rnd } from "react-rnd";
import ToolToobar from "../ToolToobar/ToolToolbar";
import CountBy from "../../CountBy/CountBy";
import ListTool from "../../ListTool/ListTool";
import { bringToFront } from "../../../Helpers";

class ToolLauncher extends Component {
  // Register Components Here
  // This needs to match the value {t} coming from App.js launchTool()
  // They must be imported above
  components = {
    CountBy: CountBy,
    ListTool: ListTool,
  };

  render() {
    // Dynamically load component based on what's coming from App.js
    const TagName = this.components[this.props.tag];
    return (
      <Rnd
        default={{
          x: 200,
          y: 200,
          width: 600,
          height: 400,
        }}
        id={this.props.uuid}
        key={this.props.uuid}
        onClick={() => bringToFront(this.props.uuid)}
      >
        <ToolToobar {...this.props} />
        <div className="component">
          <TagName {...this.props} />
        </div>
      </Rnd>
    );
  }
}

export default ToolLauncher;
