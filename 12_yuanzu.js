"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("==============12元组==============");
// 声明元组
let mytuple = [42, "hello"];
console.log("(1) mytuple: ", mytuple);
// 访问元组
let mytuple2 = [55, "asdads", true];
console.log("(2) mytuple2: ", mytuple2[0], mytuple2[1], mytuple2[2]);
// 更新元组
console.log("(3) mytuple2更新前：", mytuple2[0]);
mytuple2[0] = 989898;
console.log("(3) mytuple2更新后：", mytuple2[0]);
// 元组运算
let mytuple3 = [4221, "hesadadllo", true];
console.log("(4) mytuple3: ", mytuple3.length);
mytuple3.push("qwqwqw");
console.log("(4) mytuple3 push之后: ", mytuple3);
let lastElE = mytuple3.pop();
console.log("(4) mytuple3 pop之后: ", mytuple3, lastElE);
// 解构运算
let a = [1, "helloadsdsdsa", true];
let [b, c] = a;
console.log("(5) a: ", a, "b: ", b, "c: ", c);
