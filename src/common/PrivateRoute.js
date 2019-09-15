import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute=({component:Component,auth,...rest})=> {

const {isAuthenticated}=auth;
return <Route {...rest} render={(props)=>{
        return isAuthenticated?(<Component {...props}/>):(<Redirect to="/"/>)
    }}/>
}


const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{})(PrivateRoute);