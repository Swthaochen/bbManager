import ajax from './utils'
const test = (that)=>{
    return ajax('/coupon/info/3',that,'GET');
}
const getNotHandle = (that)=>{
    return ajax('https://bang.zhengsj.top/admin/feedback/viewUnHandled',that,'GET');
}
const handleInfo = (that,id)=>{
    return ajax(`https://bang.zhengsj.top/admin/feedback/handle/${id}`,that,'GET');
}
const getHanledInfo = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/feedback/viewHandled`,that,'GET');
}
const fanNotHandled = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/withdrawDeposit/viewUnHandled`,that,'GET');
}
const handleFance = (that,id)=>{
    return ajax(`/admin/withdrawDeposit/withDraw/${id}`,that,'GET');
}
const fanHandled = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/withdrawDeposit/viewHandled`,that,'GET');
}
const addSecond = (that,data)=>{
    
}
export {
    test,
    getInfo,
    getNotHandle,
    handleInfo,
    getHanledInfo,
    fanHandled,
    fanNotHandled,
    handleFance,

}
