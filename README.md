# Bangazon API - Sprint 1

****READ ME IS NOT FINISHED - STILL WORKING****

## TO RUN

Please create the database by running the following commands in the root directory
```
$ npm install
$ touch .env
$ mkdir json
$ node db/build_data.js
$ node db/build_table.js
$ nodemon app.js
```
Enter the following into the newly created `.env` file:
```
PORT=<desired 4-digit port number>
NODE_ENV="DEVELOPMENT"
```
Alternatively, if you choose to not set up a `.env` file, it will run off of port 3000. For our examples, the port number will be `8080`.

## API USAGE

### CUSTOMER

**GET**

Please run the following query with a `GET` command to receive all products from the `customers` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/customers
``` 

To `GET` an individual customer, please run the following query with the `customer_id` inserted into the route parameters:
```
http://localhost:8080/api/v1/customers/<customer id integer>
```

**POST**

To add a new customer to the `customers` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:
```
http://localhost:8080/api/v1/customers/
 
{
  "firstName":"Lelia",
  "lastName":"Fritsch",
  "addressStreet":"0301 Rocio Falls",
  "addressCity":"Gorczanyborough",
  "addressState":"North Dakota",
  "addressZip":"49855-5308",
  "accountCreationDate":"2018-03-22"
}
```
After refreshing the database, the new `customer` object will be at the bottom with a new, automatically generated `customer_id`.

**PUT**


Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `customer` row by passing the `customer_id` into the route parameters: 
```
http://localhost:8080/api/v1/orders/<product_id>
```

After refreshing the database, the existing `customer` object will have your updated data.

**DELETE**

`DELETE` method on the `customers` table not delete any rows from `customers` in accordance to table's fundamental relation to the database.

### PRODUCT

**GET**

Please run the following query with a `GET` command to receive all products from the `products` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/product
```

To `GET` an individual product, please run the following query with the `product_id` inserted into the route parameters
```
http://localhost:8080/api/v1/product/<product id integer>
``` 

**POST**

To add a product to the `products` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:
```
http://localhost:8080/api/v1/product

{
  "product_name": "automatic blinker fluid",
  "product_type": 3,
  "price": 45666,
  "description": "for when your car blinker just doesnt wanna blink any longer",
  "customer_id": 21,
  "listing_date": "2012-03-03"
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `product` row by passing the `product_id` into the route parameters: 
```
http://localhost:8080/api/v1/orders/<product_id>
```

After refreshing the database, the existing `product` object will have your updated data.

**DELETE**

`DELETE` method on the `products` table will only work if the specified `product_id` is not found on any row within the  `order_products` table. 

If the `product_id` matches any row on `order_products` by running the following query, the proceeding message will be sent back:
```
http://localhost:8080/api/v1/product/<product_id>
{
    "message": "Error error error!",
    "error": "This product can not be deleted""
}
```

If the `product_id` does not match to any row on `order_products` by running the query, an empty JSON will be returned. Please check your database to ensure the specified `product_id` is no longer on the `products` table.

### PAYMENT TYPE

**GET**

Please run the following query with a `GET` command to receive all payment types from the `payment_types` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/payment_types
```

To `GET` an individual payment type, please run the following query with the `payment_id` inserted into the route parameters:
```
http://localhost:8080/api/v1/product/<payment_id>
``` 


**POST**

To add a product to the `payment_types` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:

```
{
   "customer_id": 32,
   "payment_option": "Moostercard",
   "account_number": 12345677998810
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `payment_type` row by passing the `payment_id` into the route parameters. Users will only be able to update `payment_option` and `account_number`:

```
http://localhost:8080/api/v1/orders/<payment_id>

{
  "payment_option": "Mastercard",
  "account_number": 12345677998810
}
```

After refreshing the database, the existing `payment_type` object will have your updated data.

**DELETE**

`DELETE` method on the `product_types` table not delete any rows from `product_types` in accordance to table's fundamental relation to the database.

### ORDER

**GET**

Please run the following query with a `GET` command to receive all orders from the `orders` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/orders
```

To `GET` an individual order, please run the following query with the `order_id` inserted into the route parameters:
```
http://localhost:8080/api/v1/orders/<order_id>
``` 

**POST**

To add a product to the `orders` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:

