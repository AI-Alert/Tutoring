const people = [
    { name: 'Name', age: 12, cash: 25000},
    { name: 'Misha', age: 32, cash: 21000},
    { name: 'Alex', age: 27, cash: 78000},
    { name: 'Leha', age: 19, cash: 23000},
    { name: 'Stephan', age: 49, cash: 32000},
    { name: 'King', age: 53, cash: 170000},
]

// For - цикл
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
//
// for (let person of people) {
//     console.log(person.name+' '+person.age+ ' ' +person.cash);
// }


//ForEach
/**
 * ForEach нужен для перебора массива и вывода определенных элементов
 * */

// people.forEach(function (person, index, pArr) {
//     console.log(person)
//     console.log(index)
//     console.log(pArr)
// })


// people.forEach(person => console.log(person))

/**
 * Map нужен для изменения значений массива, добавления новых элементов, манипуляция с данными элементов массива
 * */
//Map
// const newPeople = people.map(person => {
//     person.secretAge = person.age**2
//     newArr = [person.name, person.age, person.secretAge]
//     return newArr
// })
//
// console.log(newPeople)


//Filter
/**
* Filter нужен для передачи в новый массив элементов, подходящих по условию (Например, четные/нечетные)
 * */
// const adults = []
// for (let i =0; i<people.length; i++){
//     if (people[i].age % 2 === 0) {
//         adults.push(people[i])
//     }
// }
//
// console.log(adults)

// const adults = people.filter(person => {
//     if (person.age % 2 === 0 ){
//         return true
//     }
// })
// console.log(adults)



// Reduce

/**
 Reduce нужен для ввода новой переменной, которая будет производить манипуляции с данными входящего массива
 (Например, вычисление общей суммы зарплаты)
 */


// let amount = 0
// for ( let i=0; i<people.length; i++){
//     amount += people[i].cash
// }
// console.log(amount)



// const amount = people.reduce((total, person)=>{
//     return total + person.cash
// }, 0)
// console.log(amount)




//Find
/**
Find нужен, если мы хотим найти какой-то элемент из массива
 */


//     const oneName = people.find((person)=>{
//         return person.name === "Name"
//     })
//
// console.log(oneName)

//FindIndex
/**
 Find работает также, как и Find, но на выходе мы получаем индекс элемента массива
 */

// const oneIndex = people.findIndex((person)=>{
//     return person.name === "Name"
// })
//
// console.log(oneIndex)








const newPeople = people
    .filter(person => person.cash > 25000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            secretBudget: person.cash
        }
    })
    .reduce((totalBudget, person) =>  totalBudget + person.secretBudget , 0)

console.log(newPeople)

