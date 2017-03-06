import * as request from 'request-promise';
import * as xmlParser from 'xml2json';

export const parser =  ( serviceUrl : string ) =>
    request({ url : serviceUrl, method : 'HEAD' })
    .then( ( headers : any ) => {
        if(!headers['content-length'] || headers['content-length'] > 5*1024*1024) 
            return [];

        return request({ url : serviceUrl, method : 'GET' })
        .then( ( capabilities : any ) =>{
            
            let capabilitiesJSON = JSON.parse(xmlParser.toJson(capabilities));
            try {
                //console.log(capabilitiesJSON)
                let layers = ( capabilitiesJSON['WMS_Capabilities'] || capabilitiesJSON['WMT_MS_Capabilities'] )['Capability']['Layer']['Layer']
                console.log(layers);
                return layers;
            } catch (e){
                return [];
            }
        })
        .catch( ( err : any ) : any => []);
    });
