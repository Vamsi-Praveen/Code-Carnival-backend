import {v2 as cloudinary} from 'cloudinary';
const api_secret="ih7ucVgcFi43HmT42G-jGxfCRhU";
const api_key="774528477115495";
cloudinary.config({ 
    cloud_name: 'dwfgxy6dy', 
    api_key: api_key,
    api_secret: api_secret
});
export async function uploadGalleryImage(link,f){
    try{
        let imagesrc;
        await cloudinary.uploader.upload(link,{folder:f})
        .then((res)=>{
            imagesrc=res.url;
            console.log(res);
        });
        return imagesrc;
    }
    catch(err){
        console.log(err);
    }
};
// cd .\middleware\
// node .\gallery-images-cloud.js