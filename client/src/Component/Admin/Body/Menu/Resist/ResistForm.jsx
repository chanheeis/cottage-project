import React,{useState} from 'react';

import {TextField,InputAdornment, Typography} from '@material-ui/core';

import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DescriptionIcon from '@material-ui/icons/Description';

import useStyles from '../Styles/Resist.MenuInfo';

const ResistForm = ({_setResistInfo,resistInfo}) => {
    const classes=useStyles();

    const _handleChange=(e)=>{
        const key=e.target.name;
        const value=e.target.value;
        _setResistInfo(key,value);
    }

    return (
        <div className={classes.root}>
            <TextField
                className={classes.textField}
                label="메뉴명"
                name="name"
                value={Boolean(resistInfo.name)?resistInfo.name:''}
                onChange={_handleChange}
                autoComplete="off"
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <RestaurantMenuIcon
                                className={classes.icon}
                            />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                className={classes.textField}
                label="가격"
                name="price"
                value={Boolean(resistInfo.price)?resistInfo.price:''}
                type="number"
                onChange={_handleChange}
                autoComplete="off"
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <AttachMoneyIcon
                                className={classes.icon}
                            />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                className={classes.textField}
                label="메뉴 설명"
                name="desc"
                value={Boolean(resistInfo.desc)?resistInfo.desc:''}
                onChange={_handleChange}
                multiline={true}
                autoComplete="off"
                style={{marginBottom:'0px'}}
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            <DescriptionIcon
                                className={classes.icon}
                            />
                        </InputAdornment>
                    )
                }}
            />       
        </div>
    );
};

export default ResistForm;