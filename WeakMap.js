//Позволяет избежать утечки данных

let obj = {name: 'weakmap'}

// const arr = [obj]
//
// obj = null
//
// console.log(obj)
// console.log(arr)
// В WeakMap ТОЛЬКО объекты
// const map = new WeakMap([
//     [obj, 'obj data']
// ])
//
// obj = null
//
// console.log(map.has(obj))

const cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)){
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let lena = {name: "Lena"}
let alex = {name: "Alex"}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena))
console.log(cache.has(alex))