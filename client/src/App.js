import React from 'react';
//To Delete
import {useEffect,useRef} from 'react';

import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';

import AdminRoot from './Component/Admin/AdminRoot';

const App = () => {
    const divEl=useRef(null);
    const _printWidth=()=>{
        console.log(`current width : ${divEl.current.clientWidth}`);
    }

    useEffect(()=>{
        window.addEventListener('resize',_printWidth)
    },[])

    return (
        <div ref={divEl}>
            <AdminRoot/>              
        </div>
    );
};

export default App;