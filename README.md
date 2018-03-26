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
2) to getAllCustomers visit http://localhost:<port number>/api/v1/customers 
this should serve the customers JSON 
5) to get getOneCustomer visit http://localhost:<port number>/api/v1/customers/<customer_id>
this should return the properties of the customer with the corresponding customer_id
6) postOneCustomer 
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

7) putOneCustomer object

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

8) Product Type Queries 

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

END of Product Type Queries