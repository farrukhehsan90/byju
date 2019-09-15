import React from 'react';
import {AppBar, Toolbar, Typography, TextField, InputBase} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import '../../../App.css';

const Header = ({onChange,text,name,user}) => {
    return (
        <AppBar>
            <Toolbar style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{width:'80%',display:'flex'}}>
                <Typography style={{padding:'0 5% 0 0',fontFamily:'Righteous',fontWeight:'bolder'}}>
                   JOBSTER
                </Typography>
                <InputBase name={name} value={text} onChange={onChange} placeholder=" I'm feeling lucky today, but why?" variant="outlined" style={{width:'60%',color:'#000',backgroundColor:'#fff',borderRadius:6}}/>
                </div>   
                <Typography>
                    {`Hey,${user}`} 
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;