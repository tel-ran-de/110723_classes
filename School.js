// создаем класс с конструктором name, numberOfStudents, level
// называем переменные с нижним подчеркиванием _
// написать геттер и сеттер для name, numberofStudents
// props = properties - объект
class School {
  constructor(props) {
    this._name = props.name
    this._numberOfStudents = props.numberOfStudents
    this._level = props.level
  }
  // массив доступен только при обращении к самому классу
  static substituteTeachers = ['Alice', 'Bob', 'Charlie', 'David', 'Eleanor']

  static chooseTeacher() {
    const random = Math.floor(Math.random() * this.substituteTeachers.length - 1)
    return this.substituteTeachers[random]
  }

  get name() {
    return this._name
  }
  set name(newName) {
    this._name = newName
  }
  get numberOfStudents() {
    return this._numberOfStudents
  }

  set numberOfStudents(num) {
    this._numberOfStudents = num
  }
}
// console.log(School.substituteTeachers)
const ourSchool = { name: 'Best school', numberOfStudents: 135, level: 'primary' }
const firstSchool = new School(ourSchool) //
// console.log(School.substituteTeachers) // мой массив
//console.log(firstSchool.substituteTeachers) // undefined
// console.log(School.chooseTeacher())

School.prototype.city = 'Berlin'

School.prototype.giveInformation = function () {
  console.log(`In this school there are ${this._numberOfStudents} and it's called ${this._name}`)
}

console.log(firstSchool.city)
firstSchool.giveInformation()

// занесем в прототип переменную public = true
School.prototype.public = true
// занести в прототип функцию, кот увеличивает кол-во учеников на 1 addNewStudent
School.prototype.addNewStudent = function () {
  this._numberOfStudents += 1 // this._numberOfStudents++
}
// Наследование
// extend - расширить
class PrimarySchool extends School {
  constructor(props) {
    super(props)
    this._pickUpPolicy = props.pickUpPolicy
  }
}

const firstPrim = new PrimarySchool({
  name: 'first',
  numberOfStudents: 240,
  level: 'primary',
  pickUpPolicy: 'after 17:00',
})

class SpecialSchool extends PrimarySchool {
  constructor(props) {
    super(props)
  }
}

// проверят является ли у нас тип данных массивом
const arr = new Array([1]) // экземпляр класса
//console.log(arr.isArray('a')) // ошибка
// console.log(Array.isArray('a')) // все работает // Класс
console.log(Array.isArray([]))

// статические методы и свойства
// которые будут работать ТОЛЬКО На классе
// НЕ работают на экземпляре класса
