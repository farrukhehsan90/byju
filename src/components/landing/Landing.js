import React, { Component } from 'react';
import { CardContent, Typography, TextField, Card, Button } from '@material-ui/core';
import {SupervisedUserCircleOutlined,VpnKeyOutlined} from '@material-ui/icons';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/authActions';

class Landing extends Component {
    state = { 
        user:'',
        password:'',
        error:{}
     }

    

    onChange=(e)=>{

        this.setState({[e.target.name]:e.target.value});

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.error){
            console.log('nextProps.auth.error',nextProps.auth.error);
            this.setState({error:nextProps.auth.error});
        }

    }

    render() {

        const {user,password}=this.state;
        const {username,error}=this.props.auth;

        return (
            <div style={{backgroundColor:'orange',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'99vh'}}>
            <h1 style={{color:'#fff'}}>Welcome to Jobster!</h1>
            <Card style={{width:'30%',backgroundColor:'#fffbe0'}}>
                <CardContent style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                {Object.keys(error).length>0?<Typography style={{color:'red',paddingBottom:'2%'}}>{error.error}</Typography>:''}
                    <Typography>Username : Test</Typography>
                    <div style={{paddingBottom:'8%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography style={{paddingRight:'2%'}}>
                          <SupervisedUserCircleOutlined/>
                        </Typography>
                        <TextField placeholder="Enter your username" variant="outlined" name="user" onChange={this.onChange} value={user}/>
                    </div>
                    <Typography>{`Password : irecruityou:)`}</Typography>
                    <div style={{display:'flex',paddingBottom:'6%',justifyContent:'center',alignItems:'center'}}>
                        <Typography style={{paddingRight:'2%'}}>
                            <VpnKeyOutlined/>
                        </Typography>
                        <TextField placeholder="Enter your password" variant="outlined" name="password" onChange={this.onChange} value={this.state.password}/>
                    </div>
                    <Button onClick={()=>this.props.login(user,password,this.props.history)} variant="contained" style={{marginBottom:'40px',backgroundColor:'orange',color:'#fff'}}>
                        Login
                    </Button>
                 
                </CardContent>
            </Card>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{login})(withRouter(Landing));