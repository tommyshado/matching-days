// References elements
const dateOne = document.querySelector(".firstDate");
const dateTwo = document.querySelector(".secondDate");
const message = document.querySelector(".message");
const resetBtn = document.querySelector(".resetBtn");

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

const getDay = (date) => {
    return new Date(date.value).toLocaleDateString('en-US', { weekday: 'long' });
};

const setTimeoutFunc = () => {
    return setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
};

// Events

dateOne.addEventListener("change", () => {
    App.addClassName(getDay(dateOne));

    const days = App.getDays();

    let foundMatch = false;

    days.forEach((dayOfTheWeek) => {
        if (dayOfTheWeek.classList === "success") {
            foundMatch = true;

            setTimeoutFunc();
        };
    });

    if (foundMatch) {
        message.classList.remove("danger-text")
        message.innerHTML = "Match found";
        message.classList.add("success-text");
        setTimeoutFunc();

    } else {
        message.classList.remove("success-text");
        message.innerHTML = "Match not found";
        message.classList.add("danger-text");
        setTimeoutFunc();
    };

    renderDays();

    localStorage.setItem("days", JSON.stringify(App.getDays()));
});

dateTwo.addEventListener("change", () => {
    App.addClassName__(getDay(dateTwo));

    const days = App.getDays();

    let foundMatch = false;

    days.forEach((dayOfTheWeek) => {
        if (dayOfTheWeek.classList === "success") {
            foundMatch = true;

            setTimeoutFunc();
        };
    });

    if (foundMatch) {
        message.classList.remove("danger-text")
        message.innerHTML = "Match found";
        message.classList.add("success-text");
        setTimeoutFunc();

    } else {
        message.classList.remove("success-text");
        message.innerHTML = "Match not found";
        message.classList.add("danger-text");
        setTimeoutFunc();
    };

    renderDays();

    localStorage.setItem("days", JSON.stringify(App.getDays()));
});

resetBtn.addEventListener("click", () => {
    if (confirm("Press OK to reset selected days OR Cancel to abort")) {
        localStorage.setItem("days", JSON.stringify(App.resetApp()));
        location.reload();
    };

    message.innerHTML = "Successfully reseted selected days";
    message.classList.add("success-text");
    setTimeoutFunc();
})
