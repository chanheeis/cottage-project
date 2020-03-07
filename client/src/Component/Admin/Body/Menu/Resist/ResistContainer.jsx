import React,{useState, useEffect} from 'react';

import {Card,CardHeader,CardContent, useFormControl} from '@material-ui/core';
import {IconButton,Typography} from '@material-ui/core';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import ResistForm from './ResistForm';
import Thumbnail from './Thumbnail';

import useStyles from '../Styles/Resist.ResistContainer';
import UploadBtn from './UploadBtn';

const _getDate=()=>{
    const dateArr=['Sun','Mon','Tue','Wed','Tue','Fri','Sat'];

    const current=new Date();
    const year=current.getFullYear();
    const month=current.getMonth();
    const date=current.getDate();
    const day=current.getDay();

    let hour=current.getHours();
    if(hour<10) hour='0'+hour;

    let minute=current.getMinutes();
    if(minute<10) minute='0'+minute;

    return `${year}.${month+1}.${date}(${dateArr[day]}) ${hour}:${minute}`;
}

const ResistContainer = ({_closePanel}) => {
    const classes=useStyles();
    const [thumbnail,setThumbnail]=useState(null);
    const [resistInfo,setResistInfo]=useState({});

    const _setThumbnail=(url)=>{
        setThumbnail(url);
    }

    const _setResistInfo=(key,value)=>{
        setResistInfo(prev=>{
            return {...prev,[key]:value}
        })
    }

    const _renderThumbnail=()=>{
        if(Boolean(thumbnail)){
            return (
                <Thumbnail 
                    _setThumbnail={_setThumbnail}
                    resistInfo={resistInfo}
                    url={thumbnail}
                />
            )
        }else{
            return (
                <UploadBtn
                    _setResistInfo={_setResistInfo}
                    _setThumbnail={_setThumbnail}
                />
            )
        }
    }
    
    return (
        <div className={classes.root}>
            <Card
                elevation={0}
                className={classes.card_container}>
                <CardHeader
                    className={classes.header}
                    title={_getDate()}
                    action={
                        <IconButton
                            onClick={()=>{
                                _closePanel()
                                setResistInfo({})
                                setThumbnail(null);
                            }}>
                            <DeleteForeverIcon
                                className={classes.del_icon}
                            />
                        </IconButton>                        
                    }
                />
                <CardContent
                    className={classes.body}
                >   
                    {_renderThumbnail()}
                    <ResistForm
                        resistInfo={resistInfo}
                        _setResistInfo={_setResistInfo}/>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResistContainer;