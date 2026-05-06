# Why "any" is a Type Safety Hole and "unknown" is the Safer Choice

## Introduction

TypeScript is designed to provide type safety and catch errors during development. However, the `any` type disables this safety, making your code vulnerable. In contrast, `unknown` ensures safer handling of unpredictable data. This blog explains why `any` is risky and how `unknown` combined with type narrowing improves reliability.

## The Problem with `any`

The `any` type allows any value and bypasses all type checks.

```ts
let value: any = "Hello";
value = 42;
value.toUpperCase(); // No error at compile time, but will crash
```
