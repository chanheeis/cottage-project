import React,{useState,useEffect} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ResistContainer from './Resist/ResistContainer';

const useStyles=makeStyles(theme=>({
    root:{
        width:'60%',
        minWidth:'1500px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center',
    },
    panel:{
        width:'100%',
        height:'auto',
        background:theme.palette.secondary.light,
        borderRadius:'20px',
        '& .MuiExpansionPanelSummary-root':{
            padding:0
        },
        '& .Mui-expanded':{
            margin:0
        }
    },
    btn:{
        background:theme.palette.accent.main,
        color:theme.palette.primary.main,
        fontSize:'20px',
        width:'100%',
        fontWeight:'bold'
    } 
}))

const MenuRoot = () => {
    const classes=useStyles();
    const [expanded,setExpanded]=useState(false);

    const _closePanel=()=>{
        setExpanded(false)
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel
                expanded={expanded}
                elevation={0}
                className={classes.panel}    
            >
                <ExpansionPanelSummary
                    onClick={()=>{
                        setExpanded(prev=>!prev)
                    }}>
                    <Button className={classes.btn}>
                        메뉴 등록
                        <ExpandMoreIcon/>
                    </Button>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ResistContainer
                        _closePanel={_closePanel}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>    
            {/* <MenuSlider/>                     */}
        </div>
    );
};

export default MenuRoot;