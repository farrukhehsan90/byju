import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Card, CardContent, CardHeader, Typography, CardActions, Button } from '@material-ui/core';
import { ArrowBackOutlined, HistoryTwoTone } from '@material-ui/icons';

const SingleJob = ({jobs,history}) => {
    
    const {job,loading}=jobs;

    console.log('job-page',job);
    
    return (
        <div style={{width:'95vw',display:'flex',flexDirection:'column'}}>
            <div>
            <ArrowBackOutlined onClick={()=>history.goBack()}/>
            </div>
            <Card style={{width:'100%',alignSelf:'center',marginLeft:'2%'}}>
                <CardHeader title={job.title} subheader={`${job.companyname} Location:${job.location}`}/>
                <CardContent>
                    <Typography style={{padding:'2% 0'}}>
                        {`Job Description : ${job.jd?job.jd:'Description Not Available'}`}
                    </Typography>
                    <Typography style={{padding:'2% 0'}}>
                        {`Skills : ${job.skills?job.skills:'Skills Not Available'}`}
                    </Typography>
                    <Typography style={{padding:'2% 0'}}>
                        {`Exp : ${job.experience?job.experience:'All levels'}`}
                    </Typography>
                    <Typography style={{padding:'2% 0'}}>
                        {`Location : ${job.location?job.location:'Pan India'}`}
                    </Typography>
                    <Typography style={{padding:'2% 0'}}>
                        {`Salary : ${job.salary?job.salary:'Not disclosed'}`}
                    </Typography>
                    <Typography style={{padding:'2% 0'}}>
                        {job.applylink?`Apply Link : ${job.applylink}`:''}
                    </Typography>
                </CardContent>
                <CardActions style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    {job.applylink?<a style={{display:'table-cell',textDecoration:'none',backgroundColor:'blue',color:'#fff',padding:'2%',borderRadius:8}} href={job.applylink} target="_blank">
                        Take Me There!
                    </a>:''}
                </CardActions>
            </Card>
        </div>
    );
}

const mapStateToProps=state=>({
    jobs:state.jobs
})

export default connect(mapStateToProps,{})(withRouter(SingleJob));