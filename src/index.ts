type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type DeepRequireRedonly<T> = {
  readonly [P in keyof T]-?: T[P] extends object ? DeepRequireRedonly<T[P]> : T[P];
};

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};
