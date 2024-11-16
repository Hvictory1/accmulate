//call函数 改变函数上下文 function.call(context, arg1, arg2, ...)
const obj = {
  name: 'a',
  greeting: function() {
    console.log(`name is ${this.name}`)
  }
}
const j = {
  name: 'b'
}
obj.greeting.call(j) // name is b

// apply 函数与 call 函数类似，它也允许你在一个特定的上下文中调用一个函数。
// 不同之处在于，apply 函数需要将参数作为数组传递 function.apply(context, [argsArray])
const obj1 = {
  name: 'Alice',
  greeting: function(city, country) {
    console.log(`Hello, my name is ${this.name} and I am from ${city}, ${country}`);
  }
};

obj1.greeting('New York', 'USA');
const person = {
  name: 'Bob'
};

obj1.greeting.apply(person, ['London', 'UK']); // 输出 "Hello, my name is Bob and I am from London, UK"

// bind 返回一个函数 function.bind(thisArg, arg1, arg2, ...)
const boundGreeting = obj.greeting.bind(person, 'London');
boundGreeting('UK'); // 输出 "Hello, my name is Bob and I am from London, UK"

