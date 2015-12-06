Meteor.startup(function() {
	if ( Products.find().count() === 0) {
		var products = [
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.9',
				'sale': "true",
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/51lXNf7piFL.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81Th9AO4cGL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/71IceeHLGoL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/31kCHXiN3nL.jpg"},
						],			
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.9',
				'sale': "true",
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/51lXNf7piFL.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81Th9AO4cGL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/71IceeHLGoL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/31kCHXiN3nL.jpg"},
						],			
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.9',
				'sale': "true",
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/51lXNf7piFL.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81Th9AO4cGL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/71IceeHLGoL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/31kCHXiN3nL.jpg"},
						],			
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.9',
				'sale': "true",
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/51lXNf7piFL.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81Th9AO4cGL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/71IceeHLGoL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/31kCHXiN3nL.jpg"},
						],			
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.99',
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"userName": "Bonnie74",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit! Indoor Ball',
				'brand': 'Petmate',
				'price': '4.99',
				'stock': '20',
				'description': "No yelling at Fido for bringing this ball in the house...that's exactly where it belongs! The Chuckit! Indoor Ball is the perfect compliment to rainy days, hardwood floors, or late-night games of fetch. The lightweight Bounceflex Core Technology makes it soft enough when meeting a wall or furniture while giving it just the right amount of bounce for indoor play. Use it with the Indoor Launcher for slobber-free fun.",
				'reviews': [
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "date",
							"reviewContent": " review content",
							"userName": "Bonnie74",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"location": "Long Island",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 4,
							"title": "best toy ever",
							"date": "date",
							"reviewContent": " review content",
							"userName": "Bonnie74",
							"content": "content ten co content tent co co co coten aplsbid apo",
							"location": "Long Island",
							"helpfull":  3
					}
				]
			}
		];

		for (var i = 0; i < products.length; i++)
			Products.insert({
				itemNumber: products[i].itemNumber,
				productTags: products[i].productTags,
				brand: products[i].brand, 
				sale: products[i].sale,
				images: products[i].images,
				description: products[i].description,
				reviews: products[i].reviews,
				stock: products[i].stock,
				name: products[i].name, 
				price: products[i].price});
	}
})