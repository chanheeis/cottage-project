import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        display:'flex',
        marginTop:'50px',
        flexDirection:'column',
        alignItems:'center',
    }, 
    textField:{
        width:'400px',
        borderRadius:'10px',
        padding:'10px',
        '& .MuiFormLabel-root':{
            color:theme.palette.accent.main
        },
        '& .MuiFormLabel-root:focused':{
            color:theme.palette.action.active
        }
    },
    icon:{
        fontSize:'30px',
        marginBottom:'5px'
    }
}));
export default useStyles;