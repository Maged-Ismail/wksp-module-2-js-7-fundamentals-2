# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

```
Object.keys(friendsAge);

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```
const friendsNames = Object.keys(friendsAge);
friendsNames.forEach(friend => { console.log(friendsAge[friend])});
---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the age in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```
const age = Object.values(friendsAge);

---



//
const friends = [{'Kevin': 32}, {'Rick': 60}, {'Morty': 14}, {'Jerry': 35}] 
friends.sort((a,b) => a.age - b.age);