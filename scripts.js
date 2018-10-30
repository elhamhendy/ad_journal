let question_one = "Does your website clearly convey your company's USP(Unique Selling Proposition)?";
let question_two = "Do you have an opt-in form to capture email addresses?";
let question_three = "Are you giving away a valuable freebie in exchange for a visitors email address ?";
let question_four = "Do you have an Explainer on your home page ?";
let question_five = "Do you utilize separate landing pages for specific products and services?";
let question_six = "Do you send automated follow emails to build the relationships";
let question_seven = "Do you have a Youtube channel ?";
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

let quizQuestions = [question_one, question_two,question_three,question_four,question_five,question_six,question_seven,question_eight,question_nine,question_ten,question_twelve,question_thirteen,
question_fourteen,question_fifteen,question_sixteen,question_seventeen,question_eighteen,question_ninteen,question_tewenty];

function startQuiz() {
	//remove the welcome message
	// show the progress bar and increase by the percentage of question completed
	document.getElementById("content").innerHTML = 
	`<div class="progress">
  	<div class="progress-bar" role="progressbar" style="width: 5%;" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">5%</div>
	 </div>`;
	document.getElementById("content").innerHTML += 
	`<input type="checkbox" aria-label="Checkbox fo YES">`
	+ " "
	+`<input type="checkbox" aria-label="Checkbox for NO">`
	+ " "
	+ question_one; 
	console.log("You've completed 5% of the quiz");
	// show the FIRST question with YES and NO checkboxes
	// after choosing YES or NO, take me to the NEXT question
}
