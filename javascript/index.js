

const starsContainer = document.getElementById("starsContainer");
let stars = starsContainer.getElementsByClassName("card__rate__option");

Array.from(stars).forEach(star => {

	star.addEventListener('click', (e) => {
		var current = document.getElementsByClassName('active');
		current[0].classList.remove('active');

		e.currentTarget.className += " active";
	});
});


function showResultCard(value) {
	const mainCard = document.getElementById('mainCard');
	mainCard.style.display = 'none';

	const resultCard = document.getElementById('resultCard');
	resultCard.style.display = 'flex';

	const showResult = document.getElementById('result');
	showResult.innerText = `You selected ${value} out of 5`;
}


const starDefault = document.getElementById('4');
starDefault.className += " active";
let value = starDefault.id;

submit.onclick = () => {
	const star = document.getElementsByClassName('active');
	value = star[0].id;

	showResultCard(value);
};
