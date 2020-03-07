import React,{useState} from 'react';
import RouterContext from '../../Context/RouterContext';

import {makeStyles} from '@material-ui/core/styles';
import {MuiThemeProvider} from '@material-ui/core/styles'
import theme from '../../Theme/AdminTheme';

import HeaderRoot from './Header/HeaderRoot';
import BodyRoot from './Body/BodyRoot';
import FooterRoot from './Footer/FooterRoot';

const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    }
}))
const AdminRoot = () => {
    const classes=useStyles();
    const [crtMenu,setCrtMenu]=useState('menu');

    return (
        <MuiThemeProvider theme={theme}>
            <RouterContext.Provider value={{crtMenu,setCrtMenu}}>
                <div className={classes.root}>
                    <HeaderRoot/>
                    <BodyRoot/>
                    <FooterRoot/>       
                </div>
            </RouterContext.Provider>
        </MuiThemeProvider>
    );
};

export default AdminRoot;