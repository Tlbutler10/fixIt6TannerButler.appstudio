let pets =['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let petsCopy = pets.slice()   
//Option 1
//A
pets.splice(pets.indexOf("Vinny"),1)

console.log(pets)
//B
pets.splice(pets.indexOf("Marty"),1)
console.log(pets)
//C
pets.unshift('Nancy')
console.log(pets)
//D
pets.shift("Tanner")
console.log(pets)
//E
console.log(pets.indexOf("Riley"))
//F
console.log(pets.indexOf("Cindy"))
//G
var withMaraduke = petsCopy + ", Maraduke"
console.log(withMaraduke)

//Option 2
//A
let removed = pets.shift()
console.log(removed)
//B
pets.unshift('Barney')
console.log(pets)
//C
let allPets = petsCopy.concat('Ted','Fred','Jed','Ned','Ed','Zed')
console.log(allPets)
//D
console.log(allPets.shift())
//E
let pets1 = allPets.join(',')
console.log(pets1)
//F
allPets.unshift('Agnes')
console.log(allPets)
