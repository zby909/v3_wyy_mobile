/**
 * 获取请求参数
 * 使用：getParam('name')
 * 注：若同时存在search和hash地址的同名参数 默认取hash的值
 * 如 若www.baidu.com/zby.html?id=1#page/index?appId=200&id=2 getParam('id') 得到的是2 而不是1
 * @param {*} name
 */
const getParam = function (name) {
  const reg = /[\?|&|#]/g;
  let ps = {};

  let ts = location.search.split(reg);
  for (let i in ts) {
    let a = ts[i];
    if (!a) continue;
    let ss = a.split('=');
    ps[ss[0]] = decodeURIComponent(ss[1]);
  }
  ts = location.hash.split(reg);
  for (let i in ts) {
    let a = ts[i];
    if (!a) continue;
    let ss = a.split('=');
    ps[ss[0]] = decodeURIComponent(ss[1]);
  }

  return ps[name];
};

export { getParam };
