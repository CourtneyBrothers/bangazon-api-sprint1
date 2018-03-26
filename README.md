# Bangazon API - Sprint 1

Create `json` folder in root directory
```
$ mkdir json
```

## TO RUN
```
npm install
```

to generate data to populate the database run 
```
node db/build_data.js
```
to generate sqlite table run 
```
db/build_table.js
```

## API usage

1) run nodemon app.js in the project directory

#For access to customer resource:

2) to getAllCustomers visit http://localhost:<port number>/api/v1/customers 
this should serve the customers JSON 
3) to get getOneCustomer visit http://localhost:<port number>/api/v1/customers/<customer_id>
this should return the properties of the customer with the corresponding customer_id
4) postOneCustomer 
recommended to use through postman by passing in an object in the request body 

POST: localhost:<port number>/api/v1/customers/
Example: 
{
"firstName":"Lelia",
"lastName":"Fritsch",
"addressStreet":"0301 Rocio Falls",
"addressCity":"Gorczanyborough",
"addressState":"North Dakota",
"addressZip":"49855-5308",
"accountCreationDate":"2018-03-22"
} 

after navigation to http://localhost:<port number>/api/v1/customers the posted customer object will be at the bottom of the page

5) putOneCustomer object

PUT: localhost:<port number>/api/v1/customers/<customer_id>
example customer : 
{
"firstName":"Lelia",
"lastName":"Fritsch",
"addressStreet":"0301 Rocio Falls",
"addressCity":"Gorczanyborough",
"addressState":"North Dakota",
"addressZip":"49855-5308",
"accountCreationDate":"2018-03-22"
} 

replaces existing customer object with customer object from put method

## Product Type API Access

**GET**

Get all Product Types
- To get all product types, use the `GET` method in your API Testing application and query the following URL: 

```http://localhost:8080/api/v1/product_types```

Get one Product Type
- To get one product type, use the `GET` method in your API Testing application and query the following URL, replacing the ```<ID>``` with the id number of the product type you wish to query: 

```http://localhost:8080/api/v1/product_types/<ID>```

**POST**
- To add a product type, use the `POST` method in your API Testing application and query the following url while providing the new product type in JSON format. Please see the example below:

 ```http://localhost:8080/api/v1/product_types```



```
{
	"product_type_name": "what ever you'd like it to be"
}
```

**PUT**
- To update a product type, use the `PUT` method in your API Testing application and query the following url while replacing the ```<ID>``` with the id of the product type you wish to update. Then include the updated product name in your JSON post as seen below.

 ```http://localhost:8080/api/v1/product_types/<ID>```

```
{
        "product_type_name": "new name"
}
```

**DELETE**
- The delete query will only work on a product type  that does not have any corresponding products referencing its product type id. 
- To test, use the `DELETE` method in your API Testing application and query the following url,replacing ```<ID>``` with the product type id number that you wish to be deleted: 

```http://localhost:8080/api/v1/product_types/<ID>```



If the product type id does not have any corresponding products referencing it, the product type will be deleted from your database. Other wise, you will receive the following message:

```
{
    "message": "Error error error!",
    "error": "A Product Type may not be deleted if any Products using the Product Type's ID exist."
}
```

## PAYMENT TYPE API ACCESS

Description
This pull request allows developers to access the Payment Type data in our database using the following API calls:

1. GET
2. POST
3. PUT
4. DELETE (user receives 405)

Type of change
 Bug fix (non-breaking change which fixes an issue)
 New feature (non-breaking change which adds functionality)
 Breaking change (fix or feature that would cause existing functionality to not work as expected)
 This change requires a documentation update
How Has This Been Tested?
In the project directory run the following commands:

node db/build_data.js
node db/build_table.js
run nodemon app.js in the project directory

GET

Perform a GET API call to the following URL http://localhost:<port_number>/api/v1/payment_types to receive a JSON of all existing payment types
Perform a GET API call to the following URL http://localhost:<port_number>/api/v1/payment_types/2 to receive a JSON of one particular payment type.

POST

