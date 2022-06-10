---
title: Unit Testing
---

# Unit Testing

---

# Unit Testing

- What is a unit test
- What makes a good test
- Good practices to get into

---

# What a unit test is

- Tests a unit, which is normally defined as a class. The class being tested is referred to as the **SUT**: **S**ytem **U**nder **T**est.
- They consist of 2 or 3 steps:
  - **Arrange**: Typically instantiates the sut and sets up the test.
  - **Act**: Invokes the function that is being tested.
  - **Assert**: Checks the function works as expected.
- The arrange step is not required in a few circumstances, e.g.
  - If the class is static the arrange step isn't always required.
  - If the constructor is the subject of the test, then the initiation of the sut belongs in the Act part of the test.

---

# What makes a good test

- They should be fast
- They should tell the developer exactly what has broken when they fail
- They should be reliable and deterministic
- They should not produce any real-world side-effects
- They be isolated from each other

---

# Scope

- A unit test should only test the SUT.
- If the SUT needs to call other classes, they should be *injected* into the SUT's constructor as interfaces.
- Before newing up and classes in a class' implementation, remember: `new is glue`.
- If you new an object up, the SUT is now tied to that class and any test will also invoke the class being newed up.

---
