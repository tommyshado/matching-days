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

    const updateDay = (weekday) => {
        days.forEach((dayOfTheWeek) => {
            if (dayOfTheWeek.day === weekday && dayOfTheWeek.classList) {
                dayOfTheWeek.classList = "";
            };
        });
    };

    const warningClassName = (weekday) => {
        days.forEach((dayOfTheWeek) => {
            if (dayOfTheWeek.day === weekday) {
                if (!dayOfTheWeek.classList) {
                    dayOfTheWeek.classList = "warning";
                } else {
                    dayOfTheWeek.classList = "success";
                };
            };
        })
    };

    const dangerClassName = (weekday) => {
        days.forEach((dayOfTheWeek) => {
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
        updateDay,
        warningClassName,
        dangerClassName,
    };
};
