import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/Header';
import { Toolbar } from '@material-ui/core';
import List from './list/List';

class JobListing extends Component {
    state = { 
        text:'',
        filteredData:[]
     }

    onChange=(e)=>{

        this.setState({[e.target.name]:e.target.value})
        this.search(e.target.value);
    }

    
    search=(text)=>{
        
        const {jobs}=this.props.jobs;

        if(text.length>0){

            const filteredData=jobs.filter(job=>job.companyname.toLowerCase().includes(text.toLowerCase()));
            this.setState({filteredData});
            console.log('filteredData',filteredData);

        }
        else{
            this.setState({filteredData:[]})
        }
    }

    render() {

        const {text,filteredData}=this.state;
        const {user}=this.props.auth;

        return (
            <div>
            <Header user={user} name={'text'} text={text} onChange={this.onChange}/>
            <Toolbar/>
            <List text={text} filteredData={filteredData}/>
            </div>
        );
    }
}

const mapStateToProps=state=>({
    jobs:state.jobs,
    auth:state.auth
})

export default connect(mapStateToProps,{})(JobListing);