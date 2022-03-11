// Using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', (e) => {
		questions.forEach((item) => {
			if (item !== question){
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});

// Traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// const questions = document.querySelectorAll('.question');
// btns.forEach((btn) => {
// 	btn.addEventListener('click', (e) => {
// 		const thisQuestion = e.currentTarget.parentElement.parentElement;
// 		questions.forEach((item) => {
// 			if (item !== thisQuestion){
// 				item.classList.remove('show-text');
// 			}
// 		});
// 		thisQuestion.classList.toggle('show-text');
// 	});
// });