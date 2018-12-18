var ajax = function(url,that,method='GET',data={}){
    return new Promise((resolve,reject)=>{
        var mycookie = sessionStorage.getItem('cookie')
        mycookie = mycookie.split('=')[1]
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
    })
}
export default ajax