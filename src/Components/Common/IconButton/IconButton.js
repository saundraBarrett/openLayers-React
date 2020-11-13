import React, { Fragment, useState } from "react";
import "./IconButton.scss";
import { Button, Tooltip } from "reactstrap";
import * as icons from "react-icons/all"; //https://react-icons.github.io/search
import { createUUID } from "../../../Helpers";

const IconButton = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const uuid = createUUID();
  
  const IconComponent = props.iconname
    ? icons[props.iconname]
    : icons.FaFileExcel;

  return (
    <Fragment>
      {props.tooltip ? (
        <Tooltip
          placement="right"
          isOpen={tooltipOpen}
          target="TooltipExample"
          toggle={toggle}
        >
          Hello world!
        </Tooltip>
      ) : null}
      <Button id={uuid} color="secondary" {...props}>
        {props.children}
        <IconComponent />
      </Button>
    </Fragment>
  );
};
export default IconButton;
