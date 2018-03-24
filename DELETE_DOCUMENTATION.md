## DELETE:
`ORDERS`:
+ API may delete a specified `orders` row per `order_id` where `orders.payment_type = NULL` (meaning: only active orders are to be deleted)
+ In tandem, remove all `order_product` rows where `order_product.order_id = //specified order_id//`

`PRODUCTS`:
+ API may delete a specified `products` row per `product_id` where required `product_id` is not specified on any row in `order_product` table

`PRODUCT_TYPES`:
+ API may delete a specified `product_types` row per `product_type_id` where required `product_type_id` is not specified on any row in `products` table

`TRAINING_PROGRAMS`:
+ API may delete a specified `training programs` row per `program_id` where `training_programs.start_date` > today's date
+ In tandem, remove all `employee_training` rows where `employee_training.program_id = //specified program_id//`



## SANS DELETE:
`EMPLOYEES`:
+ API will not delete any rows from `employee` table in accordance to the table's fundamental relation to the database

`COMPUTERS`:
+ API will not delete any rows from `computer` table in accordance to Bangazon Corp's records of expenditure & property
+ API will `INSERT` a decommission date where `computer.decommission_date = NULL` for specified `computer.computer_id`
+ In tandem, API will INSERT into `employee_computer` an end date where `employee_computer.end_date = NULL` and `employee_computer.computer_id = //specified computer_id//`, rendering the computer fully decommissioned
+ API will explicitly implement `PUT` rather than `DELETE` to signify the data is not being erased 

`DEPARTMENTS`:
+ API will not delete any rows from `departments` table in accordance to table's fundamental relation to the infrastructure of Bangazon

`CUSTOMERS`:
+ API will not delete any rows from `customers` table in accordance to table's fundamental relation to the database

`PAYMENT TYPES`:
+ API will not delete any rows from `payment_types` table in accordance to table's fundamental relation to the `orders` table; `orders.payment_types` being a signifier to the closing of orders as required
