import {GET_JOBS,LOADING,GET_JOB,SAVE_JOB} from './types';

export const getJobs=(currentPage,jobsPerPage)=>dispatch=>{

    dispatch(setLoading());

    fetch('https://nut-case.s3.amazonaws.com/jobs.json',{
        method:"GET"
    })
    .then(res=>res.json())
    .then(res=>{
        
        const jobs=res.data.slice(currentPage*jobsPerPage,currentPage*jobsPerPage+jobsPerPage)
        console.log('jobs',jobs);

         dispatch({
            type:GET_JOBS,
            payload:{
                jobs,
                allJobs:jobs
            }
        });

        return res.data;
    })
    .catch(err=>console.log(err));

}

export const currentJob=(id,jobs,history)=>dispatch=>{

    const job=jobs.filter(job=>job._id===id)
    console.log('job',job);

    dispatch({
        type:SAVE_JOB,
        payload:job
    })
    history.push(`/job/${id}`);
    return;
}

export const setLoading=()=>{

    return {
        type:LOADING
    }

}