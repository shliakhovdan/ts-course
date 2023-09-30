function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  return array.filter(condition);
}

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = filterArray(numbers, (number) => number % 2 === 0);
// console.log(evenNumber);

class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    if (this.elements.length === 0) return;

    return this.elements[this.elements.length - 1];
  }
}

type DictionaryKey = string | number | symbol;
class Dictionary<T> {
  private data: {[key in DictionaryKey]: T} = {};

  set(key: DictionaryKey, value: T): void {
    const keyType = typeof key;

    if (keyType === 'string' || keyType === 'number' || keyType === 'symbol') {
      this.data[key] = value;
    }
  }

  get(key: DictionaryKey): T | undefined {
    return this.data[key];
  }

  has(key: DictionaryKey): boolean {
    return key in this.data;
  }
}