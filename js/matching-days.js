const matchingDays = () => {
    const days = [
        {
            day: "Monday",
            classList: "",
        },
        {
            day: "Tuesday",
            classList: "",
        },
        {
            day: "Wednesday",
            classList: "",
        },
        {
            day: "Thursday",
            classList: "",
        },
        {
            day: "Friday",
            classList: "",
        },
        {
            day: "Saturday",
            classList: "",
        },
        {
            day: "Sunday",
            classList: "",
        },
    ];

    const getDays = () => {
        return days;
    };

    const addClassName = (weekday) => {
        days.forEach((dayOfTheWeek) => {
            if (dayOfTheWeek.classList === "success") {
                dayOfTheWeek.classList = "";
            };

            if (dayOfTheWeek.classList === "warning") {
                dayOfTheWeek.classList = "";
            };

            if (dayOfTheWeek.day === weekday) {
                if (!dayOfTheWeek.classList) {
                    dayOfTheWeek.classList = "warning";
                } else {
                    dayOfTheWeek.classList = "success";
                };
            };
        })
    };

    const addClassName__ = (weekday) => {
        days.forEach((dayOfTheWeek) => {
            if (dayOfTheWeek.classList === "success") {
                dayOfTheWeek.classList = "";
            };

            if (dayOfTheWeek.classList === "danger") {
                dayOfTheWeek.classList = "";
            };

            if (dayOfTheWeek.day === weekday) {
                if (!dayOfTheWeek.classList) {
                    dayOfTheWeek.classList = "danger";
                } else {
                    dayOfTheWeek.classList = "success";
                }
            };
        })
    };

    return {
        getDays,
        addClassName,
        addClassName__,
    };
};
