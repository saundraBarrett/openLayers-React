// Component Used to Show Buckets at the top of the tool
import React from "react";
import { Input, Label } from "reactstrap";

const BucketList = (props) => {
    return (
        <div className="d-flex align-items-center">
        <Label className="mb-0 mr-2">Bucket:</Label>
        <Input type="select" name="select" onChange={(e) => props.changeBucket(e.target.value)} >
            {props.bucketList.map((bucket) => <option key={bucket}>{bucket}</option>)}
        </Input>
      </div>
    )
}

export default BucketList;