To POST to the API make a POST API call to the aforementioned URL with the following JSON:
{
 "customer_id": 32,
 "payment_option": "Moostercard",
 "account_number": 12345677998810
}

PUT

To PUT to the API make a PUT API call to the aforementioned URL with the following JSON, which will update "Moostercard" from the previous POST to "Mastercard". Users will only be able to update "payment_option", and "account_number":
{
 "payment_option": "Mastercard",
 "account_number": 12345677998810
}

DELETE

As a group we decided it would not be logical to allow a payment type to be deleted since payment types are only created once an order has been payed for, and therefore the payment type data is necessary to keep.
When a user sends a payment type DELETE call to the API they will receive the following error message.

You should receive the following error message:
{"message":"Error error error!","error":"You are not authorized to delete an existing payment type"}


#employee resource access 


## ORDERS
# Description

This pull request allows the developer to access the Order data in our database using GET, POST, PUT, and DELETE methods. The developer is able to GET all orders and GET single orders, POST a new order, PUT a different value for an existing order, and DELETE orders that are currently active (I.E. do not have a payment type). The DELETE method also deletes all products from the `order_products` table that have the same `order_id`. 

This pull request requires that you already have the database created. Please do the following:
1. `~ npm install`
2. Create a `.env` file that matches the `.env.example` file, with your specified PORT number. We used PORT 8080, so that's what it is in the examples.
3. `~ mkdir json`
4. `node db/build_data.js`
5. `node db/build_table.js`
6. `nodemon app.js`

The final step should start your server on the port you selected. You are now ready to test the API calls using an app like Postman.


**GET**
- To get all orders, use the `GET` method and go to: **http://localhost:8080/api/v1/orders/** - this should return a JSON file of all existing orders, both active and inactive
- To get a single order, use the `GET` method and go to: **http://localhost:8080/api/v1/orders/<ORDER ID NUMBER>** - you need to insert the order ID number you're looking to get at the end of the URL, and it should return a JSON file of just one order with that specific order ID

**POST**
- To add an order, use the `POST` method and go to: **http://localhost:8080/api/v1/orders with the order that you want to add in JSON format. Here is my example:
```
{
	"customer_id": 92,
	"payment_type": 26
}
```
- If you refresh the data, you should see a new line with an automatically generated `order_id`, the new `customer_id` of 92, and the new `payment_type` of 26

**PUT**
- To edit a current order, use the `PUT` method and go to **http://localhost:8080/api/v1/orders/<ORDER ID NUMBER>** and add the `order_id` you want to edit the content for. Here is my example:
```
http://localhost:8080/api/v1/orders/45

{
	"customer_id":65,
	"payment_type":26
}
```
- This will update the data so that the order with an `order_id` of 45, now has a `customer_id` of 65, and the same `payment_type` of 26

**DELETE**
- The delete method will only work on an order that has an existing `order_id`, and has a `payment_type` of `NULL`
- To test, use the `DELETE` method and go to **http://localhost:8080/api/v1/orders/<ORDER ID>**. You will need to put in the `order_id` in the end of the URL in order to access that specific order (using route params). If you put an `order_id` that has a `payment_type` of `null`, the order should delete from the database. If you put an `order_id` that is already complete and has a number for the `payment_type`, it will return an error: 
```
{
    "message": "Error error error!",
    "error": "You cannot delete an order that has been completed"
}

```
## EMPLOYEES 

1) run nodemon app.js in project directory  

2) to getAllEmployees visit http://localhost:<_your_port number>/api/v1/employees
this should serve the customers JSON 

3) to getOneEmployee  visit http://localhost:<_your_port number>/api/v1/employees/_employee_id

4)postOneEmployee

recommended to use postman to pass employee object 
example: 

{
"firstName": "Afton",
"lastName": "Kessler",
"deptId": 10
}
`
POST: localhost:<_your_port number>/api/v1/employees

employee will be added at next primary integer position to the list of employees

PUT:localhost:<_your_port number>/api/v1/employees/_employee_id

employee object will replace the employee object at the _employee_id position specified in the http request 
<<<<<<< HEAD
=======

>>>>>>> master
