//一、var let const 的区别
    // //1.作用域区别
    // if (true) {
    // var a = 1;
    // }
    // console.log(a); // 1（变量 a 泄露到外部作用域）
    // if (true) {
    // let b = 2;
    // const c = 3;
    // }
    // console.log(b); // ReferenceError: b is not defined
    // console.log(c); // 报错（c 未定义）

    // //undefined一种原始数据类型，表示变量已声明但未赋值，或对象属性不存在
    // //ReferenceError一种错误类型（属于异常），表示试图访问一个未声明的变量

    // //2.重复声明区别
    // var x = 10;
    // var x = 20; // 允许重复声明
    // console.log(x); // 20

    // let y = 10;
    // let y = 20; // SyntaxError: Identifier 'y' has already been declared

    // const z = 10;
    // const z = 20; // SyntaxError: Identifier 'z' has already been declared

    // //3.变量提升区别
    // console.log(m); // undefined（变量提升）
    // var m = 5;

    // console.log(n); // ReferenceError: Cannot access 'n' before initialization
    // let n = 10;

    // console.log(p); // ReferenceError: Cannot access 'p' before initialization
    // const p = 15;

    // //4.赋值区别
    // var q = 1;
    // q = 2; // 允许重新赋值
    // console.log(q); // 2

    // let r = 1;
    // r = 2; // 允许重新赋值
    // console.log(r); // 2

    // const s = 1;
    // s = 2; // TypeError: Assignment to constant variable.
    // console.log(s); // 报错（不能重新赋值）

    //总结
    //var 有函数作用域，允许重复声明，存在变量提升，允许重新赋值，在全局作用域声明时，会挂载到 window 对象
    //let 有块级作用域，不允许重复声明，不存在变量提升，允许重新赋值
    //const 有块级作用域，不允许重复声明，不存在变量提升，不允许重新赋值

    //var声明的变量和函数声明会提升到作用域顶部，var提升后值为undefined，函数声明可直接调用。原理：JS 引擎编译时，会将变量和函数声明移至当前作用域开头
    //函数声明的提升优先级高于变量声明
        // JS 引擎编译阶段，会先扫描作用域内的函数声明，将其完整提升（包括函数体）。
        // 再扫描变量声明（var），仅提升声明部分，不提升赋值操作，默认值为undefined。
        // 若变量名与函数名重复，变量声明不会覆盖函数声明，但后续的变量赋值会覆盖函数。

    // 代码书写顺序
    // console.log(fn); // 输出函数体：function fn() { console.log('函数') }
    // console.log(a); // 输出 undefined
    // var a = 10;
    // function fn() {
    //   console.log('函数');
    // }
    //console.log (fn) 是 “访问函数引用”，不是 “触发函数执行”，所以会输出函数体本身。
    //若改成 console.log(fn())，会先执行 fn()（输出 “函数”），再打印 fn() 的返回值（因函数无 return，输出 undefined）
    
    // 函数声明提升优先级高于变量声明
    // var a=1;
    // function a(){
    //     console.log('a');
        
    // }
    // a(); // TypeError: a is not a function

//二、数据类型
    //1.基本数据类型（原始数据类型）
    //Number（数字类型）：整数和浮点数
    //String（字符串类型）：文本数据
    //Boolean（布尔类型）：true 和 false
    //Undefined（未定义类型）：变量未赋值时的默认值
    //Null（空类型）：表示“无值”或“空值”
    //Symbol（符号类型）：ES6 引入，表示独一无二的值，常用于对象属性的唯一标识符

    //2.引用数据类型
    //Object（对象类型）：键值对的集合，可以包含多个属性和方法
    //Array（数组类型）：有序的元素集合，使用索引访问元素
    //Function（函数类型）：可调用的代码块，可以作为对象的属性

    //3.特殊数据类型
    //BigInt：表示任意精度的整数，适用于处理超出 Number 类型范围的大整数
    //typeof 运算符用于检测数据类型，返回一个字符串，表示操作数的数据类型
    //console.log(typeof 42); // "number"
    //console.log(typeof 'Hello'); // "string"
    //console.log(typeof true); // "boolean"
    //console.log(typeof undefined); // "undefined"
    //console.log(typeof null); // "object"（这是一个历史遗留问题，null 实际上是一个独立的原始类型）
    //console.log(typeof Symbol('sym')); // "symbol"
    //console.log(typeof {}); // "object"
    //console.log(typeof []); // "object"（数组在 JavaScript 中被视为对象）
    //console.log(typeof function() {}); // "function"
    //console.log(typeof 9007199254740993n); // "bigint"

    //注意事项
    //1. typeof null 返回 "object"，这是 JavaScript 的一个历史遗留问题，实际 null 是一个独立的原始类型
    //2. typeof 数组和对象都返回 "object"，需要使用 Array.isArray() 来区分数组和普通对象
    //3. typeof 函数返回 "function"，函数在 JavaScript 中被视为一种特殊的对象类型   

