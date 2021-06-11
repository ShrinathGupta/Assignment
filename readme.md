# Assignment

In this assingment we have to create nested stories in the form of tree structure.

## Technology

1. [ejs](https://ejs.co/) aka Embedded JavaScipt templating to generate HTML markup at server side.
2. [expressjs](https://expressjs.com/) as a backend web application framework to create server and host the APIs.
3. [typescript](https://www.typescriptlang.org/) -Superset of JavaScript which add static typing to language.
4. [mocha](https://mochajs.org/) - Test cases framework

## Set-up

1. Install [nodeJs](https://nodejs.org/en/).
2. Install [yarn](https://yarnpkg.com/) paackge manager.
3. `yarn run start:dev`
4. Visit [localhost:7070](http://localhost:7070/).

### Code walk through

* **~/src**
    This is the main directory which has helper functions, interface and tree class.
* **~/src/helpers**
    Inside this file we have three methods which are responsible to add and fetch the data from main source class.
* **~/src/test**
  This directory contains test cases
* **~/src/views**
  Inside this we have views.
  `/views/pages/index.ejs` is default view of application. In this ejs file we have added onle partial view that is the head of application. 
  `/views/pages/index.ejs` here we have table layout and different forms to submit data to server. 
  `/views/partials/head.ejs` have head fo the main page. Here we can add scripts and styles. This file is included inside `index.ejs`.
* **~/src/interface/**
  Inside this we have defined payload for request and response.
* **~/src/treeNode**
  This is the main class which holds stores data. This class has it's own two methods `addStory` & `getstory`.
  I have created two static object one is `count` to maintain unique id for each and every record and `data` as a store.
  In `addStory` i am creating new record as following data strucutre ``{node:[{story1: ''}], id: 0, parentId:null}``. Each story get added a record in the store. I have considered 4 input boxes as 4 stories. Basically story number is identification to that input box. Because once story is created we have to send created story at that place as a link.
  While fetching record checking for parentId and Id and send back the data.
  Addition of every new story we are returning children of current parent.
* **~/src/index.ts**
This is file we have defined different end points. When we have large application we can further optimise it to another level like middleware to hanlde all request, we can also have interceptors to intercept every request.

#### Use-Case explanation

1. By default user will land to `localhost:7070` and all the empty stories text box will be visible.

2. Once user submit any story then server will return the data of previous story and now user has only 3 input box to fill data.

3. If user click on any previously added story then user can add new four stories to selected story. Selected story will be visible in the centre.

4. If user click on `Back to the start` user will land to root story.
