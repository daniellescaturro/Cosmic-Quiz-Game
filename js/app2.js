let questions = [
{
Q: "These small bodies are considered left overs from the formation of the Solar system some 4.6 billion years ago.",
"correctAnswer": "Asteroids",
A: "Comets",
B: "Stars",
C: "Planets",
D: "Asteroids"
},

{
Q: "These are lumps of ice and dust.  When they get close enough to the Sun they gradually evaporate.  Jets of gas and dust create long tails that people can see from Earth.",
"correctAnswer": "Comets",
A: "Asteroids",
B: "Comets",
C: "UFOs",
D: "Stars"
},

{
Q: "This planet is slightly smaller than Earth and its closest neighbor (excluding the Moon).",
"correctAnswer": "Venus",
A: "Venus",
B: "Uranus",
C: "Mars",
D: "Saturn"
},

{
Q: "This planet is has the largest  group of moons - 31, but it is best known for its ring system.",
"correctAnswer": "Saturn",
A: "Neptune",
B: "Mars",
C: "Saturn",
D: "Venus"
},

{
Q: "This planet of the Solar System was named after a Greek god of the sea and earthquakes. The name is actually the Roman translation of the gods name.",
"correctAnswer": "Neptune",
A: "Mercury",
B: "Neptune",
C: "Pluto",
D: "Uranus"
},

{
Q: "As this is the closest planet to the Sun, its temperatures at the surface range between -300 and 800 F (hot enough for lead to melt).",
"correctAnswer": "Mercury",
A: "Neptune",
B: "Mercury",
C: "Pluto",
D: "Venus"
},

{
Q: "The surface of this planet is unique, it is the only one which has water in large quantities.",
"correctAnswer": "Earth",
A: "Saturn",
B: "Pluto",
C: "Earth",
D: "Mars"
},

{
Q: "Which Solar System celestial body's revolution around the Sun takes 248 years?",
"correctAnswer": "Pluto",
A: "Saturn",
B: "Pluto",
C: "Neptune",
D: "Uranus"
},

{
Q: "This is the largest planet in our solar system. It is most famous for its Great Red Spot.",
"correctAnswer": "Jupiter",
A: "Mars",
B: "Neptune",
C: "Saturn",
D: "Jupiter"
},

{
Q: "Miranda, Ariel, Umbriel, Titania, Oberon, Caliban, and Sycorax are names of the icy moons of this planet.",
"correctAnswer": "Uranus",
A: "Uranus",
B: "Jupiter",
C: "Saturn",
D: "Venus"
},

{
Q: "Which is the largest planet in the Solar System?",
"correctAnswer": "Jupiter",
A: "Mars",
B: "Saturn",
C: "Venus",
D: "Jupiter"
},

{
Q: "Which planet has been described as a sister planet to Earth?",
"correctAnswer": "Venus",
A: "Mercury",
B: "Saturn",
C: "Venus",
D: "Mars",
},

{
Q: "Which planet has been demoted from its planet status by scientists like Neil Tyson, Director of the Hayden Planetarium?",
"correctAnswer": "Pluto",
A: "Neptune",
B: "Pluto",
C: "Uranus",
D: "Mercury"
},

{
Q: "Which planet was named after the ancient Roman king of the gods?", 
"correctAnswer": "Jupiter",
A: "Mars",
B: "Jupiter",
C: "Neptune",
D: "Saturn"
},

{
Q: "Which planet of the Solar System has been nicknamed The Red Planet?",
"correctAnswer": "Mars",
A: "Mercury",
B: "Mars",
C: "Neptune",
D: "Venus"
},

{
Q: "Which planet was named after the Roman god of war?",
"correctAnswer": "Mars",
A: "Uranus",
B: "Mercury",
C: "Mars",
D: "Saturn"
},

{
Q: "Io and Europa are two of the larger satellites of which Solar System planet?",
"correctAnswer": "Jupiter",
A: "Pluto",
B: "Venus",
C: "Saturn",
D: "Jupiter"
},

{
Q: "Which planet of the Solar System is nicknamed the Blue Planet?",
"correctAnswer": "Earth",
A: "Earth",
B: "Neptune",
C: "Venus",
D: "Saturn"
},

{
Q: "Which of the following planets is closest to the Sun?",
"correctAnswer": "Mercury",
A: "Venus",
B: "Mars",
C: "Mercury",
D: "Earth"
},

{
Q: "What is the distinctive feature of the sixth planet of the Solar System (counted from the Sun)?",
"correctAnswer": "Its equatorial rings",
A: "Its gigantic craters",
B: "Its active volcanoes",
C: "Its equatorial rings",
D: "Its silver coloring"
},

{
Q: "Which of the following Solar System planets are designated as gas planets?",
"correctAnswer": "All of these",
A: "Saturn",
B: "All of these",
C: "Neptune",
D: "Jupiter and Neptune"
}

]

