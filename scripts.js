let question_one = "Does your website clearly convey your company's USP(Unique Selling Proposition)?";
let question_two = "Do you have an opt-in form to capture email addresses?";
let question_three = "Are you giving away a valuable freebie in exchange for a visitor's email address?";
let question_four = "Do you have an Explainer Video on your home page?";
let question_five = "Do you utilize separate landing pages for specific products and services?";
let question_six = "Do you send automated follow up emails to build the relationships?";
let question_seven = "Do you have a Youtube channel?";
let question_eight = "On Youtube channel, do you create short but valuable 'Education Based' videos to help your target market make a good buying decision?";
let question_nine = "Are you a published author? Meaning have you published a print book for credibility and authority in your marketplace?";
let question_ten = "Do you send out broadcast emails, text messages, Tweets and Facebook posts about special deals or events?";
let question_eleven = "Do you run limited time special promotions for customers only? ";
let question_twelve= "Do you survey your customers to find out what they want most? ";
let question_thirteen = "Do you offer upsells and cross sells after a customer has made an initial purchase? ";
let question_fourteen = "Do you issue press releases on a regular basis to introduce new products, services and other newsworthy topics?";
let question_fifteen = "Is your website mobile-friendly and optimized?";
let question_sixteen  = "Do you encourage good customers to leave online review on Yelp and Google?";
let question_seventeen = "Do you partner with other local, non-competing businesses to cross promote each other?";
let question_eighteen = "Do you have your business listed in the Top 15 local Directories? Ex., Have you claimed your Google local listing? ";
let question_ninteen = "Have you tested Google and/or Facebook ads to attract customers?";
let question_twenty  = "Do you market to former customers to bring them back?";

let quizQuestions = [
{questionText: question_one, answer: false, task: "Create USP for your website"},
{questionText: question_two, answer: false, task: "Create an opt-in form to capture email addresses" },
{questionText: question_three, answer: false, task: "Create a valuable freebie and give it way" },
{questionText: question_four, answer: false, task: " "},
{questionText: question_five, answer: false, task: " "},
{questionText: question_six, answer: false, task: " "},
{questionText: question_seven, answer: false, task: " "},
{questionText: question_eight, answer: false, task: " "},
{questionText: question_nine, answer: false, task: " "},
{questionText: question_ten, answer: false, task: " "},
{questionText: question_eleven, answer: false, task: " "},
{questionText: question_twelve, answer: false, task: " "},
{questionText: question_thirteen, answer: false, task: " "},
{questionText: question_fourteen, answer: false, task: " "},
{questionText: question_fifteen, answer: false, task: " "},
{questionText: question_sixteen, answer: false, task: " "},
{questionText: question_seventeen, answer: false, task: " "},
{questionText: question_eighteen, answer: false, task: " "},
{questionText: question_ninteen, answer: false, task: " "},
{questionText: question_twenty, answer: false, task: " "} //last question
];

function startQuiz() {
	//remove the welcome message
	// show the progress bar and increase by the percentage of question completed
	document.getElementById("content").innerHTML = 
	`<div class="progress">
  	<div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
	 </div>`;
	 document.getElementById("content").innerHTML += `<br><strong>YES &nbsp;&nbsp;&nbsp; NO</strong>`
	 document.getElementById("content").innerHTML +=
	 `
	 <form name="quizForm" id="quizForm" class="form-check text-left text-nowrap">
	 </form>
	 `
	for (let quizIndex = 0; quizIndex < quizQuestions.length; quizIndex++) {
		document.getElementById("quizForm").innerHTML +=
		`
		<br>
		&nbsp;
		<input type="radio" name="quizQuestion${quizIndex}" value="1" aria-label="Checkbox for YES" class="form-check-input" required>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
		<input type="radio" name="quizQuestion${quizIndex}" value="0" aria-label="Checkbox for NO" class="form-check-input" required>
		&nbsp;&nbsp;&nbsp;`

		document.getElementById("quizForm").innerHTML += `${quizQuestions[quizIndex].questionText}<br>`;

	}
		document.getElementById("content").innerHTML += `<br><button type="button" class="btn btn-outline-info btn-lg" onclick="calculateScore()">Get My Score</button>`;
		console.log("You've completed 50% of the quiz");
}

function calculateScore() {
	let yesScore = 0;
	for (let quizIndex = 0; quizIndex < quizQuestions.length; quizIndex++) {
		let quizValue = quizForm['quizQuestion'+quizIndex].value;
 		if(quizValue === "1"){
 			yesScore++;
 			let question_obj = quizQuestions[quizIndex];
 			question_obj.answer = true;
 		} else {
 			let question_obj = quizQuestions[quizIndex]
 			let task_array = [];
 			task_array.push(question_obj.task);
 			addTaskToNotePad(task_array);
 		}
 	}
} 

function addTaskToNotePad(task_array) {
	for (taskIndex = 0; taskIndex < task_array.length; taskIndex++) {
		console.log(task_array[taskIndex]);
		//display task on notepad
	}
}

//add link to edit task
//add link (or button) to delete task
//pro: add link (or button) to mark task as done
//add a form that allow you to create new task