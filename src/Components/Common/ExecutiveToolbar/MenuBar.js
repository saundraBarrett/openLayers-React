import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ToolIcons from "../ToolIcons/ToolIcons";
import ThemeSelector from "../Themes/ThemeSelector";

const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="menu-bar">
      <NavbarBrand>GALE Web Tools</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Data
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => props.launchTool("BucketManager")}>
                <ToolIcons tag="BucketManager" /> Bucket Manager
              </DropdownItem>
              <DropdownItem onClick={() => props.launchTool("Data Search")}>
                <ToolIcons tag="DataSearch" /> Data Search
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Analysis
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => props.launchTool("CountBy")}>
                <ToolIcons tag="CountBy" /> Count By
              </DropdownItem>
              <DropdownItem onClick={() => props.launchTool("ListTool")}>
                <ToolIcons tag="ListTool" /> List Tool
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem onClick={() => props.closeTool("all")}>
                Close All Tools
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Nav>
          <ThemeSelector {...props} />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default MenuBar;
