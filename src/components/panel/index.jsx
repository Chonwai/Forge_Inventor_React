import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Button, TextField } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AuthAPI from '../../apis/auth';
import ModelService from '../../services/model';

const useStyles = makeStyles(theme => ({
    mgBorder: {
        margin: theme.spacing(1),
    },
}));

function Panel({ setCurrentUrn }) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [length, setLength] = useState(0);
    const classes = useStyles();
    const updateModel = async () => {
        let body = {
            width: width,
            height: height,
            length: length,
        };
        auth();
        let urn = await ModelService.editModel(body);
        setCurrentUrn(urn);
        console.log(urn);
    };
    const auth = () => {
        AuthAPI.getAccessToken();
    };
    const handleWidthChange = e => {
        setWidth(e.target.value);
    };
    const handleHeightChange = e => {
        setHeight(e.target.value);
    };
    const handleLengthChange = e => {
        setLength(e.target.value);
    };
    return (
        <div className="panel-component w-full flex flex-col">
            <TextField
                className={classes.mgBorder}
                id="outlined-number"
                label="Width"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                variant="outlined"
                value={width}
                onChange={handleWidthChange}
            />
            <TextField
                className={classes.mgBorder}
                id="outlined-number"
                label="Height"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                variant="outlined"
                value={height}
                onChange={handleHeightChange}
            />
            <TextField
                className={classes.mgBorder}
                id="outlined-number"
                label="Length"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                variant="outlined"
                value={length}
                onChange={handleLengthChange}
            />
            <Button
                className={classes.mgBorder}
                variant="contained"
                color="primary"
                endIcon={<PublishIcon />}
                onClick={updateModel}
            >
                Send
            </Button>
            <Button
                className={classes.mgBorder}
                variant="contained"
                color="primary"
                endIcon={<LockOpenIcon />}
                onClick={auth}
            >
                Auth
            </Button>
        </div>
    );
}

export default Panel;
