select products.product_name, orders.product_quantity, users.username, products.price, products.image_url from orders
 join products on (orders.product_id = products.id)
 join users on (users.id = orders.user_id)
 where orders.user_id = $1