```
{
  "customer_id": 92,
  "payment_type": 26
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `orders` row by passing the `order_id` into the route parameters. Users will only be able to update `payment_option` and `account_number`:

```
http://localhost:8080/api/v1/orders/<payment_id>

{
  "customer_id":65,
  "payment_type":26
}
```

After refreshing the database, the existing `order_id` object will have your updated data.

**DELETE**

The `DELETE` method will only work on an order that has an existing `order_id`, and has a `payment_type` of `NULL`, signifying that it is still active. Completed orders cannot be deleted. 

If the `order_id` also has a `payment_type` that is not `NULL`, by running the following query, the proceeding message will be sent back:
```
http://localhost:8080/api/v1/orders/<order_id>

{
  "message": "Error error error!",
  "error": "You cannot delete an order that has been completed"
}
```

If the order that you try to delete is currently active (I.E. has a `payment_type` of `NULL` on the `orders` table), it will successfully delete from the `orders` table. It will also simultaneously delete any rows from the `order_products` table with the corresponding `order_id`. 


STILL WORKING - need to do product type, employee, department, computer, training program



























#### Query for Inactive Customers

Run the following API query to view all customers who have no orders:
```
http://localhost:<port number>/api/v1/customers/?active=false
```


#employee resource access 



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
```
{
"firstName": "Afton",
"lastName": "Kessler",
"deptId": 10
}
```

POST: localhost:<_your_port number>/api/v1/employees

employee will be added at next primary integer position to the list of employees

PUT:localhost:<_your_port_number_>/api/v1/employees/_employee_id

employee object will replace the employee object at the _employee_id position specified in the http request 

#department resource access 
1) run nodemon app.js in project directory  

2) to getAllDepartments visit http://localhost:<_your_port number>/api/v1/departments
this should serve the customers JSON 

3) to getOneDepartment visit http://localhost:<_your_port number>/api/v1/departments/_department_id_

4)postOneDepartment

recommended to use postman to pass department object 
example: 
`

{
"departmentName": "CARS",
"supervisorId": 1,
"budget": 14888
}
`
department object will add the department object at the _department_id_ at the next position

5) putOneDepartment

PUT:localhost:<_your_port_number>/api/v1/departments/_department_id_


department object will replace the department object at the _department_id_ position specified in the http request 

## TRAINING PROGRAMS

Description
This pull request gives developers API access to the Training Programs table and supports the following API calls:

GET
POST
PUT
DELETE
Type of change
 Bug fix (non-breaking change which fixes an issue)
 New feature (non-breaking change which adds functionality)
 Breaking change (fix or feature that would cause existing functionality to not work as expected)
 This change requires a documentation update
How Has This Been Tested?
To test the GET API call run the following commands from the root folder:
npm install
node db/build_data.js
node db/build_table.js
nodemon app.js
GET

To test the GET API call use the following URL to get a list of all training programs.
http://localhost:<definied port number>/api/v1/training_programs
To test the GET API call use the following URL and enter in an Id integer to get back one specific program.
http://localhost:<definied port number>/api/v1/training_programs/<id>
POST
To test the POST API call use postman to POST the following program object.

{
  "program_title": "Try really hard and stuff",
  "start_date": "2019-02-17",
  "end_date": "2020-07-07",
  "max_attendees": 30
}
PUT
To test the PUT API call use postman to update the previous POST with new information. Don't forget to include the ID within the URL:

http://localhost:<port number>/api/v1/training_programs/<id>
{
  "program_title": "Try EXTRA hard in everything you do",
  "start_date": "2020-02-17",
  "end_date": "2020-07-07",
  "max_attendees": 45
}
DELETE

Users should only be able to delete training programs with future start dates.
You can test this by deleting the training program you just added to the DB using the POST API call. Don't forget to add the id to the end of the URL.
http://localhost:<port number>/api/v1/training_programs/<id>
Attempt to delete any training program with a past start and you should get the following error:
{
    "message": "Error error error!",
    "error": "This training program cannot be deleted, it's start date is not in the future"
}
DELETE will also remove any employee entries in the employee_training table for the deleted training program.
You can test this by manually updating the start dates of an existing training that has employees enrolled in it. Set the start date to a future date, then delete the training program.
Checklist:
 My code follows the style guidelines of this project
 I have performed a self-review of my own code
 I have commented my code, particularly in hard-to-understand areas
 I have made corresponding changes to the documentation
 My changes generate no new warnings
