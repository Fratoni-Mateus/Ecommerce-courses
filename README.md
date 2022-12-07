# Courses e-commerce

## What is the purpose of this project?

This web single page application's idea is to have a web-courses e-commerce in which the user can browse through the available courses, add them to cart, simulate a sale and them have access to them on the logged area.
<br>

## How to run this project:

First go to the Front-end folder and follow the instructions from the README file in the folder. 

Then go to the Back-end folder and follow the instructions from the README file in the folder.
<br>
## Used technologies:
##### Front-end: 
React.js for the application;
MockAPI web-service is being used to provide the information about the courses available and information from the users to show how the page will be used once the back-end has the information available from the courses.

##### Back-end: 
Node.js for users CRUD API;
MongoDB Atlas users database.
<br>

#### Project goals:

1. Present a list with all the courses available for subscription with photos and option to show more information about the product. **Requirement met.**
<br>

2. The user should be able to search for courses using the name of the product. **Requirement partly met: search bar available in the front-end but search algorithm not implemented.**
<br>

3. The user should be able to rearrange the order of the presented courses by subscription price or alphabetically. **Requirement partly met: selector is available but the reordering algorithm is not implemented.**
<br>

4. There should be an option to create an account and to access a logged area. **Requirement partly met: the pages are available, back-end API to create and login a user is available, logged area implemented and presenting the user's owned courses. Missing integration between front-end and back-end and some minor tweaks in the back-end API.**
<br>

5. When visiting the website a user should be able to select a product and add it to it's cart. **Requirement partially met: the pages are available, the cards have the buttons to add to the cart but the local storage is not implemented**
<br>

6. Create an extremely simple checkout where it will be possible to simulate the conclusion of the checkout. In the checkout it should be mandatory for the user to send an identity document. **Requirement partially met: the user must send a document in order to click the purchase button. Missing implementation: local storage to get information of what the client has selected to purchase, remove from cart button, total value of purchase**
<br>

7. In the logged ares the user will be able to visualize the courses he owns. **Requirement met**

## Tasks to be developed and implemented in the future:

### Back-end
- Courses API: develop a courses API with the information in coming from a database. Expected to be developed using Node.js and MongoDB.

- Users API: Adjust the userSchema to include the ownedCourses for the users.

- Users API: Create a verification routine to prevent e-mails from being registered more than once in the Database.

- Users API: Hide the hash salt in the password fields to increase the safety of the users access information.

- Sales API: Create a sales API which takes the information from the user cart and includes the information of the new courses purchase in the Users DB.

### Front-end
- Search bar: implement the search bar.

- Courses order: implement the reordering mechanism for the courses homepage.

- Add to cart: implement the local-storage and the routine to store the courses added to the cart.

- Remove from cart: implement the remove from cart functionality to remove the courses from the cart.

- Cart course cards: implement the dynamic course cards functionality in the cart.

- Total value: implement the total value calculation for the courses added in the cart.

- Purchase: implement the purchase request functionality and send the information of what courses were bought to the Sales API.

- Create user: adjust and implement the create user form.

- Create user: integration between the front-end and the Users API.

- Login user: adjust and implement the login user form.

- Login user: integration between the front-end and the Users API.

- Logged area: create the interface to change the user settings.

### Tests
- Unit tests: Create unit tests to check if the Users API is performing according to the specified;

- Unit tests: Create unit tests to check if the Courses API is performing according to the specified;

- Unit tests: Create unit tests to check if the Sales API is performing according to the specified;
  
- Unit tests: Create unit tests to check if the add to cart functionality is performing according to the specified;

- Unit tests: Create unit tests to check if the remove from cart functionality is performing according to the specified;

- Unit tests: Create unit tests to check if the search bar functionality is performing according to the specified;

- Unit tests: Create unit tests to check if the re-ordering courses functionality is performing according to the specified;
