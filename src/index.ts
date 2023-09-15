function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function filterStrings(array: any[]): string[] {
  return array.filter(isString);
}

const user = {
  name: 'Daniil',
  age: 18,
};

function getProperty(object: any, propertyName: string) {
  if(object.hasOwnProperty(propertyName)) return object[propertyName];
}

function hasNameProperty(object: object): object is {name: string} {
  return 'name' in object && typeof object.name === 'string';
}

function hasAgeProperty(object: object): object is {age: number} {
  return 'age' in object && typeof object.age === 'number';
}

function processObject(object: object): string {
  if (hasNameProperty(object)) return `Object has property name: ${object.name}`;
  else if (hasAgeProperty(object)) return `Object has property age: ${object.age}`;
  else return 'Object doesn\'t contain selected property';
}

function processVariable(variableValue: number | string): void {
  if (typeof variableValue === 'string') variableValue.toLowerCase();
  if (typeof variableValue === 'number') variableValue.toFixed(2);
}

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Bird extends Animal {
  fly(): string {
    return `${this.name} is flying.`
  }
}

class Fish extends Animal {
  swim(): string {
    return `${this.name} is swimming.`
  }
}

function isFunction(value: any): value is (...args: any[]) => any {
  return typeof value === 'function';
}

function callIfFunction(func: unknown, ...args: any[]): any {
  if (isFunction(func)) return func(...args);
}

function performAction(animal: Bird | Fish) {
  if (animal instanceof Bird) animal.fly();
  if (animal instanceof Fish) animal.swim();
}