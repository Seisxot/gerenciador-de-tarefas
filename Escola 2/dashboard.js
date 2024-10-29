document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".section");

    function showSection(sectionId) {
        sections.forEach(section => section.style.display = "none");
        document.getElementById(sectionId).style.display = "block";
    }

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            const sectionId = button.getAttribute("onclick").match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Funções para carregar dados do Local Storage
    function loadActivities() {
        const activities = JSON.parse(localStorage.getItem("activities")) || [];
        const activityList = document.getElementById("activity-list");
        activityList.innerHTML = activities.map(activity => `
            <div>
                <strong>Descrição:</strong> ${activity.description}<br>
                <strong>Data de Entrega:</strong> ${activity.dueDate}
            </div>
        `).join("");
    }

    function loadSchedule() {
        const schedule = JSON.parse(localStorage.getItem("schedule")) || [];
        const scheduleList = document.getElementById("schedule-list");
        scheduleList.innerHTML = schedule.map(entry => `
            <div>${entry.day} - ${entry.time}</div>
        `).join("");
    }

    function loadGrades() {
        const grades = JSON.parse(localStorage.getItem("grades")) || [];
        const gradesList = document.getElementById("grades-list");
        gradesList.innerHTML = grades.map(grade => `
            <div>${grade.subject}: ${grade.score}</div>
        `).join("");
    }

    loadActivities();
    loadSchedule();
    loadGrades();
});
