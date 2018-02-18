function updateClock() {

    var d = new Date()
    var curHrs = d.getHours();
    var curMins = d.getMinutes();
    var curSecs = d.getSeconds();

    // Pad the mins and secs with leading zeros, if required
    curMins = (curMins < 10 ? "0" : "") + curMins;
    curSecs = (curSecs < 10 ? "0" : "") + curSecs;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (curHrs < 12) ? "AM" : "PM";

    // Convert the hrs component to 12-hour format if needed
    curHrs = (curHrs > 12) ? curHrs - 12 : curHrs;

    // Convert an hrs component of "0" to "12"
    curHrs = (curHrs == 0) ? 12 : curHrs;

    // Compose the string for display
    var curTimeString = curHrs + ":" + curMins + ":" + curSecs + " " + timeOfDay;

    // Update the time display
    document.getElementById("clock").innerHTML = curTimeString;

    var greet = document.getElementById("greet").innerHTML
    if (timeOfDay == "AM") {
        greet = "Morning"
    }
    if (timeOfDay == "PM") {
        if (curHrs <= 5) {
            greet = "Afternoon"
        } else {
            greet = "Evening"
        }
    }
    document.getElementById("greet").innerText = greet

}