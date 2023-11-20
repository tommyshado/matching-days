// References elements
const dateOne = document.querySelector(".firstDate");
const dateTwo = document.querySelector(".secondDate");


let getDays;

if (localStorage["days"]) {
    getDays = JSON.parse(localStorage["days"]);
};

// App instance
const App = matchingDays(getDays);

// Template source
const templateSource = document.querySelector(".template").innerHTML;
let days = document.querySelector(".days");
const template = Handlebars.compile(templateSource);

const renderDays = () => {
    let daysHtml = template(App.getDays());
    days.innerHTML = daysHtml;
};

renderDays();

// Events

dateOne.addEventListener("change", () => {
    const day = new Date(dateOne.value).toLocaleDateString('en-US', { weekday: 'long' });
    App.addClassName(day);

    renderDays();

    localStorage.setItem("days", JSON.stringify(App.getDays()));
});

dateTwo.addEventListener("change", () => {
    const day = new Date(dateTwo.value).toLocaleDateString('en-US', { weekday: 'long' });
    App.addClassName__(day);

    renderDays();

    localStorage.setItem("days", JSON.stringify(App.getDays()));
});