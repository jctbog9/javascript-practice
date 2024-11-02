const zFighter1 = {
    name: 'Goku',
    age: 38,
    specialAttack: 'Kamehameha',
    familyMemberFirstNames: [
        'Goten',
        'Gohan',
        'Chichi'
    ]
}

const zFighter2 = {
    name: 'Vegeta',
    age: 43,
    specialAttack: 'Galick Gun',
    familyMemberFirstNames: [
        'Trunks',
        'Bulma',
        'Bulla'
    ]
}

console.log(`Vegeta uses ${zFighter2.specialAttack}`)
console.log(`Goku's first born son is ${zFighter1.familyMemberFirstNames[1]}`)

console.log(zFighter1.name === 'Goku')