// const ansChoices = ["A", "B", "C", "D"]
// const answerKey = "correctAnswer"
// let randomQues = Math.floor(Math.random() * questions.length)
// let question = questions[randomQues]
// let score = 0
// let questionsAsked = 0
// let totalQuestions = 5



// const questionsCopy = [...questions]

// const evaluateAnswer = () => {	
// 	$('input:radio').change(function() { 
// 	if(this.value === question[answerKey]){
// 		score++
// 		$(this).parent().append($('<img>', {src:'images/green_checkmark.png', width: 20}))
// 	} else {
// 		$(this).parent().append($('<img>', {src:'images/red_x.png', width: 15}))
// 		$(`input[value="${question[answerKey]}"]`).parent().append($('<img>', {src:'images/green_checkmark.png', width: 20}))
// 		}
// 	})
// }
			

// $(() => {
	
// 	const $noBtn = $('#noBtn')
// 	const $yesBtn = $('#yesBtn')
// 	let $startBtn = $('<button class="buttons" id="startBtn">Start Game</button>')

// 	$noBtn.on('click', () => {
// 		$('body').append("Ok, bye!")
// 	})
// 	$yesBtn.on('click', () => {
// 		$('#welcomeScreen').empty()
// 		let $divStart = $('<div id="startScreen"></div>')
// 		let $divStartBtn = $('<div class="buttons" id="startBtn"></div>')
// 		let $h1 = $('<h1></h1>') 
// 		$h1.text("Let's get started!") 
// 		$('body').append($divStart)
// 		$divStart.append($h1)
// 		$divStart.append($startBtn) 
// 	})
// 	let $divQues = $(`<div class="question" id="question${randomQues}"></div>`)
// 	let $p = $('<p></p>')
// 	let $divChoices = $('<div class ="choices"></div>')


// 	$startBtn.on('click', () => {
// 		$('#startScreen').empty()
		
// 		const displayQuestion = () => {
// 			questions.splice(randomQues, 1)
// 			$('body').append($divQues)
// 		}		
// 		displayQuestion()
// 		displayAnsChoices()
// 	})	

// 	const displayAnsChoices = () => {
// 			$divQues.append($p)
// 			$p.text(question.Q)
// 			for (let i = 0; i < ansChoices.length; i++) {
// 				let option = ansChoices[i]
// 				$divChoices = $(`<div class="choices"><input type="radio" value="${question[option]}"/>${option}:  ${question[option]}</div>`)
// 				$divQues.append($divChoices)
// 			}	
// 			$('body').append($divQues)
// 			$divQues.append($divChoices)
// 			evaluateAnswer()
// 		}
// 	})

// //FROM HERE DOWN DOESN'T WORK
// 	setTimeout(function() {
// 		let questionsAsked = 0
// 		let totalQuestions = 5
// 		let $startBtn = $('<button class="buttons" id="startBtn">Start Game</button>') //THIS IS REPEATED FROM LINE 227
		
// 		questionsAsked++
// 		if(questionsAsked < totalQuestions) {
// 			$('.question').remove()
// 			//next two lines cld be own function, can call on if stmnt above
// 			displayQuestion() //THIS SHOWS ERROR MSG NOT DEFINED
// 		} else {
// 		//final score function
// 			$('.question').remove()
// 			let $divScore = $('<div id="finalScore"></div')
// 			let $p = $('<p></p>')
// 			if(score > totalQuestions / 2) {
// 				$p.text('You achieved a score of ' + score + ' out of ' + totalQuestions + '.  You won!')
// 				$divScore.append($p)
// 				$('body').append($divScore)
// 			} else {
// 				$p.text('You achieved a score of ' + score + ' out of ' + totalQuestions + '. You lost!')
// 				$divScore.append($p)
// 				$('body').append($divScore)
// 			}
// 		//play again can be it's own function	
// 			const $divPlayAgain = ('<div id="playAgain"></div>')
// 			const $playAgainBtn = $('<button class="buttons" id="playAgainBtn">Play Again</button>')
							
// 			$playAgainBtn.on('click', () =>{
// 				randomQues = 0
// 				score = 0
// 				questionsAsked = 0
// 				$divScore.remove()
// 				questions = [...questionsCopy]
// 				displayQuestion()
// 				$playAgainBtn.hide()
// 			})
// 			$('body').append($divPlayAgain)
// 			$('#playAgain').append($playAgainBtn)
// 		}
// 	}, 1500)
	

// 	let $startBtn = $('<button class="buttons" id="startBtn">Start Game</button>') //THIS IS REPEATED FROM LINE 227
	
// 	$startBtn.on('click', () => {
// 		$('h1').hide()
// 		displayQuestion()
// 		$startBtn.hide()
// 	})			

