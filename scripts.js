let question_one = "Does your website clearly convey your company's USP(Unique Selling Proposition)?";
let question_two = "Do you have an opt-in form to capture email addresses?";
let question_three = "Are you giving away a valuable freebie in exchange for a visitors email address ?";
let question_four = "Do you have an Explainer on your home page ?";
let question_five = "Do you utilize separate landing pages for specific products and services?";
let question_six = "Do you send automated follow emails to build the relationships";
let question_seven = "Do you have a Youtube channel?";
let question_eight = "On Youtube channel do you create short but valuable 'Education Based videos to help your target market make a good buying decision ?";
let question_nine = "Are you a published author ? Meaning have you published a print book for credibility and authority in your marketplace?";
let question_ten = "Do you send out broadcast emails,text messages,Tweets and Facebook posts about special deals or events?";
let question_eleven = "Do you run limited time special promotions for customers only ? ";
let question_twelve= "Do you survey your customers to find out what they want most? ";
let question_thirteen = "Do you offer upsells and cross sells after a customer has made an initial purchase ? ";
let question_fourteen = "Do you issue press releases on a regular basis to introduce new products, services and other newsworthy topics?";
let question_fifteen = "Is your website mobile friendly and optimized ?";
let question_sixteen  = "Do you encourage good customers to leave online review on Yelp and Google?";
let question_seventeen = "Do you partner with other local, non-competing businesses to cross promote each other ?";
let question_eighteen = "Do you have your business listed in the Top 15 local Directories ?Ex., Have you claimed your Google local listing ? ";
let question_ninteen = "Have you tested Google and/or Facebook ads to attract customers ?";
let question_twenty  = "Do you market to former customers to bring them back ?";

//Next Task for Elham: Turn all the questions into an Object in the quiz array.
//Next Task for Wand-Yam: Write a calculateScore() function for the Get My Score button that scores how many YES and How many NO as a temporary score

let quizQuestions = [
{questionText: question_one, answer: false},
{questionText: question_two, answer: false},
{questionText: question_three, answer: false}
//last question
];

function startQuiz() {
	//remove the welcome message
	// show the progress bar and increase by the percentage of question completed
	document.getElementById("content").innerHTML = 
	`<div class="progress">
  	<div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
	 </div>`;
	 document.getElementById("content").innerHTML += `YES &nbsp; NO`
	
	for (let quizIndex = 0; quizIndex < quizQuestions.length; quizIndex++) {
		document.getElementById("content").innerHTML +=
		`
		<br>
		&nbsp;<input type="checkbox" aria-label="Checkbox for YES"> &nbsp; &nbsp; &nbsp; <input type="checkbox" aria-label="Checkbox for NO">
		&nbsp;&nbsp;&nbsp;`;

		document.getElementById("content").innerHTML += `${quizQuestions[quizIndex].questionText}<br>`;
	}
		document.getElementById("content").innerHTML += `<br><button type="button" class="btn btn-outline-info btn-lg">Get My Score</button>`;
		console.log("You've completed 50% of the quiz");
	// show the FIRST question with YES and NO checkboxes
	// after choosing YES or NO, take me to the NEXT question
}

function calculateScore(argument) {
	// body...
}
