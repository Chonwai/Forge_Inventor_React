import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Button, TextField } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import WorkitemAPI from '../../apis/workitem';
import AuthAPI from '../../apis/auth';

const useStyles = makeStyles(theme => ({
    mgBorder: {
        margin: theme.spacing(1),
    },
}));

function Panel() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const classes = useStyles();
    const updateModel = () => {
        console.log(width, height);
        WorkitemAPI.sendWorkitem({ width, height });
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
