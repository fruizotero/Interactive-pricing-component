const d = document;

const $sliderRange = d.querySelector(".slider__range");
const $sliderToggle = d.querySelector(".slider__toggle");
const $sliderCheckbox = d.querySelector(".slider__checkbox");
const $sliderSelector = d.querySelector(".slider__selector");
const $sliderViews = d.querySelector(".slider__views");
const $price = d.querySelector(".price");
const $period = d.querySelector(".period");

const views = [25, 50, 100, 250, 500];
const prices = [4.00, 8.00, 16.00, 32.00, 64.00];
const valuesInput = [0, 25, 50, 75, 100];
const animationViews = {
    opacity: [0, 1],
    transform: ["translate(0, -1em)", "translate(0, 0)"]
};
const animatioPrice = {
    opacity: [0, 1],
    transform: ["translate(-1em, 0)", "translate(0, 0)"]
}

let value;
let year = false;
let index = 2;
const finalPrice = () => {
    return `$${(year ? prices[index] * 12 : prices[index]).toFixed(2)}`;
}

d.addEventListener("input", (e) => {

    if (e.target === $sliderRange) {

        value = parseInt(e.target.value);

        $sliderRange.style.backgroundSize = `${e.target.value}% 100%`;

        if (value === 0) {
            index = 0;
        }
        if (value === 25) {
            index = 1;
        }
        if (value === 50) {
            index = 2;
        }
        if (value === 75) {
            index = 3;
        }
        if (value === 100) {
            index = 4;
        }

        if (valuesInput.includes(value)) {
            $sliderViews.textContent = `${views[index]}k pageviews`;
            $sliderViews.animate(animationViews, 500);
            $price.textContent = finalPrice();
            $price.animate(animatioPrice, 500);
        }
    }
});


d.addEventListener("click", (e) => {

    if (e.target === $sliderCheckbox) {
        if ($sliderCheckbox.checked) {
            $sliderSelector.classList.add("selector--move");
            $sliderToggle.classList.add("slider__toggle--active");
            $period.textContent = "/ year";
            year = $sliderCheckbox.checked;
            $price.textContent = finalPrice();
            $price.animate(animatioPrice, 500);
        } else {
            $sliderSelector.classList.remove("selector--move")
            $sliderToggle.classList.remove("slider__toggle--active");
            $period.textContent = "/ month";
            year = $sliderCheckbox.checked;
            $price.textContent = finalPrice();
            $price.animate(animatioPrice, 500);
        }
    }
})

d.addEventListener("DOMContentLoaded", (e) => {
    $sliderRange.value = "50";
})