//三、类型转换
    //1.隐式类型转换
    //在某些操作中，JavaScript 会自动将一种数据类型转换为另一种数据类型
    //字符串连接时，其他类型会被转换为字符串
    //console.log('The answer is ' + 42); // "The answer is 42"
    //数值运算时，非数值类型会被转换为数值
    //console.log('5' - 2); // 3（字符串 '5' 被转换为数字 5）
    //布尔值在数值运算中会被转换为数字，true 转换为 1，false 转换为 0
    //console.log(true + 1); // 2

    //2.显式类型转换
    //使用内置函数将一种数据类型转换为另一种数据类型
    //Number()：将值转换为数字类型
    //console.log(Number('123')); // 123
    //console.log(Number('abc')); // NaN
    //String()：将值转换为字符串类型
    //console.log(String(123)); // "123"
    //console.log(String(true)); // "true"
    //Boolean()：将值转换为布尔类型
    //console.log(Boolean(1)); // true
    //console.log(Boolean(0)); // false
    //console.log(Boolean('')); // false
    //console.log(Boolean('hello')); // true

    //3.常见的类型转换场景
    //在条件语句中，非布尔值会被转换为布尔值
    //if ('hello') {
    //  console.log('This will execute'); // 非空字符串被转换为 true
    //}
    //在数学运算中，非数值类型会被转换为数值
    //console.log('10' * 2); // 20（字符串 '10' 被转换为数字 10）
    //在字符串连接中，非字符串类型会被转换为字符串
    //console.log('Value: ' + true); // "Value: true"       

//四、严格模式
    //严格模式是一种增强的 JavaScript 运行模式，通过在代码开头添加 "use strict"; 启用
    //"use strict";
    //1.变量声明
    //在严格模式下，使用未声明的变量会抛出错误
    //x = 10; // ReferenceError: x is not defined

    //2.禁止删除变量
    //在严格模式下，不能删除变量、函数或参数
    //var y = 20;
    //delete y; // SyntaxError: Delete of an unqualified identifier in strict mode.

    //3.禁止重复参数名
    //在严格模式下，函数参数不能有重复的名称
    //function sum(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
    //  return a + a;
    //}

    //4.禁止八进制字面量
    //在严格模式下，八进制字面量是不允许的
    //var z = 010; // SyntaxError: Octal literals are not allowed in strict mode.

    //5.禁止 this 指向全局对象
    //在严格模式下，函数内部的 this 不会默认指向全局对象
    //function showThis() {
    //  console.log(this); // undefined
    //}
    //showThis();

    //总结
    //严格模式通过引入更严格的语法和行为规则，提高了代码的安全性和可维护性，帮助开发者避免一些常见的错误和陷阱。    

//五、闭包
    //闭包是指在一个函数内部定义的另一个函数，内部函数可以访问外部函数的变量和参数，即使外部函数已经执行完毕
    //function outerFunction(outerVariable) {
    //  return function innerFunction(innerVariable) {
    //    console.log('Outer Variable: ' + outerVariable);
    //    console.log('Inner Variable: ' + innerVariable);
    //  };
    //}
    //const newFunction = outerFunction('outside');
    //newFunction('inside');
    //输出：
    //Outer Variable: outside
    //Inner Variable: inside

    //闭包的应用场景
    //1.数据封装和私有变量
    //function createCounter() {
    //  let count = 0; // 私有变量
    //  return function() {
    //    count++;
    //    return count;
    //  };
    //}
    //const counter =       createCounter();    

