// References elements
const dateOne = document.querySelector(".firstDate");
const dateTwo = document.querySelector(".secondDate");

// GET the values from the input dates element
const dateOneVal = dateOne.value;
const dateTwoVal = dateTwo.value;

// App instance
const App = matchingDays();

// Template source
const templateSource = document.querySelector(".template").innerHTML;
let days = document.querySelector(".days");
const template = Handlebars.compile(templateSource);

let daysHtml = template(App.getDays());
days.innerHTML = daysHtml;

// Events

dateOne.addEventListener("change", () => {
    const date = new Date(dateOneVal).toLocaleDateString('en-US', { weekday: 'long' });
    App.updateDay(date);
    App.addClassName(date);
});

dateTwo.addEventListener("change", () => {
    const date = new Date(dateTwoVal).toLocaleDateString('en-US', { weekday: 'long' });
    App.updateDay(date);
    App.addClassName__(date);
});