var weekDays;
(function (weekDays) {
    weekDays[weekDays["monday"] = 1] = "monday";
    weekDays[weekDays["tuesday"] = 2] = "tuesday";
    weekDays[weekDays["wednesday"] = 3] = "wednesday";
    weekDays[weekDays["thursday"] = 4] = "thursday";
    weekDays[weekDays["friday"] = 5] = "friday";
    weekDays[weekDays["saturday"] = 6] = "saturday";
    weekDays[weekDays["sunday"] = 7] = "sunday";
})(weekDays || (weekDays = {}));
;
console.log(weekDays.tuesday);
