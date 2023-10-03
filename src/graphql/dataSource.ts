export const DataSource = {
  appetizers: [
    {
      id: '1',
      item: {
        name: 'Iceberg Wedge Salad with House Cured Bacon',
        description: 'tomato salsa gorgonzola',
        price: 7.5,
      },
    },
    {
      id: '2',
      item: {
        name: 'Sautéed Shredded Brussels Sprouts',
        description: 'bacon hazelnuts gorgonzola',
        price: 6.95,
      },
    },
    {
      id: '3',
      item: {
        name: 'Kale Salad',
        description: 'parmesan crisp corn radish garlic-lemon vinaigrette',
        price: 7.5,
      },
    },
    {
      id: '4',
      item: {
        name: 'Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto',
        description: 'grilled tomato salsa crostini',
        price: 6.95,
      },
    },
    {
      id: '5',
      item: {
        name: 'Chicken and Cabbage Egg rolls hot & sour dipping sauce',
        description: null,
        price: 6.95,
      },
    },
  ],
  entrees: [
    {
      id: '1',
      item: {
        name: 'Farfalle Pasta with Braised Pork in Tomato Cream',
        description: 'capers butternut squash kale',
        price: 12.95,
      },
    },
    {
      id: '2',
      item: {
        name: 'Stout Braised Bratwurst',
        description:
          'horseradish mashed potatoes roasted root veggies grilled onion',
        price: 13.95,
      },
    },
    {
      id: '3',
      item: {
        name: 'Salmon & Crispy Tofu in Yellow Curry Sauce',
        description: 'vegetable sauté golden raisin chutney',
        price: 15.95,
      },
    },
    {
      id: '4',
      item: {
        name: 'Sesame Shrimp',
        description:
          'udon noodles ramen broth shiitake mushrooms bean sprouts scallions',
        price: 13.95,
      },
    },
  ],
  sandwiches: [
    {
      id: '1',
      name: 'Turkey & Avocado',
      description: 'with tomato',
      type: 'COLD',
      breadChoices: ['Sourdough', 'Whole Wheat', 'Rye Bread'],
      price: {
        half: 7.95,
        full: 9.25,
      },
    },
    {
      id: '2',
      name: 'Pub Club',
      description: 'turkey, bacon. lettuce, tomato',
      type: 'COLD',
      breadChoices: ['Sourdough', 'Whole Wheat', 'Rye Bread'],
      price: {
        half: 7.95,
        full: 9.25,
      },
    },
    {
      id: '3',
      name: 'Rare Roast Beef & Swiss',
      description: 'sweet-hot mustard, lettuce, red onion',
      type: 'COLD',
      breadChoices: ['Sourdough', 'Whole Wheat', 'Rye Bread'],
      price: {
        half: 7.95,
        full: 9.25,
      },
    },
    {
      id: '4',
      name: 'Veggie',
      description: 'pepper jack, avocado, sprout, tomato',
      type: 'COLD',
      breadChoices: ['Sourdough', 'Whole Wheat', 'Rye Bread'],
      price: {
        half: 7.95,
        full: 9.25,
      },
    },
    {
      id: '5',
      name: 'Southwest Chicken Breast Grilled',
      description: 'Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.5,
      },
    },
    {
      id: '6',
      name: 'Portobello Fresh Mozzarella Caramelized',
      description: 'Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.5,
      },
    },
    {
      id: '7',
      name: 'Chipotle BBQ Pork Sandwich with Pickled Jalapeño Slaw',
      description: null,
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.5,
      },
    },
    {
      id: '8',
      name: 'Bacon Burger',
      description: 'Swiss, Lettuce, Tomato',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.25,
      },
    },
    {
      id: '9',
      name: 'Mexi Burger',
      description: 'Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.25,
      },
    },
    {
      id: '10',
      name: 'Herb Marinated Top Sirloin',
      description:
        'Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 10.95,
      },
    },
    {
      id: '11',
      name: 'Roast Beef with Ancho Au Jus Jack',
      description: 'Cheese, Grilled Onions, Served on Crumb Bros. Baguette',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.75,
      },
    },
    {
      id: '12',
      name: 'Blackened Catfish',
      description:
        'Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough',
      type: 'HOT',
      breadChoices: ['Whole Wheat', 'Cheese and onion Bun'],
      price: {
        full: 9.75,
      },
    },
  ],
  soupSaladCombos: [
    {
      id: '1',
      name: 'Soup Combo',
      soupVariants: ['French Onion Soup', 'Soup of the Day'],
      saladVariants: [],
      price: 4.95,
    },
    {
      id: '2',
      name: 'Soup and Salad Combo 1',
      soupVariants: ['French Onion Soup', 'Soup of the Day'],
      saladVariants: ['Small Green Salad', 'Fresh Fruit', 'House Pasta'],
      price: 7.25,
    },
    {
      id: '3',
      name: 'Soup and Salad Combo 2',
      soupVariants: ['French Onion Soup', 'Soup of the Day'],
      saladVariants: ['Half Pasta of the Day'],
      price: 8.75,
    },
  ],
  fajitas: [
    {
      id: '1',
      description:
        'Served with red rice, black beans, grilled tomato salad, choice of corn or flour tortillas',
      price: 10.95,
      ingredients: [
        'Chicken Onions',
        'Poblano and Bell Peppers',
        'Guacamole',
        'Two Salsas Sirloin Steak',
        'Onions',
        'Carrots',
        'Onion',
      ],
    },
  ],
  tacos: [
    {
      id: '1',
      description:
        'Served with red rice, black beans, corn & romaine salad, tortilla chips',
      price: 9.95,
      ingredients: [
        'Beer Battered Fish with Jalapeño Remoulade',
        'Roasted Salsa',
        'Cabbage Carne Asada (marinated sirloin) with Guacamole',
        'Tomatillo Salsa Citrus Marinated Chicken with Guacamole',
        'Tomatillo Salsa Grilled Veggie with Zucchini',
        'Yellow Squash',
        'Bell Peppers',
        'Onion',
        'Guacamole',
        'Tomatillo Salsa',
      ],
    },
  ],
  enchiladas: [
    {
      id: '1',
      description:
        'with Southwestern Succotash, Black Beans with Chipotle Cream Choice of Beef, Chicken, Cheese or Veggie',
      price: {
        uno: 8.5,
        dos: 9.95,
        tres: 11.5,
      },
    },
    {
      id: '2',
      description:
        'Chili Relleno Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce',
      price: {
        uno: 9.95,
      },
    },
    {
      id: '3',
      description:
        'Pepita Crusted Salmon with Chipotle Glaze - chevre whipped yams, jicama slaw, tomatillo sauce',
      price: {
        uno: 10.95,
      },
    },
  ],
  quiches: [
    {
      id: '1',
      ingredients: ['Bacon', 'Swiss', 'Mushroom', 'Zucchini', 'Mushroom'],
      choices: ['Fresh Fruit', 'Green Salad'],
      price: 8.95,
    },
  ],
  greenSalads: [
    {
      id: '1',
      ingredients: [
        'Grilled Red Trout Lentils',
        'Tomatoes',
        'Cukes',
        'Green Beans',
        'Red Bells',
        'Almonds',
        'Sundried Tomato Vinaigrette',
      ],
      price: 10.95,
    },
    {
      id: '2',
      ingredients: [
        'Smoked Turkey Cheese Tortellini',
        'Bacon',
        'Tomato',
        'Cucumber',
        'Egg',
        'Black Bean-Corn Salsa',
        'Avocado',
      ],
      price: 9.95,
    },
    {
      id: '3',
      ingredients: [
        'Asian Grilled Chicken Snow Peas',
        'Carrot Slaw',
        'Red Bells',
        'Water Chestnut',
        'Peanuts',
        'Baby Corn',
        'Cilantro',
        'Cukes',
        'Spicy Peanut Dressing',
      ],
      price: 10.5,
    },
    {
      id: '4',
      ingredients: [
        'Southwest Grilled Chicken Tomato',
        'Guacamole',
        'pepitas',
        'Jicama',
        'Corn & Black Bean Salsa',
        'Orange Wedges',
        'Spicy Citrus Vinaigrette',
      ],
      price: 10.5,
    },
    {
      id: '5',
      ingredients: [
        'Mediterranean Italian Sausage',
        'Artichoke Hearts',
        'Green Beans',
        'Roma Tomato',
        'Kalamatas',
        'Red Onion',
        'Cucumber',
        'Croutons',
        'Parmesan',
        'Fresh Mozzarella',
        'Gorgonzola Vinaigrette',
      ],
      price: 9.95,
    },
    {
      id: '6',
      ingredients: [
        'Grilled Salmon Artichoke tapenade',
        'shredded kale',
        'corn',
        'radish',
        'parmesan crisps',
      ],
      price: 11.5,
    },
  ],
};
