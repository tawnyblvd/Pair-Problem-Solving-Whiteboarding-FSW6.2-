# Core 6.2 Pair Whiteboarding Session 2


You will solve these problems on a whiteboard or a sheet of paper as a team of two. You will collaborate, discuss the problem, ask each other questions and make sure both of you understand the approach/solution before moving to the next step or question. 

You are not expected to solve all these questions. If you spend all the available time solving one question and at the end learned something that you didn’t know, That’s all that matters.

If you are done earlier or have questions reach out to Wynter, JR or me.

## Process
* Ask clarifying questions
* Write inputs/outputs
* Diagram and explain a solution to the problem
* Code your solution (on whiteboard or paper)
* Test and refactor your code (manually)
* Write it in JavaScript and see if works. (last)
 
## Turn in
Inside this repo find the folder with the name the question you are solving. e.g. `noTriples`
  1. In there create a folder called `solutions` (lowercase)
  2. `cd` into `solutions` and in there create a folder with your name lets say `your_name`
  3. In your folder `your_name` you will put one of more photos your whiteboarding.
  Make sure text is legible.
  4. Also in your folder you will create a `.js` file named exactly the same as the question name
  e.g. `noTripes` 

## Questions

### Q1 - [Source](https://the-winter.github.io/codingjs/exercise.html?name=noTriples&title=Warmup-2)
**Question Name:** `noTriples`

**Problem Statement:** Given an array of numbers(integers), we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

Examples:
```
noTriples([1,1,2,2,1]) → true
noTriples([1,1,2,2,2,1]) → false
noTriples([1,1,2,2,2,1]) → false
```


### Q2 - [Source](https://www.codewars.com/kata/next-bigger-number-with-the-same-digits)
**Question Name:** `nextBiggerNumSameDigits`

**Problem Statement:** You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

```
12   // => 21
513  // => 531
2017 // => 2071
```

If no bigger number can be composed using those digits, return -1:
```
9   // => -1
111 // => -1
531 // => -1
```

### Q3 - [Source](https://www.codewars.com/kata/valid-parentheses)
**Question Name:** `validParenthesis`

**Problem Statement:** Write a function called `valideParenthesis` that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples:
```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```
<details>
<summary>
Hints
</summary>

* It is easier using an extra data structure? object? stack? maybe more than one?
</details>