//console.log(counter()); // 1
    //console.log(counter()); // 2
    //console.log(counter()); // 3

    //2.函数工厂
    //function makeMultiplier(multiplier) {
    //  return function(value) {
    //    return value * multiplier;
    //  };
    //}
    //const double = makeMultiplier(2);
    //const triple = makeMultiplier(3);
    //console.log(double(5)); // 10
    //console.log(triple(5)); // 15

    //3.保持状态
    //function createGreeting(greeting) {
    //  return function(name) {
    //    console.log(greeting + ', ' + name);
    //  };
    //}
    //const sayHello = createGreeting('Hello');
    //sayHello('Alice'); // Hello, Alice
    //sayHello('Bob');   // Hello, Bob

    //总结
    //闭包允许函数访问其外部作用域的变量，即使外部函数已经执行完毕。闭包在数据封装、函数工厂和保持状态等场景中非常有用，但也需要注意闭包可能导致的内存泄漏问题。    

//六、事件循环
    //事件循环是 JavaScript 运行时环境中的一个机制，用于处理异步操作和任务调度。它确保了 JavaScript 的单线程模型能够高效地处理多个任务，而不会阻塞主线程。

    //事件循环的工作原理
    //1.调用栈（Call Stack）：用于存储正在执行的函数。当一个函数被调用时，它会被推入调用栈，函数执行完毕后会从调用栈中弹出。
    //2.任务队列（Task Queue）：用于存储待处理的异步任务。当异步操作完成时，其回调函数会被放入任务队列中，等待调用栈空闲时执行。
    //3.事件循环（Event Loop）：不断检查调用栈和任务队列。如果调用栈为空，事件循环会从任务队列中取出第一个任务并将其推入调用栈执行。

    //宏任务和微任务
    //1.宏任务（Macrotasks）：包括整体代码执行、setTimeout、setInterval、I/O 操作等。宏任务会被放入任务队列中，等待调用栈空闲时执行。
    //2.微任务（Microtasks）：包括 Promise 的回调函数、MutationObserver 等。微任务的优先级高于宏任务，会在当前宏任务执行完毕后立即执行所有微任务，然后再执行下一个宏任务。

    //事件循环的执行顺序
    //1.执行全局代码，形成第一个宏任务。
    //2.执行调用栈中的函数，直到调用栈为空。
    //3.检查微任务队列，执行所有微任务。
    //4.从宏任务队列中取出下一个宏任务，重复步骤 2-4。

    //总结
    //事件循环机制使得 JavaScript 能够高效地处理异步操作，确保主线程不会被阻塞。理解事件循环对于编写高性能的 JavaScript 代码和调试异步问题非常重要。    

//七、原型链
    //原型链是 JavaScript 中实现继承和属性查找的一种机制。每个对象都有一个内部属性 [[Prototype]]，指向它的原型对象。当访问一个对象的属性时，如果该属性不存在于对象本身，JavaScript 引擎会沿着原型链向上查找，直到找到该属性或到达原型链的顶端（即 null）。
    //创建原型链
    //1.使用构造函数创建对象
    //function Person(name) {
    //  this.name = name;
    //}
    //Person.prototype.greet = function() {
    //  console.log('Hello, my name is ' + this.name);
    //};
    //const alice = new Person('Alice');
    //alice.greet(); // Hello, my name is Alice

    //2.使用 Object.create 创建对象
    //const animal = {
    //  speak: function() {   
    //    console.log('Animal speaks');
    //  }
    //};
    //const dog = Object.create(animal);
    //dog.bark = function() {
    //  console.log('Dog barks');
    //};
    //dog.speak(); // Animal speaks
    //dog.bark();  // Dog barks

    //原型链的查找过程
    //当访问对象的属性时，JavaScript 引擎会首先检查对象本身是否有该属性。如果没有，它会查找对象的原型（通过 [[Prototype]] 指向的对象）。如果原型也没有该属性，继续沿着原型链向上查找，直到找到该属性或到达原型链的顶端（null）。

    //总结
    //原型链是 JavaScript 实现继承和属性查找的核心机制。理解原型链有助于更好地掌握 JavaScript 的面向对象编程和继承模型。    

