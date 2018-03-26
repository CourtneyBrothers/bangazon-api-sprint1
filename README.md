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

