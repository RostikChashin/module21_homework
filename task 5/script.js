'use strict'

const input = document.querySelector('#input')
const button = document.querySelector('#button')
const dataList = document.querySelector('.data-list')

button.addEventListener('click', () => {
	if (input.value && parseInt(input.value) >= 0) {
		fetch(`https://jsonplaceholder.typicode.com/users/${input.value}/todos`)
			.then(response => {
				return response.json()
			})
			.then(data => {
				if (data.length === 0) {
					console.log('Пользователь с указанным id не найден')
					alert('Пользователь с указанным id не найден')
				} else {
					renderData(data)
				}
			})
			.catch(error => {
				alert(`ошибка: ${error}`)
			})
	} else alert('не корректное id')
})

function renderData(array) {
	let listItem = document.querySelectorAll('.data-list__item')
	if (listItem.length) {
		listItem.forEach(element => {
			dataList.removeChild(element)
		})
	}

	for (let i = 0; i < array.length; i++) {
		if (array[i].completed) {
			let taskStatus = 'completed'
			dataList.insertAdjacentHTML(
				'beforeend',
				`<li class="data-list__item">
                    <div><span class="bold">UserID:</span> ${array[i].userId}</div>
                    <div><span class="bold">Task ID:</span> ${array[i].id}</div>
                    <div><span class="bold">Title:</span> <span  class=${taskStatus}>${array[i].title}</span></div>
                    <div><span class="bold">Completed:</span> ${array[i].completed}</div>
                </li>`
			)
		} else {
			let taskStatus = 'todo'
			dataList.insertAdjacentHTML(
				'beforeend',
				`<li class="data-list__item">
                    <div><span class="bold">UserID:</span> ${array[i].userId}</div>
                    <div><span class="bold">Task ID:</span> ${array[i].id}</div>
                    <div><span class="bold">Title:</span> <span  class=${taskStatus}>${array[i].title}</span></div>
                    <div><span class="bold">Completed:</span> ${array[i].completed}</div>
                </li>`
			)
		}
	}
}
