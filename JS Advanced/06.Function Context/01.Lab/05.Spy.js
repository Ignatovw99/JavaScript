function Spy(target, method) {

    let orginalFunction = target[method];

    let result = {
        count: 0
    };

    //Wrap the original function -> the reference of the object method is changed with this function
    target[method] = function () {
        result.count++;
        return orginalFunction.apply(this, arguments);
    }

    return result;
}

let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) // { count: 3 }
