const parser = new DOMParser()

const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>;`

const xmlDOM = parser.parseFromString(xmlString, 'text/xml')

const studentNode = xmlDOM.querySelectorAll('student')
const nameAttribute = []
const firstName = []
const secondName = []
const ageNode = []
const profNode = []
const resultObject = { list: [] }

getAttr(nameAttribute, studentNode, 'name', 'lang')
getNode(firstName, studentNode, 'first')
getNode(secondName, studentNode, 'second')
getNode(ageNode, studentNode, 'age')
getNode(profNode, studentNode, 'prof')

for (let i = 0; i < studentNode.length; i++) {
	let obj = {}

	obj.name = `${firstName[i].textContent} ${secondName[i].textContent}`
	obj.age = parseInt(ageNode[i].textContent)
	obj.prof = profNode[i].textContent

	for (const key in nameAttribute[i]) {
		obj[key] = nameAttribute[i][key]
	}

	resultObject.list.push(obj)
}

function getNode(nodeName, array, selector) {
	array.forEach(element => {
		nodeName.push(element.querySelector(selector))
	})
}

function getAttr(nodeName, array, selector, attribut) {
	array.forEach(element => {
		let selectedNode = element.querySelector(selector)

		if (selectedNode.getAttribute(attribut)) {
			nodeName.push({ [attribut]: selectedNode.getAttribute(attribut) })
		}
	})
}

console.log(resultObject)
