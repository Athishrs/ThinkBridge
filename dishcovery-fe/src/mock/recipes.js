export const MOCK_RECIPES = [
    {
        id: "moroccan-lentil",
        title: "Moroccan Lentil Stew with Butternut Squash",
        calories: 270,
        time: "20 mins",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        nutrition: `
Calories 270
Total Fat 1.0 g
Saturated Fat 0.0 g
...`,
        ingredients: `
1 teaspoon corn oil
1 medium onion, diced
2 garlic cloves
...`,
        steps: [
            {
                title: "Sauté the aromatics",
                instructions: [
                    "Heat olive oil in a large pot over medium heat.",
                    "Add chopped onion and cook 4–5 minutes until soft.",
                    "Stir in garlic and ginger; cook 1 minute until fragrant."
                ]
            },
            {
                title: "Bloom the spices",
                instructions: [
                    "Add tomato paste, cumin, coriander, paprika, turmeric, cinnamon, cayenne.",
                    "Stir 30–60 seconds to toast spices."
                ]
            },
            {
                title: "Add vegetables and lentils",
                instructions: [
                    "Add cubed butternut squash and rinsed lentils, stir to coat."
                ]
            },
            {
                title: "Add liquids and simmer",
                instructions: [
                    "Pour in canned tomatoes and broth.",
                    "Bring to a boil, reduce heat, simmer 25–30 minutes until tender."
                ]
            }
        ],

        durationSeconds: 5 * 60, // 5 minutes


    },



    // add the rest here
];
