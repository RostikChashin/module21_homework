'use strict'

const myPromise = new Promise((resolve, reject) => {
	let start = Date.now()
	setTimeout(() => {
		let number = getRandomInt(1, 100)
		let timeLeft = Date.now() - start
		if (number % 2 === 0) {
			resolve({
				message: `Завершено успешно. Сгенерированное число — ${number}.`,
				timeLeft: `Прошло ${timeLeft} мс.`,
			})
		} else
			reject({
				message: `Завершено с ошибкой. Сгенерированное число — ${number}.`,
				timeLeft: `Прошло ${timeLeft} мс.`,
			})
	}, 3000)
})

myPromise
	.then(resolve => console.log(resolve.message, resolve.timeLeft))
	.catch(resolve => console.log(resolve.message, resolve.timeLeft))

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}
