var ajax = function(url,that,method,data={}){
    return new Promise((resolve,reject)=>{  
        var mycookie = sessionStorage.getItem('cookie')
        if(method == 'POST')
        {
            that.$http.post(url,data,{
                headers: {
                  token: mycookie
                },
                withCredentials: true
            }).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        }else{
            that.$http({
                url: url,
                methods: method,
                headers: {
                  token: mycookie   
                },
                withCredentials: true,
                body:data
            }).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        }
    })
}
export default ajax