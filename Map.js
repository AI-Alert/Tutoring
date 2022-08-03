const obj = {
    name: 'Veniamin',
    age: 21,
    gender: "Male",
    profession: "Backend developer"
}

const obj2 = [
    ['name', 'Veniamin'],
    ['age', 21],
    ['gender', "Male"],
    ['profession', "Backend developer"]
]

/**
* Представление объекта в виде массива
* */
// console.log(Object.entries(obj))


/**
 * Представление массива в виде объекта
 * */
// console.log(Object.fromEntries(obj2))

/**
 * Представление массива в виде карты
 * */
const map = new Map(obj2)

map
    .set('newField', 42)
    .set(obj, 'Value of object')

// console.log(map.get(obj))
// map.delete('newField')
// console.log(map.has('newField'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// for (let [key, value] of map.entries()){
//     console.log(key, value)
// }

// for (let val of map.values()){
//     console.log(val)
// }


// for (let key of map.keys()){
//     console.log(key)
// }
// map.forEach((val, key, m) => {
//     console.log(key, val)
// })

// //Создает массив из карты
// const array = [...map]
//
// const mapObj = Object.fromEntries(map.entries())
//
// //Массив
// console.log(array)
//
// //Объект
// console.log(mapObj)


const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))