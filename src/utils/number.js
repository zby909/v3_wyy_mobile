/* 解决IEEE754标准计算精度问题 用到的组件直接引入使用 加plus 减minus 乘times 除div 余mod */
import Big from 'big.js';
console.log(Big(0.1).plus(0.2).toFixed());
