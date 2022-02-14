let spaceships = ["Colossus", "Ártemis", "Fênix"]
console.log(spaceships)
console.log(...spaceships)

// Operador spread são os 3 pontos ...

// com operador spread
let newSpaceships = [...spaceships, "Puller"]
console.log(newSpaceships)

// sem operador spread
newSpaceships = [spaceships, "Puller"]
console.log(newSpaceships)

function speedUp(velocity, acceeration) {
    return velocity + acceeration
}

let spaceshipAceeleration = [60, 10]
let newVelocity = speedUp(...spaceshipAceeleration)// o operador spread pega os valores da variável.
console.log(newVelocity)