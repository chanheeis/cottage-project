import React,{useContext,useMemo} from 'react';
import RouterContext from '../../../Context/RouterContext';

import MenuRoot from './Menu/MenuRoot';
import OriginRoot from './Origin/OriginRoot';
import RoomRoot from './Room/RoomRoot';

import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        display:'flex',
        flexFlow:'column wrap'
    }
}))

const BodyRoot = () => {    
    const classes=useStyles();
    const {crtMenu}=useContext(RouterContext);
    
    const _renderBody=useMemo(()=>{
        switch(crtMenu){
            case 'menu': return <MenuRoot/>
            case 'room': return <RoomRoot/>
            case 'origin': return <OriginRoot/>
            default : return ''
        }
    },[crtMenu]);

    return (
        <div className={classes.root}>
            {_renderBody}
        </div>
    );
};

export default BodyRoot;