// References elements
const dateOne = document.querySelector(".firstDate");
const dateTwo = document.querySelector(".secondDate");

// App instance
const App = matchingDays();

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
    App.updateDay(day);
    App.addClassName(day);

    renderDays();
});

dateTwo.addEventListener("change", () => {
    const day = new Date(dateTwo.value).toLocaleDateString('en-US', { weekday: 'long' });
    App.updateDay(day);
    App.addClassName__(day);

    renderDays();
});