# CRUD E-Commerce Users
## What is the purpose of this project?

This is a CRUD for users in a platform, in this case an E-commerce. The code is constructed as a RESTful API and uses HTTP methods to transfer data and stores it in a Database using the online server Atlas from MongoDB. You can use it to Create, Read, Authenticate, Update and Delete users for an application.

This project was created as part of my studies of Back-end development using Node.js, Express and MongoDB as part of the course Full-Stack Development at Tera. 


## How to run it?
First you need to clone the project to you machine and install the modules required, you do so by using the command
<code>npm install</code>

After that you need to run the project using the command 
<code>npm start</code> 

Make sure you have created a .env file in your machine with the required information, as shown in the .env.example. As these are sensitive information they should not be made public.

## Available commands
### Create a new user
<code>router.post("/create", userController.createUser);</code>

To create a new user you must use the HTTP method POST to the address <code>/create</code>. You need to provide in JSON format the "name", "email" and "password" in order to create the user. You will receive a confirmation message if it is successful

Please note that the password will first go through a cryptographic process and the password will be stored encrypted.

### Login as a user.
<code>router.post("/login", authController.login);</code>

To login as a user you must send an HTTP POST request to the address <code>/login</code>. You must send an "email" and "password" as a JSON in the body of the request. You will receive a confirmation message if it is successful and a token as proof of login.

### List  all users
<code>router.get("/all", userController.getAll);</code>

To get a list of all the users send an HTTP GET request to the address <code>/all</code>. You need to first be logged in and send a token in the header of the request as proof of credential. You will receive a JSON list of the users.

### Update a user
<code>router.patch("/update/:id", userController.updateUserById);</code>

To update a user you must send an HTTP PATCH request to the address <code>/update/:id</code> changing the ":id" for the id number of the user you want to update. You need to first be logged in and send a token in the header of the request as proof of credential. You need to provide in JSON format the "name", "email" and "password" in order to update the user. You will receive a confirmation message if it is successful.


### Delete a user
<code>router.delete("/delete/:id", userController.deleteUserById);</code>

To delete a user you must send an HTTP DELETE request to the address <code>/delete/:id</code> changing the ":id" for the id number of the user you want to delete. You need to first be logged in and send a token in the header of the request as proof of credential. You will receive a confirmation message if it is successful.


