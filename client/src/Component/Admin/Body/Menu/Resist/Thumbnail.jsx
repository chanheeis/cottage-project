import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {IconButton} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
const useStyles=makeStyles(theme=>({
    root:{
        width:'450px',
        height:'300px'
    },
    picture:{
        width:'100%',
        height:'100%',
        borderRadius:'10px',
        boxSizing:'border-box',
        padding:0
    },
    iconBtn:{
        float:'right',
        position:'relative',
        top:'40px',
        padding:0,
    },
    icon:{
        fontSize:'40px',
        color:theme.palette.primary.main
    }
}))

const Thumbnail = ({url,_setThumbnail,resistInfo}) => {
    const classes=useStyles();

    const _delImg=()=>{
        delete resistInfo.file;
        _setThumbnail(null);
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={_delImg}
                className={classes.iconBtn}>
                <CancelIcon
                    className={classes.icon}/>
            </IconButton>
            <img 
                className={classes.picture}
                src={url}
                lat="Thumbnail Image"
            />
        </div>
    );
};

export default Thumbnail;