## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- **getElementById**: Returns a single element with a specific ID. It is highly efficient and the most direct way to target a unique element.
- **getElementsByClassName**: Returns a live HTMLCollection of all elements with a specific class name. "Live" means it updates automatically if the DOM changes.
- **querySelector**: Returns the first element that matches a CSS selector (ID, class, or tag). It's very flexible but slightly slower than `getElementById`.
- **querySelectorAll**: Returns a static NodeList of all elements matching a CSS selector. Static means it does not update when the DOM changes.

### 2. How do you create and insert a new element into the DOM?

You create an element using `document.createElement('tagName')`. After creating it, you can set its content (e.g., `element.innerText = 'Hello'`) or attributes. To insert it into the DOM, you target a parent element and use methods like `appendChild()` to add it at the end, or `insertBefore()` to place it at a specific position.

### 3. What is Event Bubbling? And how does it work?

Event Bubbling is a mechanism where an event triggered on a specific element "bubbles up" to its ancestors in the DOM tree. For example, if you click a button inside a `div`, the click event first fires on the button, then on the `div`, then on the `body`, and eventually the `document`. This allows parents to respond to events from their children.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a pattern where you attach a single event listener to a parent element instead of multiple listeners to individual child elements. It works because of Event Bubbling. It is useful for performance (fewer listeners) and for handling elements that are added to the DOM dynamically, as the parent will still catch their bubbled events.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()**: Tells the browser not to execute the default action associated with the event (e.g., preventing a form from submitting or a link from navigating). It does NOT stop the event from bubbling up.
- **stopPropagation()**: Prevents the event from "bubbling up" the DOM tree. It stops parent elements from catching the event, but the default behavior of the element (if any) still occurs.

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
