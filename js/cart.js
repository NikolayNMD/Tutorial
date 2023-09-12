const cart = {};
cart['products'] = [
    {
		'id': 1,
		'name': 'iPhone 13 Pro',
		'image': "https://www.reliancedigital.in/medias/Apple-MLL93HN-A-Smart-Phones-491997748-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwNDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g5YS85Nzc2MDg4NTgwMTI2LmpwZ3wxYjQ0OGE4NzlhN2MzNDljZDNmYjRkZjliZjlhMDEwYTBiM2JhOTZjNmM2YzQ0ZWY0NzU1OGMzZDA1OTY3YmE2",
		'price': '10000',
		'quantity': 2
	},
	{
		'id': 2,
		'name': 'MacBook Pro 14',
		'image': "https://justbuy.com.ua/wp-content/uploads/2023/05/1268945_zoom-removebg-preview.png",
		'price': '50000',
		'quantity': 5
	}
];
cart['totalPrice'] = 270000;

$(document).ready(function(){
	for (let item of cart.products) {
		console.log(item);
		let block = 
		'<div class="cart_product">' + 
			'<div class="cart_product_info">' + 
				'<div class="cart_product_image">' +
					'<img src="' + item.image + '" alt="phone">' +
				'</div>' +
				'<a href="#" class="cart_product_title">' + item.name + '</a>' +
			'</div>' +
			'<div class="cart_product_quantity">' +
				'<button type="button" class="minus_button" data-id="' + item.id + '">-</button>' +
				'<input type="text" class="input_quantity" value="' + item.quantity + '">' +
				'<button type="button" class="plus_button" data-id="' + item.id + '">+</button>' +
			'</div>' +
			'<div class="cart_product_remove">' +
				'<button data-id="' + item.id + '">&times;</button>' +
			'</div>' +
			'<div class="cart_product_price">' + item.price * item.quantity + '</div>' +
		'</div>';

		$('.cart_products').append(block);
	}
	$('.total span').html(cart.totalPrice);

	$('.cart_product_remove button').on('click', function(){
		let id = $(this).data('id');
		console.log('Product ' + id + ' deleted');
	});

	$('button.minus_button').on('click', function(){
		let id = $(this).data('id');
		console.log('Product ' + id + ' MINUS ONE');
	});

	$('button.plus_button').on('click', function(){
		let id = $(this).data('id');
		console.log('Product ' + id + ' PLUS ONE');
	});
});