$(document).ready(function(){
	for (let item of products) {
		let block = 
		'<div class="product">' + 
			'<div class="product_image">' + 
				'<img src="' + item.image +  '" alt="phone">' +
			'</div>' +
			'<a href="#" class="product_title">' + item.name + '</a>' +
			'<div class="product_code">Product code: <span>' + item.id + '</span></div>' +
			'<div class="product_nav">' +
				'<div class="product_price"><span>' + item.price + '</span> UAH</div>' +
				'<button class="add_to_cart" data-id="' + item.id + '"><img src="images/cart-icon.png" alt="phone"></button>' +
			'</div>' +
		'</div>';

		$('.products').append(block);
	}

	$('button.add_to_cart').on('click', function(){
		var id = $(this).data('id');
		var product = getProductById(id);

		if (product) {
			addToCart(product);
		} else {
			console.log('no-product');
		}

	});

	function addToCart(product)
	{
		// document.cookie = "user=John"; // обновляем только куки с именем 'user'
 		// alert(document.cookie);
		cartCookies = false;

		if (cartCookies) {
			for (let product of cartCookies.products) {
				product.quantity += 1;
				cartCookies.totalPrice += +product.price;
			}

			$.session.set('cart', cartCookies);
			console.log($.session.get('cart'));

		} else {
			const cart = {};
			product.quantity = 1;
			cart.products = {product};
			cart.totalPrice = parseInt(product.price);
			setCookie('cart', JSON.stringify(cart));
			console.log(getCookie('cart'));
		}
	}

	function getProductById(id)
	{
		for (let product of products) {
			if (product.id == id) {
				return product;
			}
		}
		return false;
	}
});
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}