//big trivia questions array
var trivia = [
{
	question: "Which element composes the majority of the Earth's atmosphere?",
	options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
	answer: "Nitrogen",
	gifimg: "http://31.media.tumblr.com/9d3e0ca4c6dad8c8eb51d9a812cef076/tumblr_mwoyhsU43B1rfuijjo4_r1_500.gif"
},
{
	question: "In the human body, the adrenal glands are located directly above what organ?",
	options: ["Heart", "Liver", "Kidneys", "Lungs"],
	answer: "Kidneys",
	gifimg: "https://static1.squarespace.com/static/54ef3ad4e4b021bc7efe93ae/t/54f0ec46e4b05f851fb6e27e/1425075323838/"
},
{
	question: "Who was the only president to later become Chief Justice of the U.S. Supreme Court?",
	options: ["Millard Fillmore", "Benjamin Harrison", "Zachary Taylor", "William Howard"],
	answer: "William Howard",
	gifimg: "https://media.giphy.com/media/GDjhB8vzRv74Q/giphy.gif"
},
{
	question: "Krakatoa is part of what country?",
	options: ["Sri Lanka", "Kuwait", "Afghanistan", "Indonesia"],
	answer: "Indonesia",
	gifimg: "http://bestanimations.com/Flags/Asia/indonesia/indonesian-flag-waving-gif-animation-5.gif"
},
{
	question: "On the periodic table, what element is represented by the letters NA?",
	options: ["Niacin", "Sodium", "Calcium", "Nickel"],
	answer: "Sodium",
	gifimg: "http://i.imgur.com/66r3UYR.gifs"
},
{
	question: "The mathematical expression (4 X 2) X 5 = 4 X (2 X 5) is an example of which property of multiplication?",
	options: ["Associative Property", "Commutative Property", "Transitive Property", "Distributive Property"],
	answer: "Associative Property",
	gifimg: "https://m.popkey.co/47f3f6/oGYbJ.gif"
},
{
	question: "What US State borders Kansas to the east",
	options: ["Missouri", "Colorado", "Nebraska", "Iowa"],
	answer: "Missouri",
	gifimg: "https://d1a6a9r46cnyll.cloudfront.net/829b64ab9872e3247b5b250b043b4d6507d51c39/687474703a2f2f693136352e70686f746f6275636b65742e636f6d2f616c62756d732f7535392f6d61696f72697a2f30355f53616d706c65416e696d6174696f6e4769662e676966"
},
{
	question: "In Greek mythology, what was the name of the titan who was given the responsibility of holding up the heavens on his shoulders?",
	options: ["Helios", "Atlas", "Prometheus", "Zeus"],
	answer: "Atlas",
	gifimg: "http://hyperallergic.com/wp-content/uploads/2014/09/greekvases-640.gif"
},
{
	question: "Plymouth Rock, the site where the Pilgrims landed in 1620, is located in what US state?",
	options: ["Virginia", "Massachusetts", "New Hampshire", "New York"],
	answer: "Massachusetts",
	gifimg: "https://67.media.tumblr.com/a66ef11e71856023dce4f65179799664/tumblr_nfmiv4Iv4n1s2wio8o1_500.gif"
},
{
	question: "What constellation contains the Big Dipper?",
	options: ["Canis Major", "Ursa Major", "Gemini", "Scorpius"],
	answer: "Ursa Major",
	gifimg: "https://m.popkey.co/dee3e0/Ep7Dm.gif"
}];

//randomize the order of the questions array
function randomOrder (theArray) {
	var newArr = [];
	for (i=0; i=theArray.length; i++){
		var indexTriv =(Math.floor(Math.random()*theArray.length));
		var removed = theArray.splice(indexTriv, 1);
		newArr.push(removed[0]);
	}
	// console.log(newArr);
	for(i=0;i< newArr.length; i++){
		theArray.push(newArr[i]);
	}
}

$(document).ready(function() {

	$("#start").click(function() {
		resetErryThang();
		$("#startbox").hide();
		$("#gamebox").show();
		newQuestion(questionCount);
	});

	$(".answer").on("click", function() {
		stopTime();
		var guess = $(this).text();
		var answer = $("#secretAnswer").text();
		$("#gamebox").hide();
		if (guess == answer){
			$("#correctBox").show();
			correctBox();
		}
		else {
			// alert("incorrect");
			$("#incorrectBox").show();
			incorrectBox();
		}
	});

	$("#reset").on("click", function(){
		stopTime();
		resetErryThang();
		//console.log(trivia);
		$("#endbox").hide();
		$("#gamebox").show();
		newQuestion(questionCount);
		//$("#startbox").show();
	});


	//this function will load each new question
	function newQuestion(arrIndex) {
		timer = setInterval(timerClock, 1000);
		$("#question").html(trivia[arrIndex].question);
		$("#opA").html(trivia[arrIndex].options[0]);
		$("#opB").html(trivia[arrIndex].options[1]);
		$("#opC").html(trivia[arrIndex].options[2]);
		$("#opD").html(trivia[arrIndex].options[3]);
		$("#secretAnswer").html(trivia[arrIndex].answer);
	}

	function correctBox(){
		$("#correctQ").html(trivia[questionCount].question);
		var imgurl=trivia[questionCount].gifimg;
		console.log(imgurl)
		$("#correctImg").html("<img src='"+imgurl+"'/>")
		$("#correctA").html(trivia[questionCount].answer);
		correct++;
		console.log("do you see it?");
		//var dothis = hideBox($("#correctBox"), $("#gamebox"));
		setTimeout(correctDo, 2000);
	}

	function correctDo(){
		$("#correctBox").hide();
		//questionBox.show();
		questionCount++;
		$("#gamebox").show();
		checkNext();
	}

	function incorrectBox(){
		$("#incorrectQ").html(trivia[questionCount].question);
		var imgurl=trivia[questionCount].gifimg;
		console.log(imgurl)
		$("#incorrectImg").html("<img src='"+imgurl+"'/>")
		$("#incorrectA").html("Correct answer: "+trivia[questionCount].answer);
		incorrect++;
		console.log("do you see it?");
		//var dothis = hideBox($("#correctBox"), $("#gamebox"));
		setTimeout(incorrectDo, 2000);
	}

	function incorrectDo(){
		$("#incorrectBox").hide();
		//questionBox.show();
		questionCount++;
		$("#gamebox").show();
		checkNext();
	}

	function checkNext() {
		if (questionCount < (trivia.length)) {
			stopTime();
			newQuestion(questionCount);
		}
		else {
			$("#gamebox").hide();
			$("#endbox").show();
			$("#correct").html("Correct Answers: "+correct);
			$("#incorrect").html("Incorrect Answers: "+incorrect);
		}
	}

	function timerClock(){
		timecount--;
		console.log("count");
		$("#timer").html(timecount);
		if (timecount <= 0){
			$("#gamebox").hide();
			$("#incorrectBox").show();
			stopTime();
			
			incorrectBox();
		}
	}

	function stopTime(){
		clearInterval(timer);
		$("#timer").empty();
		timecount = startTime;
	}

	function resetErryThang(){
		//questions go in random order :) for each game
		randomOrder(trivia);
		//the order of question answers is also randomized :) :) for each game
		for (ti=0;ti<trivia.length; ti++){
			randomOrder(trivia[ti].options);
		}
		correct = 0;
		incorrect = 0;
		questionCount=0;
		startTime = 11;
		timecount=startTime;
	}
});