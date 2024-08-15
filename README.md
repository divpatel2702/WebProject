# E-Commerce Project

**Student Name**: Div Patel 
**Student Number**: 8966750  
**Date**: 25/07/2024

### Technology Stack

**Frontend**: ReactJS  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**

- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `imageUrl`: String

**Users Schema (MongoDB)**

- `username`: String
- `password`: String
- `email`: String

### Frontend Setup

1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.


### Setup Instruction

- For Frontend: npm start
- for Backend: node server.js
ensuring mongodb is connected.


### Test Cases(Manual Testing)
Here are 10 test cases for the project:

1. Test Home Page Product Display

Description: Ensuring all products are displayed on the homepage.

Steps:
Navigate to the homepage.
Observe the list of products displayed.

Expected Result: All products should be listed with correct names, prices, and images.

2. Test Add Product to Cart

Description: Verifying that a user can add a product to the cart.

Steps:
Navigate to a product's detail page.
Click the "Add to Cart" button.
Go to the cart page.

Expected Result: The product should appear in the cart with the correct quantity and price.

3. Test Update Cart Quantity

Description: Verifying that a user can update the quantity of a product in the cart.

Steps:
Add a product to the cart.
Go to the cart page.
Change the quantity of the product.

Expected Result: The cart should update with the new quantity and recalculate the total price.

4. Test Remove Product from Cart

Description: Verifying that a user can remove a product from the cart.

Steps:
Add a product to the cart.
Go to the cart page.
Click the "Remove" button next to the product.

Expected Result: The product should be removed from the cart, and the total price should adjust accordingly.

5. Test Checkout Process

Description: Ensuring that the checkout process works correctly.

Steps:
Add a product to the cart.
Go to the checkout page.
Fill out the required information and submit the form.

Expected Result: The order should be processed, and an order confirmation should be displayed.

6. Test Admin Login

Description: Verifying that the admin can log in to access the dashboard.

Steps:
Navigate to the admin login page.
Enter valid admin credentials.
Submit the login form.

Expected Result: The admin should be redirected to the dashboard.

7. Test Create New Product (Admin)

Description: Ensuring that the admin can create a new product.

Steps:
Log in as an admin.
Go to the "Add Product" section.
Fill out the product details and submit the form.

Expected Result: The new product should appear in the product listing on the homepage.

8. Test Edit Existing Product (Admin)

Description: Verifying that the admin can edit an existing product.

Steps:
Log in as an admin.
Go to the "Manage Products" section.
Select a product to edit.
Change some details and save.

Expected Result: The product should be updated with the new details on the homepage.

9. Test Delete Product (Admin)

Description: Ensuring that the admin can delete a product.

Steps:
Log in as an admin.
Go to the "Manage Products" section.
Delete a product.

Expected Result: The product should be removed from the homepage and the product listing.

10. Test Order Summary

Description: Verifying that the order summary is accurate after completing a purchase.

Steps:
Add products to the cart.
Complete the checkout process.
View the order summary.

Expected Result: The summary should display all purchased products with correct quantities and prices.
