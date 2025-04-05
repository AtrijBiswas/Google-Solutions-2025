document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dailyProgressChart").height = 300;
    document.getElementById("weeklyProgressChart").height = 300;

    // Daily Progress Chart
    var dailyCtx = document.getElementById("dailyProgressChart").getContext("2d");
    new Chart(dailyCtx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Daily Study Hours",
                data: [2, 3, 1.5, 4, 2.5, 3.5, 4],
                borderColor: "#3498db",
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    // Weekly Progress Chart
    var weeklyCtx = document.getElementById("weeklyProgressChart").getContext("2d");
    new Chart(weeklyCtx, {
        type: "bar",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: "Weekly Study Hours",
                data: [14, 16, 12, 18],
                backgroundColor: "#2ecc71"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
 function signOut() {
    console.log("User signed out");
    window.location.href = "index.html"; 
