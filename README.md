1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById → Returns one element by ID.

getElementsByClassName → Returns all elements with a class (live HTMLCollection).

querySelector → Returns first element matching a CSS selector.

querySelectorAll → Returns all elements matching a CSS selector (static NodeList).


2. How do you create and insert a new element into the DOM?
const div = document.createElement('div');
div.textContent = "Hello";
div.className = "myDiv";
document.body.appendChild(div);


3. What is Event Bubbling? And how does it work?
document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  alert("Child clicked");
});


4. What is Event Delegation in JavaScript? Why is it useful?
document.getElementById("parent").addEventListener("click", (e) => {
  if(e.target.tagName === "BUTTON") {
    alert("Button clicked: " + e.target.textContent);
  }
});

5. What is the difference between preventDefault() and stopPropagation() methods?