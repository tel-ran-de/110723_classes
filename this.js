// this - это контекст выполнения
// где выполняется наш код
// в чем выполняется
console.log(this)
// контекст выполнения глобальный - WINDOW
// window.localStorage.getItem()

// Где выполняется код?
// какие методы могу использовать ?
console.log(this)

// Среда выполнения
// backend js - node

const btn = document.querySelector('#click')

btn.addEventListener('click', (event) => {
  // event.target = this
  console.log(event.target)
  console.log(this)
})

const obj = {
  firstName: 'Ivan',
  sayHi: function () {
    console.log(`my name is ${this.firstName}`)
  },
  context: function () {
    console.log(this)
  },
}
// this объект перед точкой
obj.context()
obj.sayHi()

class Sum {
  constructor(age) {
    this.age = age
  }
}
// в функции конструкторе
// this указывает на экземпляр функции - когда используется слово new
// в классе this указывает на экземпляр класса при создании с new
const newAge = new Sum(4) // newAge -
const anotherAge = new Sum(400)
console.log(newAge.age)
console.log(anotherAge.age)

// Глобальный область видимости
// вызывает на верхнем уровне документа
// контекст выполнения - глобальный
// node на беке
// window в браузере
function a() {
  console.log(this)
}
a()

// Стрелочные vs function declaration
multiply(4, 3)
const multiply = (arr) => arr.map().filter().sort()

console.log(multiply(4, 3))

multiply1(4, 3)

function multiply1(a, b) {
  console.log(arguments)
  return a * b
}

// 1. У стрелочной функции нет hoisting - не можем вызвать до ее объявления - ПОДНЯТИЕ
// 2. у обычной функции ДОЛЖЕН БЫТЬ return (если его нет, то она ничего не возращает)
// если одно действие, то мы можем опустить фигурные скобки
// нет фигурных скобок - можем убрать return
// 3. у стрелочной функции нет своего контекста выполнения - она его берет из вне
// в качестве колбек функции, если есть внешняя функция функция, то она берет контект внешний
// 4. Нету своего контекста - мы не можем их использовать в качестве функций конструкторов
// 5. У стрелочной функции нет своих arguments

function User(firstName) {
  this.firstName = firstName
}

const newUser = new User('peter')
console.log(newUser.firstName)

// 6. стрелочная не позволяет писать два одинаковых параметра - выдает ошибку
const sum1 = (a, a) => {
  return a + a
}

console.log(sum1(3, 4))

// bind, call, apply

const user1 = {
  firstName: 'Ivan',
  lastName: 'Petrov',
  information: function (city, age) {
    console.log(`hi, my name is ${this.firstName} ${this.lastName}.`)
  },
  sayHi: function (city, age) {
    console.log(
      `hi, my name is ${this.firstName} ${this.lastName}. I live in ${city}. I am ${age} years old`
    )
  },
  context: function () {
    console.log(this)
  },
}

const user2 = {
  firstName: 'John',
  lastName: 'Snow',
}
// user1.sayHi()
// call apply позволяют вызвать функцию(метод) с другим контекстом - данные другого объекта
// user1.sayHi.call(user2, 'Berlin', 40)

// user1.sayHi.apply(user2, ['New York', 34])

// bind - создает НОВУЮ функцию! которая вызывается с привязанным контекстом
const greeting = user1.information.bind(user2)
// без привязки к объекту
// работает как обвчная функция
// с привязанным контекстом
greeting()
greeting()
greeting()
// call параметры через запятую
// apply - в качестве массива
// используется в ООП

// destructing
const arr = [
  11,
  'hello',
  true,
  undefined,
  null,
  [0, 1, 2],
  { user: 'Ivan' },
  function sayHI() {
    console.log('hi')
  },
]
// деструктуризация - сокращенная запись
const [firstElement, , , , secondElement, ...rest] = arr
// const firstElement = arr[0]
// const secondElement = arr[5]
// const thirdElement = arr[6]

console.log(firstElement)
console.log(secondElement)
console.log(rest)

const obj1 = {
  theme: 'destructuring',
  numberOfStudents: 17,
  day: 'Tuesday',
}

// получить переменную по ключу

// порядок не измеет значения
const { day, numberOfStudents } = obj1 // const day = obj1.day
console.log(day)
console.log(numberOfStudents)

// spread ...
// позволяет копировать массив - делает поверхностную копию
const arr1 = [
  11,
  'hello',
  true,
  undefined,
  null,
  [0, 1, 2],
  { user: 'Ivan' },
  function sayHI() {
    console.log('hi')
  },
]
// 1. копию массива и можем изменять копию не влияя на исходный массив
const anotherArray = [...arr1]
// 2. Добавлять свойства в массив
const modifiedArray = [...arr1, 'next property']
// spread работает для объектов
// spread не только для копирования
// и не только для двух массивов
copiedArray[0] = 'changed'
console.log(arr1)
console.log(copiedArray)

// Глубокое копирование
const ca = JSON.parse(JSON.stringify(arr1))

const items1 = ['Apples', 'Bananas', 'Oranges', 'Grapes']
const items2 = ['apricot', 'grape', 'avocado', 'kiwi']
// 3. склеить два массива
const mergedItems = [...items1, ...items2] // items1.concat(items2)

// 4. использовать спред чтобы передать параметры массива,
//  если нужны параметры через запятую а у нас массив
function sum3(a, b, c) {
  return a + b + c
}

const aar = [1, 2, 3]
console.log(sum3(...aar))

// 5. Чтобы из строки сделать массив букв
const str = 'Harry'
const arrayFromStr = [...str]
console.log(arrayFromStr)

// spread объекты

const obj12 = {
  theme: 'destructuring',
  numberOfStudents: 17,
  day: 'Tuesday',
}

const obj13 = {
  group: '1107',
}
// поверхностная копия объекта
const copiedObj = { ...obj12 }

//добавлять свойства в объект
const modifiedObj = { ...obj12, school: 'Telran' }
console.log(modifiedObj)

// склеить два объекта
const mergedObj = { ...obj12, ...obj13 }
console.log(mergedObj)
