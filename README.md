### WebSockets Homework
Module 4 homework | Turing School of Software &amp; Design

---

#### Summary
This assignment was an exercise in working with websockets for the first time. Our objective was to create a very basic chat room where users can see when another user has joined, is typing, or has left. Sent messages are displayed along with usernames. There is very little CSS for this application because understanding websockets was my main goal.

For this assignment, we followed the tutorial at: [https://socket.io/get-started/chat/](https://socket.io/get-started/chat/)

![Screenshot](https://github.com/michellehoffman/websockets-homework/blob/master/Screen%20Shot%202019-07-27%20at%201.59.58%20PM.png)

#### Setup

Clone this repo
```
git clone https://github.com/michellehoffman/websockets-homework.git
```

Install packages
```
npm install
```

Start the server
```
node index.js
```

Navigate to localhost in your browser
```
localhost:3000
``` 

To see the websocket in action, I recommend opening 2 browser windows side-by-side. 

#### Learning Goals
  * Understand what it means for an application to be “real time.”
  * Understand the pub/sub model
  * Understand how WebSockets work
  * Set up a basic Node.js server using Express
  * Implement pub/sub in the browser using Socket.io
  
#### Personal Challenges
I originally had a hard time wrapping my head around the concept of a websocket. Creating a real-time application sounded like such an advanced task when, at the time, I was just starting to learn about creating back ends for an applications. Working through this project really helped me start to understand what is happening behind the scenes of a real-time application.
