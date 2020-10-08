
ansChoices = ["A", "B", "C", "D"]
answerKey = "correctAnswer"
let counter = 60 

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const questionsCopy = [...questions]
let totalQuestions = 10
let score = 0
let questionsAsked = 0


const displayQuestion = () => {
	const randomQues = Math.floor(Math.random() * questions.length)
	const question = questions[randomQues]
	questions.splice(randomQues, 1)
	const $divQues = $(`<div class="question" id="question${randomQues}"></div>`)
	let $p = $('<p></p>')
	$p.text(question.Q)
	$divQues.append($p)
	for (let i = 0; i < ansChoices.length; i++) {
		const option = ansChoices[i]
		let $divChoices = $('<div class ="choices"></div>')
		$divChoices = $(`<div class="choices"><input type="radio" value="${question[option]}"/>${option}:  ${question[option]}</div>`)
		$divQues.append($divChoices)
		$('body').append($divQues)
	} 
	evaluateQuestion(question)
}
//Timer
//if time is not up and not all questions have not been answered diplay timer
//if  all questions are answered before timer is up, show score and offer to play again
//if timer runs out before all questions are answered, then Times Up, show score and offer to play again 

//if jumping after move div to HTML, then add interval = null, and add that to setInterval funciton statement

//moved these fields to html
// let $divCounter = $('<div id="counter"></div>') // put div and p into HTML
	// let $p = $('<p id="count"></p>')
	//$('#count').text(counter)
	//$('body').append($divCounter) //then don't need this anymore
	//$divCounter.append($p) 

intervalTimer = null

function startTimer() {
	intervalTimer = setInterval(timerFunc, 1000)
}

function stopTimer() {
	clearInterval(intervalTimer)
}

function timerFunc() {
	counter--
	if(counter >= 0 && questionsAsked < totalQuestions){
		// console.log(counter)
		$('#count').text("Timer:  " + counter + " seconds")
	// } else if(counter >= 0 && questionsAsked === totalQuestions) {
	// 	// displayScore()
	// 	// startNewGame()
	} else if(counter <= 0 || questionsAsked < totalQuestions){
		$('#count').text("Times Up!")
		startNewGame()
		//stopTimer()
	}
}
	

const evaluateQuestion = (question) => {
	const $divChoices = $('.choices')
	$divChoices.on('click', () => {
	$('input:radio').change(function() { 
		if(this.value === question[answerKey]){
			score++
			$(this).parent().append($('<img>', {src:'images/green_checkmark.png', width: 20}))
		} else {
			$(this).parent().append($('<img>', {src:'images/red_x.png', width: 15}))
			$(`input[value="${question[answerKey]}"]`).parent().append($('<img>', {src:'images/green_checkmark.png', width: 20}))
			}
		})
		nextQuestion()	
	})
}

const nextQuestion = () => {
	setTimeout(function(){
		questionsAsked++
		if(questionsAsked < totalQuestions){
			$('.question').remove()
			displayQuestion()
		} else {
			//displayScore()
			startNewGame()		
		}
	}, 1500)
}

const displayScore = () => {
	$('.question').remove()
	const $divScore = $('<div id="finalScore"></div')
	let $p = $('<p></p>')
	if(score > totalQuestions / 2) {
		$p.text('You achieved a score of ' + score + ' out of ' + totalQuestions + '.  You won!')
		$divScore.append($p)
		$('body').append($divScore)
	} else {
		$p.text('You achieved a score of ' + score + ' out of ' + totalQuestions + '. You lost!')
		$divScore.append($p)
		$('body').append($divScore)
	}
}

const startNewGame = () => {
	stopTimer()
	$('.question').remove()
	displayScore()
	const $divScore = $("#finalScore")
	const $divPlayAgain = $('<div class="button_container" id="playAgain"></div>')
	const $playAgainBtn = $('<button class="buttons" id="playAgainBtn">Play Again</button>')
	$('body').append($divPlayAgain)
	$('#playAgain').append($playAgainBtn)
	
		
	$playAgainBtn.on('click', () =>{
		score = 0
		questionsAsked = 0
		questions = [...questionsCopy]
		counter = 60
		$divScore.remove() 
		$playAgainBtn.hide()
		$divPlayAgain.remove()
		displayQuestion()
		startTimer()
	})
}



$(() => {
	
	const $noBtn = $('#noBtn')
	const $yesBtn = $('#yesBtn')
	const $startBtn = $('<div class="button_container"><button class="buttons" id="startBtn">Start Game</button></div>')

	$noBtn.on('click', () => {
		$divBye = $('<div id="bye"></div>')
		$h3 = $('<h3>Ok bye!</h3>')
		$('body').append($divBye)
		$divBye.append($h3)
	})

	$yesBtn.on('click', () => {
		$('#welcomeScreen').empty()
		const $divStart = $('<div id="startScreen"></div>')
		const $divStartBtn = $('<div class="buttons" id="startBtn"></div>')
		let $h1 = $('<h1></h1>') 
		$h1.text("Let's get started!") 
		$('body').append($divStart)
		$divStart.append($h1)
		$divStart.append($startBtn) 
	})	

	$startBtn.on('click', () => {
		$('h1').hide()
		$('#startBtn').hide()
		displayQuestion()
		startTimer()
	})
})

