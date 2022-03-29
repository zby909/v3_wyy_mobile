/*
 * @Description: 请求工具
 * @Author: zby
 * @Date: 2022-03-22 16:24:46
 * @LastEditors: zby
 * @Reference:
 */

//重复调用接口时，前端只应用最后一次调用的接口结果（之前的接口依然会正常请求，但可通过abort()忽略正确结果，可配合自定义的request.js使用）
/**
 * @description:
 * @param {*} Promise
 * @return {*}
 */
const getPromiseWithAbort = p => {
  let obj = {};
  //内部定一个新的promise，用来终止执行
  const p1 = new Promise(function (resolve, reject) {
    obj.abort = reject;
  }).catch(err => {
    return err;
  });
  obj.promise = Promise.race([p, p1]);
  return obj;
};

export { getPromiseWithAbort };
