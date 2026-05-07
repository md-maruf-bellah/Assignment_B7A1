# Why "any" is a Type Safety Hole and "unknown" is the Safer Choice

The main idea of TypeScript is to make JavaScript safer, by adding something called static typing. This helps people who write code find mistakes earlier when they are still working on it of later when it is already being used.. When you use the `any` type it gets rid of this safety feature and can cause unexpected problems. On the hand `unknown` gives you a safer way to deal with data that is hard to predict while still making sure the types are correct.

---

## Why `any` Can Cause Trouble

When you use the `any` type it totally stops TypeScript from checking the types. A variable that is set to `any` can hold any kind of value. Typescript will let you do anything to it.

```ts
let value: any = "Hello";

value = 42;

value.toUpperCase();
```

This is not good because it can lead to mistakes that you do not find until later.

## Why unknown Is A Choice

The `unknown` type is also used when you are not sure what a value will be but it does not let you do things that might not be safe.

```ts
let value: unknown = "Hello";

value.toUpperCase(); // This will give you an error
```

This way `unknown` helps keep your code safer by making sure you do things correctly before you try to use a value.
