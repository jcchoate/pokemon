insert into orders (product_id, user_id, price, product_quantity)
values ($1, $2, $3, $4)
returning (product_id, price, product_quantity)