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
`
{
"firstName":"Lelia",
"lastName":"Fritsch",
"addressStreet":"0301 Rocio Falls",
"addressCity":"Gorczanyborough",
"addressState":"North Dakota",
"addressZip":"49855-5308",
"accountCreationDate":"2018-03-22"
} 
`

after navigation to http://localhost:<port number>/api/v1/customers the posted customer object will be at the bottom of the page

5) putOneCustomer object

PUT: localhost:<port number>/api/v1/customers/<customer_id>
example customer :

` 
{
"firstName":"Lelia",
"lastName":"Fritsch",
"addressStreet":"0301 Rocio Falls",
"addressCity":"Gorczanyborough",
"addressState":"North Dakota",
"addressZip":"49855-5308",
"accountCreationDate":"2018-03-22"
} 
`
replaces existing customer object with customer object from put method

#### Query for Inactive Customers

Run the following API query to view all customers who have no orders:
```
http://localhost:<port number>/api/v1/customers/?active=false
```


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
