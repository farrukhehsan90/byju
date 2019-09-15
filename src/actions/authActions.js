import {LOGIN,ERROR, LOADING} from './types';

export const login =(username,password,history)=>dispatch=>{

    try{
    if(username!=='Test' && password!=='irecruityou:)'){
        throw 'err';
    }
    
    dispatch({
        type:LOGIN,
        payload:{
            isAuthenticated:true,
            username
        }
    })
    
    history.push('/jobs');
    
    return;
    
}
catch(err){
    console.log('err',err)
    return dispatch({
        type:ERROR,
        payload:{
            error:'Invalid username/password'
        }
    })
}
}

export const setLoading=()=>{

    return {
        type:LOADING
    }

}