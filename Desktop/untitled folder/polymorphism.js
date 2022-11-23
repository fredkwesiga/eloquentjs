let Rabbit = 'small';

Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit));
