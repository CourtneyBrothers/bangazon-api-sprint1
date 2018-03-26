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

#employee resource access 
1) run nodemon app.js in project directory  

2) to getAllEmployees visit http://localhost:<_your_port number>/api/v1/employees
this should serve the customers JSON 

3) to getOneEmployee  visit http://localhost:<_your_port number>/api/v1/employees/_employee_id

4)postOneEmployee

recommended to use postman to pass employee object 
example: 
{
firstName: "Afton",
lastName: "Kessler",
deptId: 10
}

POST: localhost:<_your_port_number_>/api/v1/employees

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

{
"departmentId": "3",
"departmentName": "CARS",
"supervisorId": 1,
"budget": 14888
}


5) putOneDepartment

PUT:localhost:<_your_port_number>/api/v1/departments/_department_id_

department object will replace the department object at the _department_id_ position specified in the http request 
