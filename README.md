# SOLID principles in React

Design principles for Object Oriented Programming (OOP):

- **S**ingle responsibility principle (SRP)
- **O**pen-closed principle (OCP)
- **L**iskov substitution principle (LSP)
- **I**nterface segregation principle (ISP)
- **D**ependency inversion principle (DIP)

<hr />

## **S**ingle responsibility principle (SRP)

**Definition**: Every class should have only one responsibility.

**Examples**:
- Break large componentes that do too much into smaller components.
- Extract code unrelated to the main component functionality into separate utility functions.
- Encapsulate connected functionality into custom hooks or high order components.

## **O**pen-closed principle (OCP)

**Definition**: Software entities should be open for extension, but closed for modification.

**Examples**:
- From outside, extend a React component functionality instead of modifying the component itself. A common use case would be to use `children` prop.

## **L**iskov substitution principle (LSP)

**Definition**: Subtype objectes should be substitutable for a supertype objects.

**Examples**:
- Replace a compound component for its parent component without breaking the contract. e.g.: `RedButton` <--> `Button`.

## **I**nterface segregation principle (ISP)

**Definition**: Clients should not depende upon interfaces that they don't use.

**Examples**:
- When a component receives more props than it really needs. Sometimes, you send an entire object as prop, but you only use one value of the object.

## **D**ependency inversion principle (DIP)

**Definition**: One should depend on abstractions, not connections or specific implementations.

**Examples**:
- Abstraction/adapter on libraries you use. e.g.: useFetch abstraction for `react-query` or `swr` without knowing what library is used underneath.