//八、异步编程
    //异步编程是一种编程范式，允许程序在等待某些操作完成时继续执行其他任务，而不会阻塞主线程。JavaScript 通过回调函数、Promise 和 async/await 等机制实现异步编程。

    //1.回调函数
    //回调函数是最基本的异步编程方式，通过将一个函数作为参数传递给另一个函数，当异步操作完成时调用该回调函数。
    //setTimeout(function() {
    //  console.log('This message is shown after 2 seconds');
    //}, 2000);

    //2.Promise
    //Promise 是一种更现代的异步编程方式，表示一个异步操作的最终完成（或失败）及其结果值。
    //const fetchData = new Promise((resolve, reject) => {
    //  setTimeout(() => {
    //    const data = { name: 'Alice' };
    //    resolve(data);
    //  }, 2000);
    //});
    //fetchData.then(data => {
    //  console.log('Data received:', data);
    //}).catch(error => {
    //  console.error('Error:', error);
    //});

    //3.async/await
    //async/await 是基于 Promise 的语法糖，使异步代码看起来更像同步代码，易于阅读和维护。
    //async function getData() {
    //  try {
    //    const data = await fetchData;
    //    console.log('Data received:', data);
    //  } catch (error) {
    //    console.error('Error:', error);
    //  }
    //}
    //getData();

    //总结
    //异步编程使得 JavaScript 能够高效地处理 I/O 操作和其他耗时任务，而不会阻塞主线程。理解回调函数、   Promise 和 async/await 等异步编程机制，有助于编写高性能和可维护的代码。 

//九、深拷贝与浅拷贝
    //浅拷贝是指创建一个新对象，这个新对象的属性值是原始对象属性值的引用。如果原始对象的属性值是一个引用类型（如对象或数组），那么浅拷贝后的新对象和原始对象将共享同一个引用类型的属性值。      
    //const original = { a: 1, b: { c: 2 } };
    //const shallowCopy = Object.assign({}, original);
    //shallowCopy.b.c = 3;
    //console.log(original.b.c); // 输出 3，说明原始对象也受到了影响    
    //深拷贝是指创建一个新对象，这个新对象的属性值是原始对象属性值的完全独立的副本。如果原始对象的属性值是一个引用类型，深拷贝会递归地复制该引用类型的所有属性值，从而确保新对象和原始对象之间没有任何共享的引用。
    //const original = { a: 1, b: { c: 2 } };
    //const deepCopy = JSON.parse(JSON.stringify(original));
    //deepCopy.b.c = 3;
    //console.log(original.b.c); // 输出 2，说明原始对象没有受到影响
    //??怎么递归实现深拷贝
    // function deepClone(obj, hash = new WeakMap()) {
    //   if (obj === null) return null; // null 的情况
    //   if (typeof obj !== 'object') return obj; // 基本类型直接返回

    //   if (hash.has(obj)) return hash.get(obj); // 处理循环引用

    //   const cloneObj = Array.isArray(obj) ? [] : {};
    //   hash.set(obj, cloneObj); // 存储引用

    //   for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //       cloneObj[key] = deepClone(obj[key], hash); // 递归拷贝
    //     }
    //   }

    //   return cloneObj;
    // }   
    //总结
    //浅拷贝适用于简单对象，但对于嵌套对象可能会导致意外的副作用。深拷贝适用于需要完全独立副本的复杂对象，但性能开销较大。选择使用浅拷贝还是深拷贝，取决于具体的应用场景和需求。    

    //十、内存管理与垃圾回收
    //JavaScript 使用自动内存管理和垃圾回收机制来处理内存分配和释放。开发者不需要手动管理内存，但理解内存管理的基本原理有助于编写高效的代码。   
    //1.内存分配
    //当创建变量、对象或数组时，JavaScript 引擎会在内存中分配空间来存储这些数据。基本数据类型（如数字、字符串、布尔值）通常存储在栈内存中，而引用数据类型（如对象、数组、函数）则存储在堆内存中。

    //2.垃圾回收
    //JavaScript 使用垃圾回收机制来自动释放不再使用的内存。最常用的垃圾回收算法是标记-清除（Mark-and-Sweep）算法。该算法的工作原理如下：
    //a.标记阶段：垃圾回收器会遍历所有活动的对象，并标记那些仍然被引用的对象为“活跃”。
    //b.清除阶段：垃圾回收器会扫描内存中的所有对象，删除那些未被标记为“活跃”的对象，从而释放内存空间。

    //3.内存泄漏
    //内存泄漏是指程序中不再使用的内存未被释放，导致内存占用不断增加。常见的内存泄漏原因包括：
    //a.全局变量：不小心创建了全局变量，导致其一直存在于内存中。
    //b.闭包：闭包引用了外部函数的变量，导致这些变量无法被垃圾回收。
    //c.DOM 引用：未正确移除对 DOM 元素的引用，导致这些元素无法被垃圾回收。

    //总结
    //理解 JavaScript 的内存管理和垃圾回收机制，有助于编写高效的代码，避免内存泄漏问题。开发者应注意变量作用域、闭包使用和 DOM 操作，以确保内存得到有效管理。   

