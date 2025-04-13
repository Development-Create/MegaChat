//  console.log('Начало');
//  for(let i = 1; i<=3; i++) {

//     console.log(i);

//  }

//  console.log("Конец");


// console.log("Начало");

// setTimeout(() => {
//     console.log("Асинхронное действие");
// }, 2000);

// console.log("Конец");

// const promise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success){
//         resolve('Операция завршена успешно!');
//     }

//     else{
//         reject('Произошла ошибка!');
//     }

// });

// promise
//     .then((message) => {
//         console.log(message);

//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function fetchData() {
//     const users = [
//         {name: 'Zafar'},
//     ];
//     return new Promise ((resolve, reject) => {

//         setTimeout(() => {
//             if (users.length > 0) {
//                 resolve(users);
//             }
    
//             else{
//                 reject('Err')
//             }
//         }, 2000);

//     });
// }

// fetchData()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// АСИНХРОННАЯ ФУНКЦИЯ

async function fetchData() {
    let result = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Данные загружены');
        }, 2000);
    });

    console.log(result);
}

console.log('Запрос отправлен');
fetchData();
console.log('Ожидаем данные...');