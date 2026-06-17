export {};
console.log("======14 接口 ==========");

// 1 基础接口
interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
}
let customer: IPerson = {
    firstName: "syxy",
    lastName: "shengbao",
    sayHi: (): string => "Helloasdadad",
};
console.log(
    "(1) 基础接口: ",
    customer.firstName,
    customer.lastName,
    customer.sayHi(),
);

// 2 接口中使用联合类型
interface RunOptions {
    program: string;
    commandline: string[] | string | (() => string);
}
let options: RunOptions = { program: "text1", commandline: "helllllll" };
console.log("(2) 联合类型: ", options.program, options.commandline);

options = { program: "text2", commandline: ["wewewrsdfs", "asdadsadsa"] };
if (Array.isArray(options.commandline)) {
    console.log(
        "(2) 联合类型: ",
        options.program,
        options.commandline[0],
        options.commandline[1],
    );
}

options = { program: "text3", commandline: () => "text3" };
if (typeof options.commandline === "function") {
    let result = options.commandline();
    console.log("(2) 联合类型: ", options.program, result);
}

// 3 接口描述数组（数字索引签名）
interface NameList {
    [index: number]: string;
}
let names: NameList = ["qqqq", "www", "eeee"];
console.log("(3) 数组: ", names[0], names[1], names[2]);

// 4 接口描述对象（字符串索引签名）
interface ages {
    [index: string]: number;
}
let agelist: ages = {};
agelist["runoob"] = 15;
agelist["google"] = 18;
console.log("(4) 对象: ", agelist["runoob"], agelist["google"]);

// 5 接口继承 extends
interface Person {
    age: number;
}
interface Musician extends Person {
    instrument: string;
}
let drummer: Musician = {
    age: 27,
    instrument: "drums"
}
console.log("(5) 接口继承: ", drummer.age, drummer.instrument);