$(document).ready(function() {
	$("#gamebox").css("display", "none");
	$("#endbox").css("display", "none");
	correct = 0;
	incorrect = 0;
	questionCount=0; //this will count the trivia questions

    //big trivia questions array
	var trivia = [
	{
		"question": "Which element composes the majority of the Earth's atmosphere?",
		"A": "Oxygen",
		"B": "Nitrogen",
		"C": "Carbon",
		"D": "Hydrogen",
		"answer": "B. Nitrogen"
	},
	{
		"question": "In the human body, the adrenal glands are located directly above what organ?",
		"A": "Heart",
		"B": "Liver",
		"C": "Kidneys",
		"D": "Lungs",
		"answer": "C. Kidneys"
	},
	{
		"question": "Who was the only president to later become Chief Justice of the U.S. Supreme Court?",
		"A": "Millard Fillmore",
		"B": "Benjamin Harrison",
		"C": "Zachary Taylor",
		"D": "William Howard",
		"answer": "D. William Howard"
	},
	{
		"question": "Krakatoa is part of what country?",
		"A": "Sri Lanka",
		"B": "Kuwait",
		"C": "Afghanistan",
		"D": "Indonesia",
		"answer": "D. Indonesia"
	},
	{
		"question": "On the periodic table, what element is represented by the letters NA?",
		"A": "Niacin",
		"B": "Sodium",
		"C": "Calcium",
		"D": "Nickel",
		"answer": "B. Sodium"
	},
	{
		"question": "What constellation contains the Big Dipper?",
		"A": "Canis Major",
		"B": "Ursa Major",
		"C": "Gemini",
		"D": "Scorpius",
		"answer": "B. Ursa Major"
	}
	];
  
	//click start button to start the game
	//this transitions from startbox to gamebox
	$("#start").click(function() {
		$("#startbox").css("display", "none");
		$("#gamebox").css("display", "block");
		newQuestion(questionCount);
	});

//this function will load each new question
	function newQuestion(t) {
	//loads a question and possible answers
		var time=11;
		$("#question").html(trivia[t].question);
		$("#opA").html("<span>A. </span>"+trivia[t].A);
		$("#opB").html("<span>B. </span>"+trivia[t].B);
		$("#opC").html("<span>C. </span>"+trivia[t].C);
		$("#opD").html("<span>D. </span>"+trivia[t].D);
		$("#secretAnswer").html(trivia[t].answer);
		var counter=setInterval(countDown, 1000);

		function countDown() {
	  		time= time-1;
	  		if (time <= 0) {
	     		clearInterval(counter);
	     		incorrect= incorrect+1;
	     		questionCount++;

				if (questionCount === trivia.length) {
					$("#gamebox").css("display", "none");
					$("#endbox").css("display", "block");
					$("#correct").html("Questions Correct: "+ correct);
					$("#incorrect").html("Questions Incorrect: "+ incorrect);
				}else {
					newQuestion(questionCount);
				}
			}
	  		$("#timer").html(time);
		}
	}

	


	//function that checks the answer
	$(".answer").click(function checkAnswer(){
		console.log("clicked");
		var guess = $(this).text();
		var correctAnswer = $("#secretAnswer").text();
		console.log("Guess: "+guess);
		console.log("Correct answer: "+correctAnswer);
		if (guess == correctAnswer) {
			correct = correct + 1;    
			console.log("Correct: "+ correct);
			alert("Correct! The answer was "+correctAnswer);    
		}
		if (guess != correctAnswer) {
			incorrect= incorrect+1;   
			console.log("Incorrect: "+incorrect);
			alert("Sorry, you selected: "+guess+", but the answer was: "+correctAnswer);
		} 
		questionCount++;

		if (questionCount === trivia.length) {
			$("#gamebox").css("display", "none");
			$("#endbox").css("display", "block");
			$("#correct").html("Questions Correct: "+ correct);
			$("#incorrect").html("Questions Incorrect: "+ incorrect);
		}else {
			newQuestion(questionCount);
		}

	});

	$("#reset").click(function() {
		correct = 0;
		incorrect = 0;
		questionCount=0;
		$("#gamebox").css("display", "block");
		$("#endbox").css("display", "none");
		newQuestion(questionCount);
	});
});