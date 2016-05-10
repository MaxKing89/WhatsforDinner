var allVideoArr = [
 {
    name: 'Pizza Bread Bowl',
    src: 'Eh5_ssE_BTY',
    ing:['cheese','1 bread bowl','1 cup marinara sauce','8 ounces fresh mozzarella','6 ounces pepperoni','½ sliced onion','½ cup basil','1 cup cooked sausage','1 sliced green bell pepper','1 cup shredded white cheddar'],
    cuisineType: 'Italian'
 },
 {
    name: 'Slow Cooker Ribs',
    src: '1t60widjlhY',
    ing:['2 cups of bbq sauce','1/4 cup of brown sugar','4 Tbsp. of cider vinegar','3 tsp of oregano','1 tsp of Worcestershire sauce','1 Tbsp. of cayenne pepper','1 Tbsp. of chili powder','3 lbs of baby back ribs','salt and pepper'],
    cuisineType: 'American'
},
 {
    name: 'Mini S’mores Pies',
    src: '0HXaRaxNHDg',
    ing: ['<b>Graham Cracker Crust:</b>','2 packets of graham crackers, finely crushed','1 stick unsalted butter, melted','⅓ cup granulated sugar','<br><b>Chocolate Filling:</b>','1 ¼ cup of heavy cream','4 tablespoons unsalted butter, cubed','⅓ cup granulated sugar','10.5oz / 300g dark chocolate (60% cocoa minimum) chopped','3 eggs, plus 2 yolks','20 large marshmallows ','Foil cupcake liners','Muffin or cupcake pan'],
    cuisineType: 'Dessert'
}
];


var randomResultSet = allVideoArr[Math.floor(Math.random()*allVideoArr.length)];

var getName = randomResultSet.name;
$('.name').html("<h1>Dish Name - " + getName + "</h1>");

var getCuisineType = randomResultSet.cuisineType;
$('.cuisine-type').html("<h2>Cuisine Type - " + getCuisineType + "</h2>")

var getSRC = "https://www.youtube.com/embed/" + randomResultSet.src + "?autoplay=1";

$('#video-player').attr('src', getSRC).animate({top:'200px', opacity:1}, function(){ $(this).attr('autoplay', 'true') });

var getIngrediants = randomResultSet.ing.join('<br>');
$('.ingredients').html("<h3>Ingredients - </h3><p>" + getIngrediants + "</p>")

