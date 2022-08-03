/**Уникальные значения*/
const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

// set.add(10).add(20)
// console.log(set)
// console.log(set.has(30))
// console.log(set.size)
// console.log(set.delete(1))

/**
 * Ключи и значения в сете дублируются (совпадают)
 * */
// console.log(set.keys())
//
// for (let key of set){
//     console.log(key)
// }


function uniqValues(array) {
    return [...new Set(array)]
}
//Выводит ВСЕ значения из массива keys
// [...keys]
console.log(uniqValues([1,1,2,2,3,4,343224,22,231,23]))