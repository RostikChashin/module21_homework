'use strict'

const jsonString = `{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}`

const obj = JSON.parse(jsonString)

const result = {
	name: obj.name,
	age: obj.age,
	skills: obj.skills,
	salary: obj.salary,
}
console.log('result', result)
