import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SIGNIN, PROFILE, APP_NAME} from "../../Variables";
import {API_URL} from "../../env";

export interface SigninDataType {
    email: string;
    password: string;
}

export const getAccessToken = createAsyncThunk('SIGN_IN', async (signinData: SigninDataType,thunkAPI) => {
    const response = await axios.post(SIGNIN, signinData);
    console.log(response);
    console.log(response.data);
    if (response.data.error !== undefined)
    {       
        alert('Invalid email or password for user ' + signinData.email);
        return {error:'Unauthorized'};
    }else{
        alert('Login successful!');
        console.log('Successfully logged in');
        
    if(response.data.access_token!=undefined)
        thunkAPI.dispatch(getProfile(response.data.access_token));
    if(response.data.access_token!=undefined)
        thunkAPI.dispatch(getFineGrainToken({accessToken:response.data.access_token}))
    return Object.assign(signinData, response.data);
    }
});

export const getFineGrainToken = createAsyncThunk('FINE_GRAIN',
    async ({accessToken, categories={app: APP_NAME, activities:['queue','upload']}}:{accessToken:string, categories?: {
            app: string,
            activities: string[]
        }}, ) => {
    if(API_URL == null)
        return;
    try{
        const response = await axios.post(API_URL, categories, {headers:{
                Authorization:`Bearer ${accessToken}`
            }});
        return response.data;
    }catch (e) {
        return undefined;
    }
});

export const getProfile =  createAsyncThunk('GET_PROFILE',
    async (accessToken:string) => {
        try{
            const response = await axios.get(PROFILE, {headers:{
                    Authorization:`Bearer ${accessToken}`
                }});
            // console.log(response);
            // console.log(response.data);
            if(response.data[0] === '<'){
                return {error:'user not recognized'}
            }
            return response.data;
        }catch(e){
            return undefined;
        }
    });