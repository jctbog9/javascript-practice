const pokemonPlayer = {
    id: 1,
    name: 'Red',
    pokemon: [
        {
            id: 1,
            name: 'Charizard',
            type: 'Fire',
            level: 49,
            attacks: [
                {
                    name: 'Fire Blast',
                    type: 'Fire',
                    power: 110,
                    accuracy: 85,
                    pp: 5
                },
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    power: 90,
                    accuracy: 100,
                    pp: 15
                },
                {
                    name: 'Sky Uppercut',
                    type: 'Flying',
                    power: 85,
                    accuracy: 90,
                    pp: 15
                },
                {
                    name: 'Seismic Toss',
                    type: 'Fighting',
                    power: 0,
                    accuracy: 100,
                    pp: 5
                }
            ]
        },
        {
            id: 2,
            name: 'Squirtle',
            type: 'Water',
            level: 15,
            attacks: [
                {
                    name: 'Water Gun',
                    type: 'Water',
                    power: 40,
                    accuracy: 100,
                    pp: 25
                },
                {
                    name: 'Rapid Spin',
                    type: 'Normal',
                    power: 50,
                    accuracy: 100,
                    pp: 40
                }
            ]
        }
    ]
}

// Pokemon Player's Name
console.log( === 'Red')

// Pokemon Player's ID
console.log( === 1)

// How many pokemon does the pokemonPlayer have in total? (hint: length of his pokemon list)
console.log( === 2)

// How many attacks does Squirtle know?
console.log( === 2)

// How many attacks does Charizard know?
console.log( === 4)

// What Level is Charizard?
console.log( === 49)

// What Level is Squirtle?
console.log( === 15)

// What type is Charizard?
console.log( === "Fire")

// What type is Squirtle?
console.log( === "Water")

// What is the power of Charizard's 2nd attack?
console.log( === 90)

// What is the PP of Charizard's 2nd attack?
console.log( === 15)

// What is the PP of Charizard's 3rd attack?
console.log( === 15)

// What is the PP of Charizard's 4th attack?
console.log( === 5)

// What is the name of Charizard's 4th attack?
console.log( === "Seismic Toss")

// What type is Squirtle's first attack?
console.log( === "Water")

// What type is Squirtle's second attack?
console.log( === "Normal")



// BONUS QUESTIONS

// How many "Fire" type attacks does Charizard know? 
// (hint: loop through the list of attacks and use the javascript .filter method 
// to only get the fire type attacks)

// How many "Water" attacks does Squirtle know?

// How many pokemon does the pokemonPlayer have?

// How many pokemon in pokemonPlayer's party have the "Flying" type?