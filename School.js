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
const ourSchool = { name: 'Best school', numberOfStudents: 135, level: 'primary' }
const firstSchool = new School(ourSchool)
// console.log(firstSchool)

// Наследование
// extend - расширить
class PrimarySchool extends School {
  constructor(props) {
    super(props)
    this._pickUpPolicy = props.pickUpPolicy
  }
}
const firstPrimarySchool = new PrimarySchool({
  name: 'first',
  numberOfStudents: 240,
  level: 'primary',
  pickUpPolicy: 'after 17:00',
})
console.log(firstPrimarySchool)
