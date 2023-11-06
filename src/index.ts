type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R ? R : never;

// function sumOfElements(a: number, b: number): number {
//   return a + b;
// }
//
// type addReturnType = ReturnTypeOfFunction<typeof sumOfElements>;

type FunctionReturnTypeAndArgument<T> = T extends (arg: infer ArgumentType) => infer ReturnType
  ? [ReturnType, ArgumentType]
  : never;

// function greet(name: string): string {
//   return `Hello, ${name}`;
// }
//
// type GreetInfo = FunctionReturnTypeAndArgument<typeof greet>;
