import React, { Component } from 'react';
import {connect} from 'react-redux';
import Pagination from 'rc-pagination';
import { Select,Card,withStyles, CardContent, Grid, GridList, GridListTile, CardHeader, Button, CardActions, MenuItem } from '@material-ui/core';
import 'rc-pagination/assets/index.css';
import {getJobs,currentJob} from '../../../actions/jobActions';
import Spinner from '../../../common/Spinner';
import {withRouter} from 'react-router-dom';
import '../../../App.css';

class List extends Component {
    state = { 
        currentPage:1,
        jobsPerPage:10,
        jobs:[],
        select:''
     }

    componentDidMount(){
        
        const {currentPage,jobsPerPage}=this.state;

        this.props.getJobs(currentPage,jobsPerPage);

    }

    componentWillReceiveProps(nextProps){

        if(nextProps.jobs.jobs.length>0){


            this.setState({jobs:nextProps.jobs.jobs})

        }


    }

    componentDidUpdate(prevProps,prevState){
        const {currentPage,jobsPerPage}=this.state;

        if(prevState.currentPage!==currentPage){

            this.props.getJobs(currentPage,jobsPerPage);

        }
        

    }

    onPageChange=(page,e)=>{
        this.setState({currentPage:page})
    }

    onSelectChange=(e)=>{
        console.log('e',e.target.value);
        this.setState({select:e.target.value});

        this.sortBy(e.target.value);
    }

    sortBy=(constraint)=>{

    const {jobs}=this.state;

    const sortedJobs=jobs.sort((a,b)=>{
        if(a[constraint]<b[constraint]){
            return -1;
        }
        else if(a[constraint]>b[constraint]){
            return 1;
        }

        else{
            return 0;
        }
    });

    console.log('sortedJobs',sortedJobs);

    }


    render() {

        const {loading}=this.props.jobs;
        const {filteredData,classes}=this.props;
        const {jobs,currentPage,jobsPerPage,select}=this.state;

        let jobsContent;

        if(Object.keys(jobs).length>0){
            jobsContent=(filteredData.length>0?filteredData:jobs).map(job=>
            <GridListTile >
            <Card style={{margin:'3%'}}>
                <CardHeader title={job.title} subheader={job.companyname}/>
                <CardContent>
                    {job.jd?`${job.jd.substr(0,80)}...`:'Description Not Available'}
                </CardContent>
                <CardActions style={{width:'100%',display:'flex',justifyContent:'stretch',alignItems:'center'}}>
                    <Button onClick={()=>window.open(job.applylink,'_blank')}>
                        Apply
                    </Button>
                    {console.log('this.props.history',this.props.history)}
                    <Button onClick={()=>this.props.currentJob(job._id,jobs,this.props.history)}>
                        Details
                    </Button>
                </CardActions>
            </Card>
            </GridListTile>
                )
        }

        return (
            <div style={{padding:'3%'}}>
              {loading?<Spinner/>:
              <div>
                  <div style={{display:'flex',justifyContent:'center',width:'80%'}}>
                  <Select style={{width:'200px'}} classes={{
                      root:classes.root
                  }} onChange={this.onSelectChange} value={select}>
                      <MenuItem value={'location'}>Location</MenuItem>
                      <MenuItem value={'experience'}>Experience</MenuItem>
                  </Select>
                  </div>
                  <GridList cellHeight="auto" cols={3}>
                {jobsContent}
              </GridList>
              <div style={{display:'flex',justifyContent:'center',alignitems:'center'}}>
              {filteredData.length>0?'':<Pagination onChange={(e)=>this.setState({currentPage:e})} current={currentPage} total={jobs.length*170.9} pageSize={jobsPerPage}/>}
              </div>
                </div>
              }
              </div>
           
        );
    }
}

const mapStateToProps=state=>({
    jobs:state.jobs
})

const styles={
    root:{
        width:'200px'
    }
}

export default connect(mapStateToProps,{getJobs,currentJob})(withStyles(styles)(withRouter(List)));