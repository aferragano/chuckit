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
				'itemNumber': 6798,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Ultra Ball',
				'brand': 'Petmate',
				'price': '9.29',
				'sale': false,
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/81afjJP-wFL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81ep8rBNqFL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/71irXm8WzWL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/41ktIrraV0L.jpg"},
						],			
				'stock': '29',
				'description': "Designed for the most demanding use, the Chuckit! Ultra Ball is no ordinary ball. Simply put, this is the best ball for the game of fetch. Developed to have high bounce, high buoyancy, high visibility, and high durability. The Chuckit! Ultra Ball promises to outplay the ordinary. Compatible with Chuckit! Dog Toy Launcher.",
				'reviews': [
					{
							"stars": 5,
							"title": "best dog balls we've ever bought",
							"date": "June 20, 2007",
							"content": "The best dog balls we've ever bought. My labs love these balls; in fact I can honestly say they are obsessed with them. These balls are rubber, very bouncy, they float and my dogs haven't been able to chew these up like regular tennis balls. And these balls are not furry so the dirt and grass doesn't stick like it does on regular tennis balls. I hate picking up a tennis ball that is all furry and matted with dirt. I think our dogs feel the same way because whenever it's time to play they bring us these and they ignore the tennis balls! With the launcher we can throw the ball across an acre and give our dogs a really good workout. The balls bounce high when thrown that far. The dogs love it and it's great for getting their energy out. Also great for the lake because the balls float, stay buoyant and are easy for the dogs to grab in the water. Cost more than tennis balls but they last longer, and my dogs are worth it. 5 stars.",
							"userName": "lavalamp286",
							"location": "brooklyn",
							"reccomend": true,
							"helpfull":  3
					},
					{
							"stars": 5,
							"title": "best dog balls we've ever bought",
							"date": "June 20, 2007",
							"content": "The best dog balls we've ever bought. My labs love these balls; in fact I can honestly say they are obsessed with them. These balls are rubber, very bouncy, they float and my dogs haven't been able to chew these up like regular tennis balls. And these balls are not furry so the dirt and grass doesn't stick like it does on regular tennis balls. I hate picking up a tennis ball that is all furry and matted with dirt. I think our dogs feel the same way because whenever it's time to play they bring us these and they ignore the tennis balls! With the launcher we can throw the ball across an acre and give our dogs a really good workout. The balls bounce high when thrown that far. The dogs love it and it's great for getting their energy out. Also great for the lake because the balls float, stay buoyant and are easy for the dogs to grab in the water. Cost more than tennis balls but they last longer, and my dogs are worth it. 5 stars.",
							"userName": "lavalamp286",
							"location": "brooklyn",
							"reccomend": true,
							"helpfull":  3
					}
				]
			},
			{ 	
				'itemNumber': 53245,
				'productTags': [ "dog toy", "ball" ],
				'name': 'Chuckit2! Original Launcher',
				'brand': 'Petmate',
				'price': '4.9',
				'sale': "true",
				'images': [
					{ full: "data:image/jpeg;base64,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"},
					{ full: "http://ecx.images-amazon.com/images/I/81Pzfo99VEL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/813Ve%2BsIwNL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/81bNPw2pBzL._SL1500_.jpg"},
						],			
				'stock': '20',
				'description': "Terrific way to exercise your dog without wearing yourself out with the Chuckit Classic Launcher! Throw tennis balls 2 or 3 times as far with the Ball Launcher. Hands-free pick-up - no more slobbery tennis balls. Features an ergonomic handle for the ultimate comfort and control. Made from durable lightweight flexible plastic. Comes in a variety of throwing ranges and ball sizes. Use with standard tennis balls or Chuckit! compatible balls only.",
				'reviews': [
					{
							"stars": 5,
							"title": "best toy ever",
							"date": " September 16, 2006",
							"content": "If your dog isn't one for fetching balls, this is probably not the toy for you. However, if your dog is the kind that lives to run down tennis balls, you NEED to own this product. I own two Chuckit's. I have the large version featured here and also the small size version. I actually tend to use the small size more often because it's easier to control your throws and I'm not as often in an area where I can make use of the large size's range. The small size sill allows you to chuck it pretty darn far if you want. However, for when you are at a wide open area (like a park or beach) and you want the herculean ability to catapult a tennis ball to the outer limits of your dog, this large size Chuckit can't be beat. The light weight of a tennis ball makes it very difficult to throw long distances no matter how strong your arm strength is. Even throwing 40yrds gets strenuous over time, but with Chuckit, little more than the flick of a wrist will achieve that distance. Plus, the length of the product makes bending down to pick up slimey, slobbery, wet tennis balls a thing of the past.",
							"userName": "fallDown",
							"location": "Nevada",
							"reccomend": true,
							"helpfull":  5
					},
					{
							"stars": 5,
							"title": "best toy ever",
							"date": " September 16, 2006",
							"content": "If your dog isn't one for fetching balls, this is probably not the toy for you. However, if your dog is the kind that lives to run down tennis balls, you NEED to own this product. I own two Chuckit's. I have the large version featured here and also the small size version. I actually tend to use the small size more often because it's easier to control your throws and I'm not as often in an area where I can make use of the large size's range. The small size sill allows you to chuck it pretty darn far if you want. However, for when you are at a wide open area (like a park or beach) and you want the herculean ability to catapult a tennis ball to the outer limits of your dog, this large size Chuckit can't be beat. The light weight of a tennis ball makes it very difficult to throw long distances no matter how strong your arm strength is. Even throwing 40yrds gets strenuous over time, but with Chuckit, little more than the flick of a wrist will achieve that distance. Plus, the length of the product makes bending down to pick up slimey, slobbery, wet tennis balls a thing of the past.",
							"userName": "fallDown",
							"location": "Nevada",
							"reccomend": true,
							"helpfull":  5
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
				'productTags': [ "dog toy", "frisebee" ],
				'name': 'Chuckit! Flying Squirrel',
				'brand': 'Petmate',
				'price': '12.9',
				'sale': false,
				'images': [
					{ full: "http://ecx.images-amazon.com/images/I/91fZWpPUunL._SL1500_.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/51BkJQkoOmL.jpg"},
					{ full: "http://ecx.images-amazon.com/images/I/41otzI%2Bt%2BOL.jpg"}
						],			
				'stock': '80',
				'description': "Here is one squirrel who loves being chased down. Just grab him by the paw and throw like a flying disc. His spinning feet create visual excitement for you and your pet. Chuckit. Flying Squirrels exemplify the award-winning innovation that makes these toys so popular year after year. Unique benefits include raised sides for easy pickup, glow in the dark paws for evening play, and flotation in water.",
				'reviews': [
					{
							"stars": 4,
							"title": "Recommended by Annie the wonderdog!",
							"date": "",
							"content": "Our dog Annie is a frisbee enthusiast. She doesn't show much excitement when we pull out an old tennis ball for catch. But get out a frisbee-or even MENTION the word Frisbee - and she goes bonkers. The only problem is, she is part husky/ part lab and those front canines rip through plastic like a hot knife through butter. Yesterday she literally chewed a cheap plastic frisbee to shreds in under ten tosses. Enter the CHUCKIT! - this thing will last through thousands of throws without ripping or fraying. The shape and action it displays during flight must drive Annie nuts because she pursues it like a starved wolf. And you can really get it out there far - which is a plus for us, because Annie is quite speedy and can cover a lot of ground in the blink of an eye. The best part is the finish, when the chuckit hovers several feet of the ground as it slows and drops. At this point Annie uses her incredible closing speed to leap into the air and snag the Squirrel - which comes easy due to its soft, flexible body. Today I am ordering our second one in as many years, only because we always left ours outside and the sun deteriorated it. One helpful hint: make sure to throw it by the head. It will fly much more acurately than if thrown by a leg. Good luck and have fun - your dog will love its new squirrel!",
							"userName": "waterzDOGmom10",
							"location": "South Carolina",
							"reccomend": true,
							"helpfull":  4
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