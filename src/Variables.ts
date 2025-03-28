import {CLOUDMR_SERVER, PROFILE_SERVER, MRO_SERVER, API_URL} from "./env";

export const SIGNIN = `${CLOUDMR_SERVER}/login`;//`http://cancelit-env.eba-pmamcuv5.us-east-1.elasticbeanstalk.com/api/auth/login`;//`https://cloudmrhub.com/api/auth/login`;

export const FINEGRAIN = `${API_URL}/auth`;
export const SIGNOUT= `${CLOUDMR_SERVER}/logout`;//https://cloudmrhub.com/api/auth/logout`;
export const PROFILE = `${PROFILE_SERVER}/profile`;
export const DATAAPI = `${MRO_SERVER}/readdata`;
export const UNZIP = `${MRO_SERVER}/unzip`;
export const DATAUPLODAAPI = `${MRO_SERVER}/uploads`;
export const DATAUPLOADINIT = `${MRO_SERVER}/uploadinitiate`;
export const DATAUPLOADFINALIZE = `${MRO_SERVER}/uploadfinalize`;
export const JOBUPLOADINIT = `${MRO_SERVER}/uploadresultsinitiate`;
export const JOBUPLOADFINALIZE = `${MRO_SERVER}/uploadresultsfinalize`;
export const DATA_RENAME_API = `${MRO_SERVER}/updatedata`;
export const DATA_DELETE_API =  `${MRO_SERVER}/deletedata`;
//2g05v1o1jj
export const ROI_GET = `${CLOUDMR_SERVER}/getrois`;
export const ROI_UPLOAD = `${CLOUDMR_SERVER}/uploads`;

export const JOBS_API = `${MRO_SERVER}/pipeline`;
export const JOBS_RETRIEVE_API = `${MRO_SERVER}/downloads`;
export const JOBS_RENAME_API = `http://localhost:5010/jobs/rename`;
export const JOBS_DELETE_API =  `${MRO_SERVER}/pipeline`;

export const APP_NAME = 'MR Optimum';

/**
 * Unit in bytes, 10 MB file size yields a chunk
 */
export const UPLOAD_FILE_CHUNK = 10 * 1024 * 1024;

// export const HOST = `cancelit-env.eba-pmamcuv5.us-east-1.elasticbeanstalk.com`;

console.log('SIGNIN:', SIGNIN);
console.log('FINEGRAIN:', FINEGRAIN);
console.log('SIGNOUT:', SIGNOUT);
console.log('PROFILE:', PROFILE);
console.log('DATAAPI:', DATAAPI);
console.log('UNZIP:', UNZIP);
console.log('DATAUPLODAAPI:', DATAUPLODAAPI);
console.log('DATAUPLOADINIT:', DATAUPLOADINIT);
console.log('DATAUPLOADFINALIZE:', DATAUPLOADFINALIZE);
console.log('JOBUPLOADINIT:', JOBUPLOADINIT);
console.log('JOBUPLOADFINALIZE:', JOBUPLOADFINALIZE);
console.log('DATA_RENAME_API:', DATA_RENAME_API);
console.log('DATA_DELETE_API:', DATA_DELETE_API);
console.log('ROI_GET:', ROI_GET);
console.log('ROI_UPLOAD:', ROI_UPLOAD);
console.log('JOBS_API:', JOBS_API);
console.log('JOBS_RETRIEVE_API:', JOBS_RETRIEVE_API);
console.log('JOBS_RENAME_API:', JOBS_RENAME_API);
console.log('JOBS_DELETE_API:', JOBS_DELETE_API);
console.log('APP_NAME:', APP_NAME);
console.log('UPLOAD_FILE_CHUNK:', UPLOAD_FILE_CHUNK);