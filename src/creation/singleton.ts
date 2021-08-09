interface InstanceType {
  count: number,
  [propName: string]: any
}

let instance: InstanceType = {
  count: number,
}

class Counter {
  constructor() {
    if (!instance) instance = this
    instance.count = 0
    return instance
  }

  getCount(): number {
    return instance.count
  }

  increaseCount(): number {
    return instance.count++
  }

}