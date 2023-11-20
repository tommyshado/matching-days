describe("Matching days test", () => {
    let app;

    beforeEach(() => {
        app = matchingDays();
    });

    it("should be able to get the days of the week", () => {
        const days = app.getDays();
        const weekDays = [];

        days.forEach((dayObj) => {
            weekDays.push(dayObj.day);
        });

        assert.deepEqual(
            [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            weekDays
        );
    });

    it("should be able to select a day and get the selected day", () => {
        // takes in a string date
        app.addClassName("Monday");

        const days = app.getDays();
        let selectedDay;

        days.forEach((dayObj) => {
            if (dayObj.classList) {
                selectedDay = dayObj.day;
            }
        });

        assert.equal("Monday", selectedDay);
    });

    it("should be able to add a warning class list for a selected day", () => {
        // takes in a string date
        app.addClassName("Sunday");

        const days = app.getDays();
        let getSelectedDay = {};

        days.forEach((dayObj) => {
            if (dayObj.classList) {
                getSelectedDay = dayObj;
            }
        });

        assert.deepEqual(
            {
                day: "Sunday",
                classList: "warning",
            },
            getSelectedDay
        );
    });

    it("should be able to add a danger class name for another selected day", () => {
        // select one day
        app.addClassName("Monday");

        // select another day
        app.addClassName__("Sunday");


        const days = app.getDays();
        let getSelectedDay = [];

        days.forEach((dayObj) => {
            if (dayObj.classList) {
                getSelectedDay.push(dayObj);
            };
        });

        assert.deepEqual(
            [
                {
                    day: "Monday",
                    classList: "warning",
                },
                {
                    day: "Sunday",
                    classList: "danger",
                },
            ],
            getSelectedDay
        );
    });

    it("should be able to add a success class name for two selected days on the same day", () => {
        // select two same days
        app.addClassName("Monday");

        app.addClassName__("Monday");

        const days = app.getDays();
        let getSelectedDay = {};

        days.forEach((dayObj) => {
            if (dayObj.classList) {
                getSelectedDay = dayObj;
            }
        });

        assert.deepEqual(
            {
                day: "Monday",
                classList: "success",
            },
            getSelectedDay
        );
    });
});
