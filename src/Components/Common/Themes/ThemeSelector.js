import React from 'react';
import { Input } from 'reactstrap';
import "./_blueTheme.scss"

const ThemeSelector = (props) => {
    return (
    <Input type="select" name="select" onChange={(e) => props.changeTheme(e.target.value)} >
        {props.availableThemes.map((theme) => <option value={theme.class}>{theme.name}</option>)}
    </Input>
    )
}

export default ThemeSelector;