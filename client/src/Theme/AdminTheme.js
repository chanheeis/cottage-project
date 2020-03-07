import {createMuiTheme} from '@material-ui/core/styles';
const theme=createMuiTheme({
    palette:{
        primary:{
            main:'#F4F5F9',
            light:'#F7F8FC'
        },
        secondary:{
            main:'#DDDFE6',
            light:' #F0F1F4'
        },
        accent:{
            main:'#252C41'
        },
        action:{
            active:'#F1404B'
        },
        text:{
            primary:'#252C41',
            secondary:'#DDDFE6',
            disabled:'#DDDFE6'
        },
        background:{
            paper:'#fff'
        }
    }
})
export default theme;