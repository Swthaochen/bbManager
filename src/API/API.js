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
    return ajax(`https://bang.zhengsj.top/admin/withdrawDeposit/withDraw/${id}`,that,'GET');
}
const fanHandled = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/withdrawDeposit/viewHandled`,that,'GET');
}
const addSecond = (that,data)=>{
    return ajax(`https://bang.zhengsj.top/admin/create`,that,'POST',data)
}
const getAdmin = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/list`,that,'GET');
}
const getSchoolList = (that)=>{
    return ajax(`https://bang.zhengsj.top/admin/school`,that,'GET');
}
const deleteAdmin = (that,id)=>{
    return ajax(`https://bang.zhengsj.top/admin/delete/${id}`,that,'GET');
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
    getAdmin,
    getSchoolList,
    deleteAdmin,
    addSecond
}
