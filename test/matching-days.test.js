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
        app.warningClassName("Monday");

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
        app.warningClassName("Sunday");

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
        app.warningClassName("Monday");

        // select another day
        app.dangerClassName("Sunday");


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
        app.warningClassName("Monday");

        app.dangerClassName("Monday");

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

    it("should be able to update a selected day", () => {
        // select one day
        app.warningClassName("Sunday");

        // select another day
        app.dangerClassName("Monday");

        const days = app.getDays();
        let getSelectedDay = [];

        days.forEach((dayObj) => {
            if (dayObj.classList) {
                getSelectedDay.push(dayObj);
            }
        });

        assert.deepEqual(
            [
                {
                    day: "Monday",
                    classList: "danger",
                },
                {
                    day: "Sunday",
                    classList: "warning",
                },
            ],
            getSelectedDay
        );

        // Update selected day
        app.updateDay("Sunday");

        const days__ = app.getDays();
        let getSelectedDay__ = [];

        days__.forEach((dayObj) => {
            if (dayObj.classList) {
                getSelectedDay__.push(dayObj);
            };
        });

        assert.deepEqual(
            [
                {
                    day: "Monday",
                    classList: "danger",
                },
            ], getSelectedDay__);
    });
});
