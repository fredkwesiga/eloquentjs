 class vector {
   constructor(x, y) {
     this.x = x;
     this.y = y;
   }
   plus(v) {
     return new vector(this.x + v.x, this.y + v.y);
   }
   minus(v) {
     return new vector(this.x - v.x, this.y - v.y);
   }
   get length() {
     return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
   }
 }
 console.log(new vector(1, 2).plus(new vector(2, 3)));


class Group {
  constructor() {
    this.group = [];
  }
  add(item) {
    if (!this.group.includes(item)) {
      this.group.push(item);
    }
  }
  delete(item) {
    let index = this.group.indexOf(item);
    if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  has(item) {
    return this.group.includes(item);
  }
  static from(a) {
    let g = new Group();
    for (let item of a) {
      g.add(item);
    }
    return g;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false