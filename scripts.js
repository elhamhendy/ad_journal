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
{questionText: question_four, answer: false, task: "Create an explainer video on your home page"},
{questionText: question_five, answer: false, task: "Create separate landing page for each product and service"},
{questionText: question_six, answer: false, task: "Send an automated follow-up emails to build relationships"},
{questionText: question_seven, answer: false, task: "Create a YouTube channel"},
{questionText: question_eight, answer: false, task: "Create short, but valuable 'Education Based' videos to help your target market make a good buyingd decision"},
{questionText: question_nine, answer: false, task: "Publish a print or eBook to build credibility and authority in your marketplace"},
{questionText: question_ten, answer: false, task: "Send broadcast emails, text messages, tweets and Facebook posts about special deals and events"},
{questionText: question_eleven, answer: false, task: "Run limited time special promotions for customers only"},
{questionText: question_twelve, answer: false, task: "Survey customers to find out what they want most"},
{questionText: question_thirteen, answer: false, task: "Offer upsells and cross-sells after a customer has made an initial purchase"},
{questionText: question_fourteen, answer: false, task: "Issue press releases on a regular bases to introduce new products, services and other newsworthy topics"},
{questionText: question_fifteen, answer: false, task: "Make your website mobile-friendly and optimized"},
{questionText: question_sixteen, answer: false, task: "Encourage good customers to leave online reviews on Google and Yelp"},
{questionText: question_seventeen, answer: false, task: "Partner with other local, non-competing businesses to cross-promote each otehr"},
{questionText: question_eighteen, answer: false, task: "List your business in the Top 15 local directories and claim your Google Local listing"},
{questionText: question_ninteen, answer: false, task: "Test Google and/or Facebook Ads for attracting customers"},
{questionText: question_twenty, answer: false, task: "Market to former customers to bring them back"} //last question
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
	let all_tasks = [];
	for (let quizIndex = 0; quizIndex < quizQuestions.length; quizIndex++) {
		let quizValue = quizForm['quizQuestion'+quizIndex].value;
 		//console.log(quizQuestions[quizIndex],quizQuestions[quizIndex].answer)
 		if(quizValue === "1"){
 			yesScore++;
 			quizQuestions[quizIndex].answer = true;
 		} else {
 			all_tasks.push(quizQuestions[quizIndex].task);
 		}
 	}
 	displayScoreAndTasks(yesScore, all_tasks);
} 

function displayScoreAndTasks(yesScore, all_tasks) {
	document.getElementById("content").innerHTML = "";
	
	if (yesScore > 17) {
	//display message in Green
	document.getElementById("content").innerHTML += 
	`
	<br>
	<div class="alert alert-success" role="alert">
	  A simple success alert—check it out!
	</div>
	`
	} else if (yesScore > 10){
	//display message in Yellow
	document.getElementById("content").innerHTML +=
	`
	<br>
	<div class="alert alert-warning" role="alert">
	  A simple warning alert—check it out!
	</div>
	`
	} else {
	document.getElementById("content").innerHTML +=
	`
	<br>
	<div class="alert alert-danger" role="alert">
	  A simple danger alert—check it out!
	</div>
	`
	}
	
	document.getElementById("content").innerHTML +=
	`
	<br>
	<div class="input-group mb-3">
  		<input type="text" class="form-control" placeholder="Enter new Ad Journal task" aria-label="Ad Journal task" aria-describedby="addTask">
  	<div class="input-group-append">
    	<button class="btn btn-outline-secondary" type="button" id="addTask">Add New Task</button>
  	</div>
	</div>
	<hr>
	`
	for (let taskIndex = 0; taskIndex < all_tasks.length; taskIndex++) {
		document.getElementById("content").innerHTML += 
		`${all_tasks[taskIndex]}
		<span class="dropdown float-right">
		  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		    options
		  </a>
		 <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
		    <a class="dropdown-item" href="#">Action</a>
		    <a class="dropdown-item" href="#">Another action</a>
		    <a class="dropdown-item" href="#">Something else here</a>
		  </div>
		</span><br><br>`;
	}
}

//add link to edit task
//add link (or button) to delete task
//pro: add link (or button) to mark task as done
//add a form that allow you to create new task