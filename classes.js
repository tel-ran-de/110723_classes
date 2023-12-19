// все построенно на классах - глобальные объекты
Object
Promise
Array
String
Number

const arr = []
console.log(typeof arr)

// ООП объектно ориентированное програмирование

// процедурный подход - множество функций
Sum
SUM
sum
// мы выделяем в отдельный классность - сущность

Animal
// количество лап - 4 - number
// рост вес окрас
// шерсть

// дикие домашние
// выполняет команды
// ходит

// большое количество - 1000 пользователей

const user = { name: 'ivan', age: 30, userName: 'ivan23' }

// функция фабрика function factory - функция кот производит объекты

// называем функцию с большой буквы
// вызываем функцию со спец словом new
// функция конструктор создает множество объектов
// this - ссылка на объект перед точкой
// this - контекст выполнения
// без this функция не является конструктором
// свойства:  ключ - значение
// функции - метод

function Human1(name, surname, age) {
  this.name = name
  this.surname = surname
  this.age = age
}

const human1 = new Human1('peter', 'parker', 30) // создается объекта
console.log(human1)
console.log(human1.name) // peter потому что объект перед точкой human1
const human2 = new Human1('john', 'doe', 20) // во время вызова функции создается контекст
// значения в круглых скобках присваются значениям с this
console.log(human2.age) // 20 объект перед точкой human2

class Human {
  // отрабатывается при вызове класса со словом new
  constructor(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  happyBirthday() {
    this.age += 1
  }

  change_human_name(newName) {
    if (typeof newName === 'string' && newName !== '') {
      this.name = newName
    } else {
      throw new Error('Введите текст')
    }
  }
}

// переписывать классовые на функциональные
const hum1 = new Human('ivan', 'petrov', 30)
hum1.change_human_name('Klass')

hum1.happyBirthday()

// 1. создаем новый класс Product
// title, price, amount
// создать класс - конструктор
class Product {
  // большинство переменных только на чтение и пользователь не может их
  constructor(title, price, amount) {
    this._title = title // переменная становится приватной
    this._price = price
    this.amount = amount //  количество
  }
  // читает переменную / только на чтение // получаем значение и все
  get title() {
    return this._title
  }
  // изменяет текущую переменную
  // синтаксис как у обычного объекта
  set title(newName) {
    this._title = newName
  }
  // геттер для цены
  get price() {
    return this._price
  }
  // переписать функцию на сеттер
  set price(newPrice) {
    if (newPrice < 0 && typeof newPrice !== 'number') throw new Error('Введите число больше нуля')
    this._price = newPrice
  }

  sale() {
    console.log('befre: ', this.amount)
    if (this.amount <= 0) throw new Error('Товар закончился')
    this.amount -= 1 // this.amount = this.amount - 1

    console.log('after: ', this.amount)
  }
}

const xiaomi = new Product('phone', 100, 1)
console.log(xiaomi.title) // только на чтение
xiaomi.title = 'notebook' // сеттер - синтаксис обычного объекта экземпляр.сеттер = значение
xiaomi.price = 300
console.log(xiaomi)

xiaomi.change_price(200)
NaN // not a number
console.log(isNaN([1])) // false

// getter setter в классах
// приватные методы и свойства

// приватные свойства мы не можем изменять напрямую
// только на чтение и мы не можем их изменять
// # - позволяет определить приватные методы и свойства
// private - кот определяет приватные методы и свойства в typescript
