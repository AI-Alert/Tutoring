const getUserGroups = () => {
    const userGroups = [
        {
            id: 1,
            name: 'Друзья',
            users: [
                { id: 1, name: 'Anna' },
                { id: 3, name: 'Bob' },
                { id: 4, name: 'V' },
            ],
        },
        {
            id: 2,
            name: 'Коллеги',
            users: [
                { id: 7, name: 'Alex' },
                { id: 10, name: 'Max' },
                { id: 11, name: 'X' },
                { id: 14, name: 'Steve' },
                { id: 77, name: 'Lisa' },
                { id: 78, name: 'Mike' },
                { id: 81, name: 'Sam' },
                { id: 89, name: 'John' },
            ],
        },
    ];

    return new Promise((resolve) => {
        setTimeout(() => resolve(userGroups), 300);
        console.log("Первая функция выполнена")
    });
};

const getNumberByUserId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(id ** 2), 300);
        console.log("Вторая функция выполнена")
    });
};

const getUsers = () =>{

    Promise.all([getUserGroups(), getNumberByUserId(2)]).then( () => {
        getUserGroups().then(
            (result) => {
                let res = result.map(({users}) => users).flat()
                res.map( (item, index) => {
                    item.secretKey = getNumberByUserId(item.id)
                    console.log(item)
                })

            })

    })

}

