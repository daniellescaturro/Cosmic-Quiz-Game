const questions = [

{
	Q: "This planet is has the largest group of moons at 31.",
	"Correct answer": "Saturn",
	A: "Neptune",
	B: "Mars",
	C: "Saturn",
	D: "Venus",
},


{
	Q: "This planet was named after a Greek god of the sea and earthquakes. The name is actually the Roman translation of the gods name.",
	"Correct answer": "Neptune",
	A: "Mercury",
	B: "Neptune",
	C: "Pluto",
	D: "Uranus"
},

{

	Q: "Miranda, Ariel, Umbriel, Titania, Oberon, Caliban, and Sycorax are names of the icy moons of this planet.",
	"Correct answer": "Uranus",
	A: "Uranus",
	B: "Jupiter",
	C: "Saturn",
	D: "Venus"
}

]

ansChoices = ["A", "B", "C", "D"]
answerKey = "Correct answer"

$(() => {
	
	const $noBtn = $('#noBtn')
	const $yesBtn = $('#yesBtn')
	const $startBtn = $('<button id="startBtn">"Start Game"</button>')


	$noBtn.on('click', () => {
		$('body').append("Ok, bye!")
	})

	
	$yesBtn.on('click', () => {
		$('#welcomeScreen').empty()
		
		let $h1 = $('<h1></h1>') 
		$h1.text("Let's get started!")
		$('body').append($h1)
		$('body').append($startBtn)
	})	
	
	let questionNum = 0
	let score = 0

	const displayQuestion = () => {
		let question = questions[questionNum]
		let $divQues = $(`<div class="question" id="question${questionNum}"></div>`)
			let $p = $('<p></p>')
			$p.text(question.Q)
			$divQues.append($p)

			for (let i = 0; i < ansChoices.length; i++) {
				let option = ansChoices[i]
				let $divChoices = $(`<div class="choices">${option} : ${question[option]} <input type="radio" value="${question[option]}"/></div>`)
				$divQues.append($divChoices)

			}

			$('body').append($divQues)
			$('input:radio').change(function(){
				if(this.value === question[answerKey]){
					console.log("Correct!")
					score++
					$(this).parent().append($('<img>', {src:'images/checkmark-png-5.png', width: 20}))

				}else{
					console.log("Incorrect!")
					$(this).parent().append($('<img>', {src:'images/136-1360029_no-tick-red-x.png', width: 20}))
					$(`input[value="${question[answerKey]}"]`).parent().append($('<img>', {src:'images/checkmark-png-5.png', width: 20}))
				}
				setTimeout(function(){
						questionNum++
						if(questionNum < questions.length){
							$('.question').remove()
							displayQuestion()
						}else{
							$('.question').remove()
							let $divScore = $('<div id="finalScore"></div')
							let $p = $('<p></p>')
							if(score > questions.length / 2) {
								$p.text('You achieved a score of ' + score + ' out of ' + questions.length + 'You won!')
								$divScore.append($p)
								$('body').append($divScore)
							} else {
								$p.text('You achieved a score of ' + score + ' out of ' + questions.length + 'You lost!')
								$divScore.append($p)
								$('body').append($divScore)
							}
							const $playAgainBtn = $('<button>Play Again</button>')
							$playAgainBtn.on('click', () =>{
								questionNum = 0
								score = 0
								$divScore.remove()
								displayQuestion(questionNum)
								$playAgainBtn.hide()

							})
							$('body').append($playAgainBtn)

						}
					}, 2000)
			})
	}

	$startBtn.on('click', () => {
		$('h1').hide()
		displayQuestion()
		$startBtn.hide()
				
	})
})






