import React from 'react';
import { ButtonGroup } from 'reactstrap';
import IconButton from '../IconButton/IconButton';

const ShowPoints = (props) => {

    return (
        <ButtonGroup>
          <IconButton iconname="BiShow"/>
          <IconButton iconname="BiShow"/>
          <IconButton iconname="BiHide"/>
        </ButtonGroup>
      );

}

export default ShowPoints;