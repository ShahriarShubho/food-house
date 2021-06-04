import Category from '../models/category';
import Meal from '../models/meal';

// export const CATEGORIES = [
//   new Category('c1', 'Italian', '#f5428d'),
//   new Category('c2', 'Quick & Easy', '#f54242'),
//   new Category('c3', 'Hamburgers', '#f5a442'),
//   new Category('c4', 'German', '#f5d142'),
//   new Category('c5', 'Light & Lovely', '#368dff'),
//   new Category('c6', 'Exotic', '#41d95d'),
//   new Category('c7', 'Breakfast', '#9eecff'),
//   new Category('c8', 'Asian', '#b9ffb0'),
//   new Category('c9', 'French', '#ffc7ff'),
//   new Category('c10', 'Summer', '#47fced')
// ];

export const CATEGORIES = [
  new Category('c1', 'Beef', '#ffc7ff'),
  new Category('c2', 'Chicken', '#b9ffb0'),
  new Category('c3', 'Dessert', '#9eecff'),
  new Category('c4', 'Pork', '#f5d142'),
  new Category('c5', 'Seafood', '#ffc7ff'),
  new Category('c6', 'Starter', '#b9ffb0'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Vegetarian', '#f5d142'),
  new Category('c9', 'Goat', '#ffc7ff'),
  new Category('c10', 'Pasta', '#b9ffb0')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Beef and Mustard Pie',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
    20,
    [
      "1 kg Beef",
      "2 tbs Plain Flour",
      "2 tbs Rapeseed Oil",
      "200 ml Red Wine",
      "400 ml Beef Stock",
      "1 finely sliced Onion",
      "2 chopped Carrots",
      "3 sprigs Thyme",
      "2 tbs Mustard",
      "2 free-range Egg Yolks",
      "400 g Puff Pastry",
      "300 g Green Beans",
      "25 g Butter",
      "pinch Salt",
      "pinch Pepper"
    ],
    [
      "Preheat the oven to 150C / 300F / Gas.",
      "Toss the beef and flour together in a bowl with some salt and black pepper.",
      "Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.",
      "Fry until browned on each side, then remove and set aside.Repeat with the remaining oil and beef.",
      "Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.",
      "Cover with a lid and place in the oven for two hours.",
      "Remove from the oven, check the seasoning and set aside to cool.Remove the thyme.",
      "When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas",
      "Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top.Brush the top of the pastry with more beaten egg.",
      "Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden - brown and cooked through.",
      "For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4 - 5 minutes, or until just tender.",
      "Drain and toss with the butter, then season with black pepper.",
      "To serve, place a large spoonful of pie onto each plate with some green beans alongside."
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c1'],
    'Beef and Oyster pie',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
    20,
    [
      "900 g Beef",
      "3 tbs Olive Oil",
      "3 Shallots",
      "2 cloves minced Garlic",
      "125 g Baco",
      "1 tbs chopped Thyme",
      "2 Bay Leaf",
      "330 ml Stout",
      "400 ml Beef Stock",
      "2 tbs Corn Flour",
      "8 Oysters",
      "400 g Plain Flour",
      "pinch Salt",
      "250 g Butter",
      "To Glaze Eggs"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm3',
    ['c1'],
    'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg',
    20,
    [
      "White Rice",
      "1 Onion",
      "1 Lime",
      "3 Garlic Clove",
      "1 Cucumber",
      "3 oz Carrots",
      "1 lb Ground Beef",
      "2 oz Soy Sauce"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm4',
    ['c2'],
    'Ayam Percik',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
    20,
    [
      "6 Chicken Thighs",
      "16 Challots",
      "1 1/2 Ginger",
      "6 Garlic Clove",
      "8 Cayenne Pepper",
      "2 tbs Turmeric",
      "1 1/2 Cumin",
      "1 1/2 Coriander",
      "1 1/2 Fennel",
      "2 tbs Tamarind Paste",
      "1 can Coconut Milk",
      "1 tsp Sugar",
      "1 cup Water"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm5',
    ['c2'],
    'Brown Stew Chicken',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
    20,
    [
      "1 whole Chicken",
      "1 chopped Tomato",
      "2 chopped Onions",
      "2 chopped Garlic Clove",
      "1 chopped Red Pepper",
      "1 chopped Carrots",
      "1 Lime",
      "2 tsp Thyme",
      "1 tsp Allspice",
      "2 tbs Soy Sauce",
      "2 tsp Cornstarch",
      "2 cups Coconut Milk",
      "1 tbs Vegetable Oil"

    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm6',
    ['c2'],
    'Chick-Fil-A Sandwich',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
    20,
    [
      "1 Chicken Breast",
      "1/4 cup Pickle Juice",
      "1 Egg",
      "1/4 cup Milk",
      "1/2 cup Flour",
      "1 tbs Icing Sugar",
      "1/2 tsp Paprika",
      "1/2 tsp Salt",
      "1/4 tsp Black Pepper",
      "1/4 tsp Garlic Powder",
      "1/4 tsp Celery Salt",
      "1/2 tsp Cayenne Pepper",
      "1 cup Olive Oil",
      "1 Sesame Seed Burger Buns"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm7',
    ['c3'],
    'Apam balik',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg',
    20,
    [
      "200 ml Milk",
      "60 ml Oil",
      "2 Eggs",
      "1600 g Flour",
      "3 tsp Baking Powder",
      "1/2 tsp Salt",
      "25 g Unsalted Butter",
      "45 g Sugar",
      "3 tbs Peanut Butter"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm8',
    ['c3'],
    'Apple & Blackberry Crumble',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg',
    20,
    [
      "120 g Plain Flour",
      "60 g Caster Sugar",
      "60 g Butter",
      "300 g Braeburn Apples",
      "30 g Butter",
      "30 g Demerara Sugar",
      "120 g Blackberrys",
      "¼ teaspoon Cinnamon",
      "to serve Ice Cream"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm9',
    ['c3'],
    'Apple Frangipan Tart',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg',
    20,
    [
      "175 g/6 oz digestive biscuits",
      "75 g/3 oz butter",
      "200 g/7 oz Bramley apples",
      "75 g/3 oz butter, softened",
      "75 g/3 oz caster sugar",
      "2 free-range eggs, beaten",
      "75 g/3 oz ground almonds",
      "1 tsp almond extract",
      "50 g/1¾ oz flaked almonds"
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm10',
    ['c4'],
    'Bubble & Squeak',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c4'],
    'BBQ Pork Sloppy Joes',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm12',
    ['c4'],
    'Bigos (Hunters Stew)',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/md8w601593348504.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm13',
    ['c5'],
    'Baked salmon with fennel & tomatoes',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/1548772327.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    '14',
    ['c5'],
    'Cajun spiced fish tacos',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm15',
    ['c5'],
    'Escovitch Fish',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/1520084413.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm16',
    ['c6'],
    'Broccoli & Stilton soup',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm17',
    ['c6'],
    'Clam chowder',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/rvtvuw1511190488.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm18',
    ['c6'],
    'Cream Cheese Tart',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm19',
    ['c7'],
    'Breakfast Potatoes',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/1550441882.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm20',
    ['c7'],
    'English Breakfast',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm21',
    ['c7'],
    'Fruit and Cream Cheese Breakfast Pastries',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/1543774956.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm22',
    ['c8'],
    'Baingan Bharta',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm23',
    ['c8'],
    'Chickpea Fajitas',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm24',
    ['c8'],
    'Dal fry',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm25',
    ['c9'],
    'Mbuzi Choma (Roasted Goat)',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/cuio7s1555492979.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm26',
    ['c9'],
    'Chilli prawn linguine',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/usywpp1511189717.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm27',
    ['c9'],
    'Fettucine alfredo',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/uquqtu1511178042.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),
  new Meal(
    'm28',
    ['c10'],
    'Grilled Mac and Cheese Sandwich',
    'affordable',
    'simple',
    'https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  )
];