const products = [
	{
		'id': 1,
		'name': 'iPhone 13 Pro',
		'image': "https://www.reliancedigital.in/medias/Apple-MLL93HN-A-Smart-Phones-491997748-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTMwNDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGM0L2g5YS85Nzc2MDg4NTgwMTI2LmpwZ3wxYjQ0OGE4NzlhN2MzNDljZDNmYjRkZjliZjlhMDEwYTBiM2JhOTZjNmM2YzQ0ZWY0NzU1OGMzZDA1OTY3YmE2",
		'price': '27999',
		'decription': ''
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
];

const nav = [
    {'name': 'features', 'href': 'features.html'},
    {'name': 'pricing', 'href': 'pricing.html'},
    {'name': 'Login', 'href': 'login.html'},
];

$(document).ready(function(){
	$('.burger_menu').on('click', function(){
		$(this).toggleClass('open');
		$('.head_nav').toggleClass('open');
	});
	$(window).on("resize", function() {
		$('.burger_menu').removeClass('open');
		$('.head_nav').removeClass('open');
	});
});

function setCookie(name, value, options = {}) {

	options = {
	  path: '/',
	  // при необходимости добавьте другие значения по умолчанию
	  ...options
	};
  
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		updatedCookie += "=" + optionValue;
	  }
	}
  
	document.cookie = updatedCookie;
  }