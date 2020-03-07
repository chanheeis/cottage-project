import React,{useContext,useState} from 'react';

import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import RouterContext from '../../../Context/RouterContext';

//메뉴 관리 탭 아이콘
import FastfoodIcon from '@material-ui/icons/Fastfood';
//원산지 관리 탭 아이콘
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
//객실 관리 탭 아이콘
import HomeIcon from '@material-ui/icons/Home';

// //관광지 관리 탭 아이콘
// import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
// //커뮤니티 관리 탭 아이콘
// import ChatIcon from '@material-ui/icons/Chat';

const useStyles=makeStyles(theme=>({
    root:{
        width:'60%',
        display:'flex',
        justifyContent:'space-between',
        alignSelf:'center',
        '& button:first-child':{
            marginLeft:0
        },
        '& button:last-child':{
            marginRight:0
        }
    },
    btn:{
        fontSize:'20px',
        color:'white',
        margin:'0 75px',
        borderRadius:'20px',
        minWidth:'200px',
        color:theme.palette.text.primary,
        '&:hover':{
            background:theme.palette.secondary.main,
            color:theme.palette.primary.main
        }
    },
    btnSelected:{
        fontSize:'20px',
        margin:'0 75px',
        borderRadius:'20px',
        minWidth:'200px',
        color:theme.palette.primary.main,
        background:theme.palette.accent.main,
        pointerEvents:'none'
    },
    icon:{
        marginRight:'10px',
        color:theme.palette.secondary
    }
}))

const MenuList = () => {
    const classes=useStyles();

    const {setCrtMenu}=useContext(RouterContext);
    const [crtBtn,setCrtBtn]=useState('menu');
    
    const _handleClick=(e)=>{
        setCrtMenu(e.currentTarget.value);
        setCrtBtn(e.currentTarget.value);
    }

    return (
        <div className={classes.root}>
            <Button
                value="menu"
                onClick={_handleClick} 
                className={crtBtn==='menu'?classes.btnSelected:classes.btn}
                disableElevation={true}
            >
                <FastfoodIcon className={classes.icon}/>
                메뉴 관리
            </Button>
            <Button
                value="origin"
                onClick={_handleClick} 
                className={crtBtn==='origin'?classes.btnSelected:classes.btn}>
                <LocalOfferIcon className={classes.icon}/>
                원산지 관리
            </Button>
            <Button 
                value="room"
                onClick={_handleClick}
                className={crtBtn==='room'?classes.btnSelected:classes.btn}>
                <HomeIcon className={classes.icon}/>
                객실 관리
            </Button>
            {/* <Button 
                value="attraction"
                onClick={_handleClick}
                className={currentBtn==='attraction'?classes.btnSelected:classes.btn}>
                <DirectionsCarIcon className={classes.icon}/>
                관광지 관리
            </Button>
            <Button 
                value="community"
                onClick={_handleClick}
                className={currentBtn==='community'?classes.btnSelected:classes.btn}>
                <ChatIcon className={classes.icon}/>
                커뮤니티 관리
            </Button> */}
        </div>
    );
};

export default MenuList;