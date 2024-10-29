document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const userType = document.getElementById("user-type").value;

    if (userType === "aluno") {
        window.location.href = "dashboard.html";
    } else if (userType === "professor") {
        window.location.href = "dash-professores.html";
    }
});
