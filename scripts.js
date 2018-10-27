let question_one = "Does your website clearly convey your company's USP(Unique Selling Proposition)?";
let question_two = "Do you have an opt-in form to capture email addresses?";

let quizQuestions = [question_one, question_two];

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