# Using Pick and Omit to Keep Your Code DRY in TypeScript

## Introduction

In large applications, repeating similar interfaces leads to code duplication. TypeScript provides utility types like `Pick` and `Omit` to solve this problem by creating smaller, specialized versions of existing interfaces.

## The Problem: Code Duplication

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
```
