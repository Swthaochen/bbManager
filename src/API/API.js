import ajax from './utils'
const test = (that)=>{
    return ajax('/coupon/info/3',that,'GET');
}
export {
    test
}
