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

### Products
**GET**
Please run the following query with a `GET` command to receive all products from the `products` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:<definied port number>/api/v1/product
```

To `GET` an individual product, please run the following query with the `product_id` inserted into the route parameters
```
http://localhost:<definied port number>/api/v1/product/<product id integer>
``` 

**POST**
To add a product to the `products` table using your API testing tool, use `POST` method to the following query with your JSON formatted as such
```
http://localhost:<port#>/api/v1/product

{
	"productName": "automatic blinker fluid",
	"productType": 3,
	"price": 45666,
	"description": "for when your car blinker just doesnt wanna blink any longer",
	"customerId": 21,
	"dateCreated": "2012-03-03"
}
```

**PUT**
Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `product` row by passing the `product_id` into the route parameters: 
```
http://localhost:8080/api/v1/orders/<product_id>
```

**DELETE**
`DELETE` method on the `products` table will only work if the specified `product_id` is not found on any row with `order_products` table. 

If the `product_id` matches to any row on `order_products` by running the following query, the proceeding message will be sent back:
```
http://localhost:8080/api/v1/product/<product_id>
{
    "message": "Error error error!",
    "error": "This product can not be deleted""
}
```

If the `product_id` does not match to any row on `order_products` by running the query, an empty JSON will be returned. Please check your database to ensure the specified `product_id` is no longer on the `products` table.


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