//十一、模块化
    //模块化是一种将代码分解为独立、可重用的模块的编程范式。JavaScript 支持多种模块化方式，包括 CommonJS、AMD 和 ES6 模块。
    //1.CommonJS
    //CommonJS 是 Node.js 中使用的模块化规范，使用 require() 导入模块，使用 module.exports 导出模块。
    //const math = require('./math');
    //const result = math.add(2, 3);
    //console.log(result); // 5

    //2.AMD
    //AMD（Asynchronous Module Definition）是一种用于浏览器环境的模块化规范，使用 define() 定义模块，使用 require() 导入模块。
    //define(['math'], function(math) {
    //  const result = math.add(2, 3);
    //  console.log(result); // 5
    //});

    //3.ES6 模块
    //ES6 引入了原生的模块化支持，使用 import 导入模块，使用 export 导出模块。
    //math.js   
    //export function add(a, b) {
    //  return a + b;
    //}
    //main.js
    //import { add } from './math.js';
    //const result = add(2, 3);
    //console.log(result); // 5

    //总结
    //模块化有助于组织代码，提高可维护性和重用性。选择合适的模块化方式取决于项目需求和运行环境。ES6 模块是现代 JavaScript 开发的推荐方式，具有更好的静态分析和优化能力。

//十二、错误处理
    //错误处理是编写健壮 JavaScript 代码的重要部分。JavaScript 提供了多种机制来捕获和处理错误，包括 try...catch 语句、自定义错误类型和全局错误处理。
    //1.try...catch 语句
    //try...catch 语句用于捕获运行时错误，并允许开发者处理这些错误，而不会导致程序崩溃。
    //try {
    //  const result = riskyOperation();
    //  console.log('Result:', result);
    //} catch (error) {
    //  console.error('An error occurred:', error.message);
    //}

    //2.自定义错误类型
    //开发者可以创建自定义错误类型，以提供更具体的错误信息。
    //class CustomError extends Error {
    //  constructor(message) {
    //    super(message);
    //    this.name = 'CustomError';
    //  }
    //}
    //throw new CustomError('This is a custom error message');

    //3.全局错误处理
    //在浏览器环境中，可以使用 window.onerror 事件处理程序来捕获未处理的错误。
    //window.onerror = function(message, source, lineno, colno, error) {
    //  console.error('Global error caught:', message);
    //};
    //在 Node.js 环境中，可以使用 process.on('uncaughtException') 事件来捕获未处理的异常。
    //process.on('uncaughtException', (error) => {
    //  console.error('Uncaught exception:', error.message);
    //});

    //总结
    //有效的错误处理有助于提高应用程序的稳定性和用户体验。开发者应使用 try...catch 语句捕获预期的错误，创建自定义错误类型以提供更具体的信息，并实现全局错误处理以捕获未处理的异常。 