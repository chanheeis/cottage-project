import React from 'react';

import {makeStyles} from '@material-ui/core/styles';

import MenuContainer from './MenuContainer';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        minWidth:'1500px',
        display:'flex',
        flexDirection:'column',
        margin:'20px 0'
    }
}))
const HeaderRoot = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <MenuContainer/>            
        </div>
    );
};

export default HeaderRoot;