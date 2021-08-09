type instanceType = undefined | CounterInterface;
interface CounterInterface {
  count: number,
  getCount(): number,
  increaseCount(): number,
}

class Counter implements CounterInterface{

  count = 0;
  private static instance: instanceType = undefined;

  constructor() {

    if (typeof Counter.instance === 'object'){
      return Counter.instance
    }

    Counter.instance = this;
    return this;
  };

  getCount() {
    return this.count
  };

  increaseCount() {
    return this.count++
  };
}

const myCounter1 = new Counter();
const myCounter2 = new Counter();

myCounter2.increaseCount();
myCounter2.increaseCount();

console.log(myCounter1.getCount());


type instanceSingleton = Record<string, any> | null
interface SingletonInterface {
  getInstance(): instanceSingleton
}

class Singleton implements SingletonInterface {

  private static instance: instanceSingleton = null;

  constructor(data) {
    if (!Singleton.instance) Singleton.instance = data
  }

  getInstance(){
    return Singleton.instance
  }
}

const single = new Singleton({data: 'data'});
const single1 = new Singleton({data: 'new data'});

console.log(single.getInstance());
console.log(single1.getInstance());