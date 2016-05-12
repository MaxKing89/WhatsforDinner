//src: code comes after v=

var allVideoArr = [
    //////////////////////////////////////ITALIAN//////////////////////////////
     {
        name: 'Pizza Bread Bowl',
        src: 'Eh5_ssE_BTY',
        ing:['Cheese','1 bread bowl','1 cup marinara sauce','8 ounces fresh mozzarella','6 ounces pepperoni','½ sliced onion','½ cup basil','1 cup cooked sausage','1 sliced green bell pepper','1 cup shredded white cheddar'],
        cuisineType: 'Italian'
     },
    {
        name: 'Avocado Pasta',
        src: 'Z_6oGgM8TMA',
        ing:['12 oz. whole wheat spaghetti', '2 avocados', '1/2 cup basil leaves', '2 cloves garlic', '2 tbsp lemon juice', '1/3 cup extra virgin olive oil', '1 cup grape tomatoes, halved', '1/2 cup peas, fresh or canned & drained'],
        cuisineType: 'Italian'
     },
    {
        name: 'Zuppa Toscana: An Olive Garden Copycat Recipe',
        src: 'H_O2ZVhhmbw',
        ing:['1 lb ground Italian sausage or lean ground turkey/chicken', '2 cups chicken broth', '4 cups water', '2 large russet potatoes, sliced', '1 medium white onion, chopped', '2 garlic cloves, minced', 'Salt and pepper, to taste', '1/2 cup bacon bits [optional]', '2 cups fresh kale', '1 cup heavy whipping cream or evaporated milk'],
        cuisineType: 'Italian'
     },
    //////////////////////////////////////AMERICAN//////////////////////////////
     {
        name: 'Slow Cooker Ribs',
        src: '1t60widjlhY',
        ing:['2 cups of bbq sauce','1/4 cup of brown sugar','4 Tbsp. of cider vinegar','3 tsp of oregano','1 tsp of Worcestershire sauce','1 Tbsp. of cayenne pepper','1 Tbsp. of chili powder','3 lbs of baby back ribs','salt and pepper'],
        cuisineType: 'American'
    },
     {
        name: 'Chili Cheese Dog Bake',
        src: 'zD2KF7uHY4E',
        ing:['1 yellow onion, diced', '1 pound ground beef', '½ teaspoon salt', '½ teaspoon pepper', '½ cup tomato sauce', '½ cup ketchup', '2 ½ teaspoons chili powder', '½ teaspoon sugar', '10 hot dogs', '1 can pre-made biscuits', '4 tablespoons butter, melted', '½ teaspoon garlic powder', '2 tablespoons parsley', '1 cup shredded cheddar cheese'],
        cuisineType: 'American'
    },
     {
        name: 'BLT Macoroni Salad',
        src: 'I5SAiYtuwlw',
        ing:['1 lb. elbow macaroni, cooked', '¾ cup mayo', '¼ cup sour cream', '3 tablespoons rice vinegar', '1 teaspoon garlic powder', 'salt and pepper, to taste', '1½ teaspoons ground black pepper', '8 slices of bacon, chopped', '1 cup tomato, seeded and diced', '1 cup baby spinach, chopped'],
        cuisineType: 'American'
    },
     {
        name: 'Bacon Cheeseburger Bombs',
        src: 'D8ZQfHfM3ss',
        ing:['Not Listed :('],
        cuisineType: 'American'
    },
    //////////////////////////////////////MEXICAN//////////////////////////////
    {
        name: 'Southwestern Taco Salad',
        src: 'cyeoZwMLPSw',
        ing: ['<b>Dressing:</b>', '1/2 an avocado', '1/2 cup chopped cilantro', '1 Tablespoon lime juice', '1/2 cup plain low fat greek yogurt', '1/3 cup water', '1/2 tsp salt', '1/2 Tablespoon garlic', '1/2 Tablespoon cumin', '<b>Salad:</b>', '1 tbsp olive oil', '1 chicken breast, diced', '1/2 packet of taco seasoning', '1 head Romaine Lettuce, chopped', '1 cup shredded cheddar jack cheese', '1 cup black beans', '1 avocado, diced', '1 cup corn', '1 cup cherry tomatoes, halved', '1 cup tortilla strips'],
        cuisineType: 'Mexican'
    },
    {
        name: 'Slow Cooker Chiken Fajitas',
        src: 'bAOMH1AmLQM',
        ing: ['Not Listed :('],
        cuisineType: 'Mexican'
    },
    {
        name: 'Southwestern Turkey Burger',
        src: 'Aq6QqxQiUrA',
        ing: ['1 Small Onion, chopped finely', '1 lb. Ground Turkey', '1 lb. Lean Turkey Sausage, casing removed', '1 can black beans, drained and rinsed', '1 cup bell peppers, chopped', '1 jalapeno, deseeded and diced', '1 cup Panko bread crumbs', '2 Eggs', '¼ cup cilantro, chopped', '1 tbsp garlic powder', '1 tbsp cumin', '1 tsp paprika', '½ tsp chili powder', 'Salt + pepper, to taste'],
        cuisineType: 'Mexican'
    },
    {
        name: 'Vampire Taco',
        src: 'uDfmeeKuiPQ',
        ing: ['1 pound flank steak or skirt steak', '<br>', '<b>Marinade:</b>', '½ cup soy sauce', '4 cloves garlic, sliced', '¼ cup olive oil', '1 teaspoon salt', '½ teaspoon black pepper', '1 teaspoon cumin', '1 teaspoon oregano', '', '1 package corn tortillas', '3 cups shredded cheddar cheese', '<br>', '<b>Sauce:</b>', '⅔ cup mayo', '3 cloves garlic, finely minced', '2-3 chipotle peppers, finely chopped', '2 tablespoons lime juice', '½ teaspoon salt', '<br>', '<b>To Assemble:</b>', '1 cup guacamole', '1 cup pico de gallo', '½ cup cotija cheese or queso fresco ', '1 cup cilantro leaves (optional)'],
        cuisineType: 'Mexican'
    },
    //////////////////////////////////////DESSERT//////////////////////////////
     {
        name: 'Mini S’mores Pies',
        src: '0HXaRaxNHDg',
        ing: ['<b>Graham Cracker Crust:</b>','2 packets of graham crackers, finely crushed','1 stick unsalted butter, melted','⅓ cup granulated sugar','<br><b>Chocolate Filling:</b>','1 ¼ cup of heavy cream','4 tablespoons unsalted butter, cubed','⅓ cup granulated sugar','10.5oz / 300g dark chocolate (60% cocoa minimum) chopped','3 eggs, plus 2 yolks','20 large marshmallows ','Foil cupcake liners','Muffin or cupcake pan'],
        cuisineType: 'Dessert'
    },
     {
        name: 'No-Bake Peanut Butter Pie Jars',
        src: '1r9A9u1V6SQ',
        ing: ['1 cup powdered sugar', '8 ounces cream cheese, softened', '1 cup creamy peanut butter', '16 ounces whipped topping, divided', 'Graham crackers', 'Hard shell chocolate sauce', '<br>', '<b>optional toppings:</b>', 'crushed peanuts', 'rainbow sprinkles', 'mini chocolate chips', '<br>', '12 jam jars '],
        cuisineType: 'Dessert'
    },
    {
        name: 'Peanut Butter Lava Cake',
        src: '1SnCh32hEDI',
        ing: ['200g dark chocolate, chopped', '100g unsalted butter, chopped', '2 eggs', '2 egg yolks', '1/2 cup (110 gr ) caster (superfine) sugar', '1/4 cup (35 gr) plain (all- purpose) flour, sifted', 'peanut butter', 'Cocoa + Butter or cooking spray, for coating', 'Berries ( for decoration) '],
        cuisineType: 'Dessert'
    },
    {
        name: 'Smores Dip',
        src: 'hAWrC_XIi90',
        ing: ['Not Listed :( '],
        cuisineType: 'Dessert'
    },
    //////////////////////////////////////ASIAN//////////////////////////////
     {
        name: 'Asian Chicken Lettuce Wraps',
        src: 'gLib-c3_rUw',
        ing: ['None Listed :('],
        cuisineType: 'Asian'
    },
    //////////////////////////////////////Cajun//////////////////////////////
     {
        name: 'Easy Cajun Foil Pouch',
        src: 'HoPi1ybPetk',
        ing: ['None Listed :('],
        cuisineType: 'Cajun'
    },
    //////////////////////////////////////Greek//////////////////////////////
     {
        name: 'Greek Lemon Yogurt Chicken Skewers',
        src: 'VGYHDKaZFMQ',
        ing: ['None Listed :('],
        cuisineType: 'Greek'
    },
     {
        name: 'Mediterranean Greek Yogurt Chicken Salad',
        src: 'VGYHDKaZFMQ',
        ing: ['1 cup Greek yogurt', '3 cloves garlic', '1 cup fresh basil', '1 lemon, juiced', '1 cup artichoke hearts', 'Salt and pepper, to taste', '3 cups cooked chicken, diced or shredded', '1 cup sun dried tomatoes', '1 cup slivered almonds', '1/2 cup red onions, diced', '1 cup artichoke hearts, chopped', '1 tbsp dried oregano'],
        cuisineType: 'Greek'
    },
    //////////////////////////////////////OTHER//////////////////////////////
     {
        name: 'Cucumber, Tomato, and Avocado Salad',
        src: 'vUBpiP9aPtg',
        ing: ['- 1 English cucumber', '- 4 Roma tomatoes', '- 3 ripe avocados', '- 1/2 red onion', '- 1/4 cup cilantro', '- Juice of 1 lemon', '- salt and black pepper to taste', '- 2 Tbsp. extra virgin olive oil'],
        cuisineType: 'Other'
    }
    
];