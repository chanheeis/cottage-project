import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles=makeStyles(theme=>({
    iconBtn:{
        width:'80px',
        height:'80px',
        background:'none',
        borderRadius:'40px',
        marginBottom:'10px'
    },
    icon:{
        fontSize:'80px',
        color:'#333'
    }
}))

const UploadBtn = ({_setThumbnail,_setResistInfo}) => {
    const classes=useStyles();
    
    const _fileUpload=(e)=>{
        const file=e.target.files[0];
        _setResistInfo('file',file);

        const fileReader=new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            _setThumbnail(fileReader.result);
        }
    }
    return (
        <Button
            className={classes.iconBtn}
            variant="contained"
            component="label"
        >
            <AddCircleIcon
                className={classes.icon}
            />
            <input
                style={{display:'none'}}
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={_fileUpload}
            />
        </Button>
    );
};

export default UploadBtn;