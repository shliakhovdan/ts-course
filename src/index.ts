/* eslint-disable @typescript-eslint/explicit-function-return-type */

/* eslint-disable @typescript-eslint/no-unsafe-return */

/* eslint-disable no-console */

function DeprecatedMethod(reason: string, replacedMethod?: string) {
  return function <T, A extends any[], R>(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: T, ...args: A): R {
      console.log(`Don't use this method because ${reason}${replacedMethod ? ', please use ' + replacedMethod : ''}`);

      return originalMethod.apply(this, args);
    };
  };
}

function MinLength(minimum: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length < minimum) {
        console.log(`${key} must be at least ${minimum} characters long.`);
      } else {
        value = newValue;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function MaxLength(maximum: number) {
  return function (target: any, key: string) {
    let value = target[key];

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      if (newValue.length > maximum) {
        console.log(`${key} must be at most ${maximum} characters long.`);
      } else {
        value = newValue;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}

function Email(target: any, key: string) {
  let value = target[key];

  const getter = function () {
    return value;
  };

  const setter = function (newValue: string) {
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailPattern.test(newValue)) {
      console.log(`Invalid format of email for ${key}`);
    } else {
      value = newValue;
    }
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}
