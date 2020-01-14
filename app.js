// First Grab the button
document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
	// console.log('hardy harrr...')
	// Grab the number of jokes desired from the selector
	const number = document.querySelector('input[type="number"]').value
	// console.log(number)

	// Now that we have the number, we can prepare AJAX request
	const xhr = new XMLHttpRequest()

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)
	e.preventDefault()

	xhr.onload = function() {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText)

			let output = ''

			if (response.type === 'success') {
				response.value.forEach(function(joke) {
					output += `<li>${joke.joke}</li>`
				})
			} else {
				output += '<li>Something Went Wrong</li>'
			}
			// Place jokes into the UL
			document.querySelector('.jokes').innerHTML = output
		}
	}

	xhr.send()
}
