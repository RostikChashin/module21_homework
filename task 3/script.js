'use strict'

const clearLS = document.querySelector('#clear')

clearLS.addEventListener('click', () => {
	alert('localStorage очищен')
	localStorage.clear()
})

let userName = localStorage.getItem('userName')

let date, userDate

if (userName) {
	alert(
		'Добрый день, ' +
			localStorage.getItem('userName') +
			'! Давно не виделись. В последний раз вы были у нас ' +
			localStorage.getItem('lastDate')
	)
	getNowDate()
} else {
	userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя')
	console.log(userName)
	if (userName) {
		localStorage.setItem('userName', userName)
		getNowDate()
	}
}

function getNowDate() {
	date = new Date()
	let day = String(date.getDate()).padStart(2, '0')
	let month = String(date.getMonth() + 1).padStart(2, '0')
	let year = date.getFullYear()
	let hours = String(date.getHours()).padStart(2, '0')
	let minutes = String(date.getMinutes()).padStart(2, '0')
	userDate = `${day}-${month}-${year} ${hours}:${minutes}`
	localStorage.setItem('lastDate', userDate)
}
