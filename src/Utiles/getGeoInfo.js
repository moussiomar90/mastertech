import axios from "axios";

export default function getGeoInfo() {
    
    axios.get('http://ip-api.com/json').then((response) => {
        let data = response.data;
         
        return data.country
       
    }).catch((error) => {
        console.log(error);
    });
   
};