import './style.css'
import * as _ from 'lodash-es';
let arr = [1, 1, 1, 2, 2, 3]
console.log(arr);
arr = _.uniq(arr)
console.log(arr);