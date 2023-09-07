const products = [
	{
		'id': 1,
		'name': 'iPhone 13 Pro',
		'image': "https://www.reliancedigital.in/medias/Apple-MLL93HN-A-Smart-Phones-491997748-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwNDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g5YS85Nzc2MDg4NTgwMTI2LmpwZ3wxYjQ0OGE4NzlhN2MzNDljZDNmYjRkZjliZjlhMDEwYTBiM2JhOTZjNmM2YzQ0ZWY0NzU1OGMzZDA1OTY3YmE2",
		'price': '27999'
	},
	{
		'id': 2,
		'name': 'MacBook Pro 14',
		'image': "https://justbuy.com.ua/wp-content/uploads/2023/05/1268945_zoom-removebg-preview.png",
		'price': '73999'
	},
	{
		'id': 3,
		'name': 'AirPods Pro',
		'image': "https://hotline.ua/img/tx/211/2113157695.jpg",
		'price': '8499'
	},
	{
		'id': 4,
		'name': 'Apple iPad Pro 12.9',
		'image': "https://hotline.ua/img/tx/182/1821114155.jpg",
		'price': '18999'
	}
]
$(document).ready(function(){
	for (let item of products) {
		let block = 
		'<div class="product">' + 
			'<div class="product_image">' + 
				'<img src="' + item.image +  '" alt="phone">' +
			'</div>' +
			'<a href="#" class="product_title">' + item.name + '</a>' +
			'<div class="product_code">Product Code: <span>' + item.id + '</span></div>' +
			'<div class="product_nav">' +
				'<div class="product_price">UAH <span>' + item.price + '</span></div>' +
				'<button>Add to cart</button>' +
			'</div>' +
		'</div>';

		$('.products').append(block);
	}
});

{/* <div class="product">
		<div class="product_image">
			<img src="https://hotline.ua/img/tx/211/2113157695.jpg" alt="phone">
		</div>
		<a href="#" class="product_title">Air Pods Pro Max</a>
		<div class="product_code">Product Code: <span>1</span></div>
		<div class="product_nav">
			<div class="product_price">UAH <span>10 000</span></div>
			<button>Add to cart</button>
		</div>
</div> */}