import qs from 'qs'
var ajax = function(url,that,methods='GET',data=null){
    return new Promise((resolve,reject)=>{
        var config = {
          // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          method: methods
        };
        that.$axios.get(`/api${url}`,qs.stringify(data),config)
        .then((response) => {
            resolve(response)
        })
        .catch((err) => {
            reject(err)
        })
    })
}
export default ajax