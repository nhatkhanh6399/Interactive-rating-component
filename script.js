const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");
const submitBtn = document.querySelector(".submit");
const rateBtn = document.querySelectorAll(".rate-button");
const rateContainer = document.querySelector(".rating-list");
const rateScore = document.querySelector(".rate-score");

let rateValue;

const handleClickRate = (e) => {
	const btn = e.target.closest(".rate-button");
	if (!btn) return;

	rateBtn.forEach((btn) => btn.classList.remove("active"));

	btn.classList.add("active");

	rateValue = btn.value;
};

const handleSubmit = () => {
	rateScore.textContent = rateValue;
	ratingCard.classList.add("hidden");
	thankYouCard.classList.remove("hidden");
};

rateContainer.addEventListener("click", handleClickRate);
submitBtn.addEventListener("click", handleSubmit);
