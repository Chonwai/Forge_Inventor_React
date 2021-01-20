import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

function Panel() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const classes = useStyles();
    return (
        <div className="panel-component">
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
        </div>
    );
}

export default Panel;
