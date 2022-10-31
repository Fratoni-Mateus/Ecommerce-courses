# Online-courses E-Commerce project
## What is the purpose of this project?

This web single page application was created as part of a technical challenge. It was designed following the requirements prescribed by the challenge issuer. The idea is to have a web-courses e-commerce in which the user could browse through the available courses, add them to cart, simulate a sale and them have access to it on the logged area.

## How to run this application

## How to run it?
First you need to clone the project to your machine and install the modules required, you do so by using the command
<code>npm install</code>

After that you need to run the project using the command 
<code>npm start</code> 

This will run the app in the development mode. You will have the page running and you can see it in your browser in the default localhost server port. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes and you may also see any lint errors in the console.

## Which routes are available?

###### Please note that some of the resources in the webpage are note available, you can check them in the to-do section.

The following routes are available:

### Homepage
<code>http://localhost:3000</code>
This is the homepage, you'll be able to see here all the courses available for sale.

###### Please note that the search bar, ordering mechanism and adding to cart are not implemented.


### Login page
<code>http://localhost:3000/login</code>
This is the login page where the user will use to access it's account. If you fill in the form you`ll have access to the page of the mock user 4.

### Create user page
<code>http://localhost:3000/create</code>
This is the create account page where a user will use to create it's account.


### User cart page
<code>http://localhost:3000/cart</code>
This is the cart page where a user can see all the products it has selected to purchase and make the purchase of the desired courses.

##### Please note that the cart page is only partly implemented. It's currently prepared to receive dynamic information but is not receiving any information, nor removing itens.

### Logged area page
<code>http://localhost:3000/logged/:userId</code>
This is the logged area where the user will have access to all the courses they currently owns.
###### Please note that the restricted access is not yet implemented, you can see the page running when you put the numbers from 1 to 11 as the userID in the address to see a mock of the available users.

