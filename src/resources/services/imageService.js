import cloudinary from 'cloudinary-core';
import constants   from '../utils/constants.js';

const cl = new cloudinary.Cloudinary({cloud_name: constants.CLOUD_NAME, secure: true});

export default cl;
