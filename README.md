# Bangazon API - Sprint 1

-- STILL WORKING, NOT FINISHED -- 

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
    "error": "This product can not be deleted"
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
http://localhost:8080/api/v1/payment_types/<payment_id>
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
http://localhost:8080/api/v1/payment_types/<payment_id>

{
  "payment_option": "Mastercard",
  "account_number": 12345677998810
}
```

After refreshing the database, the existing `payment_type` object will have your updated data.

**DELETE**

The `DELETE` method on the `payment_types` table will not delete any rows from `payment_types` in accordance to table's fundamental relation to the database.

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



### PRODUCT TYPE

**GET**

Please run the following query with a `GET` command to receive all product types from the `product_types` table in your preferred API testing tool (e.g. Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/product_types
```

To `GET` an individual product type, please run the following query with the `product_type_id` inserted into the route parameters: 
```
http://localhost:8080/api/v1/product_types/<product_type_id>
```

**POST**

To add a product to the `product_types` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such: 
```
{
  "product_type_name":"what ever you'd like it to be"
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `product_type_name` row by passing the `product_type_id` into the route parameters. Users will only be able to update the `product_type_name`, as the `product_type_id` is generated automatically:
```
  "product_type_name":"new name"
```

**DELETE**

The `DELETE` method will only work on a product type that does not have any corresponding products referencing its `product_type_id`. To test it, use the `DELETE` method in your API testing application and query the following url:
```
http://localhost:8080/api/v1/product_types/<product_type_id>
```
If the `product_type_id` does not have any corresponding products referencing it, the product type will be deleted from your database. Otherwise, you will receive the following message:
```
  "message": "Error error error!",
  "error": "A Product Type may not be deleted if any Products using the Product Type's ID exist."
```

### EMPLOYEE

**GET**

Please run the following query with a `GET` command to receive all employees from the `employees` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/employees
```

To `GET` an individual employee, please run the following query with the `employee_id` inserted into the route parameters:
```
http://localhost:8080/api/v1/employees/<employee_id>
```

**POST**

To add an employee to the `employees` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:
```
{
  "firstName":"Afton",
  "lastName":"Kessler",
  "deptId":10
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `employees` row by passing the `employee_id` into the route parameters. Users will only be able to update the `first_name`, `last_name`, and `dept_id`, as the `employee_id` is generated automatically:
```
http://localhost:8080/api/v1/employees/<employee_id>

{
  "firstName":"Ashton",
  "lastName":"Kutcher",
  "deptId":10
}
```
After refreshing the database, the existing `employee` will have your updated data.

**DELETE**

The `DELETE` method on the `employees` table will not delete any rows from the `employees` in accordance to the table's fundamental relation to the database.

### DEPARTMENT

**GET**

Please run the following query with a `GET` command to receive all departments from the `departments` table in your preferred API testing tool (e.g., Postman) or in your browser with JSON Viewer enabled:
```
http://localhost:8080/api/v1/departments
```

To `GET` an individual department, please run the following query with the `department_id` inserted into the route parameters:
```
http://localhost:8080/api/v1/departments/<department_id>
```

**POST**

To add a department to the `departments` table using your API testing tool, use the `POST` method to the following query with your JSON formatted as such:
```
{
  "departmentName": "Cars",
  "supervisorId": 1,
  "budget": 14888
}
```

**PUT**

Using the same JSON formatting as before, use the `PUT` method to update/overwrite a specific `departments` row by passing the `department_id` into the route parameters. Users will only be able to update `department_name`, `supervisor_id`, and `budget`, as `department_id` is generated automatically:
```
http://localhost:8080/api/v1/departments/<department_id>
```
After refreshing the database, the existing `department` object will have your updated data.

**DELETE**

The `DELETE` method on the `departments` table will not delete any rows from `departments` in accordance to the table's fundamental relation to the database.

### COMPUTER

**GET**



**POST**



**PUT**



**DELETE**


### TRAINING PROGRAM

**GET**



**POST**



**PUT**



**DELETE**






















#### Query for Inactive Customers

Run the following API query to view all customers who have no orders:
```
http://localhost:<port number>/api/v1/customers/?active=false
```


