import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'max-content',
        margin:'0 auto'
    },
    card_container:{
        width:'700px',
        borderRadius:'20px',
        display:'flex',
        flexDirection:'column',
    },
    header:{
        padding:'10px',
        background:theme.palette.accent.main,
        color:'#fff',
        display:'flex',
        alignContent:'center'
    },
    body:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    del_icon:{
        color:theme.palette.primary.main,
        fontSize:'30px',
        '&:hover':{
            color:theme.palette.secondary.main
        }
    }
}));
export default useStyles;