// Função para mostrar as seções
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none'); // Esconde todas as seções
    document.getElementById(sectionId).style.display = 'block'; // Mostra a seção correspondente
}

// Função para mostrar a seção de gráficos
function showCharts() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none'); // Esconde todas as seções
    document.getElementById('graficos').style.display = 'block'; // Mostra a seção de gráficos
}

// Inicialização do gráfico de desempenho
function initChart() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico
        data: {
            labels: ['Aluno 1', 'Aluno 2', 'Aluno 3', 'Aluno 4', 'Aluno 5'], // Nomes dos alunos
            datasets: [{
                label: 'Desempenho dos Alunos',
                data: [85, 90, 78, 92, 88], // Notas fictícias
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Adicionando eventos de submit para os formulários
document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const activityDescription = event.target[0].value;
    const activityDate = event.target[1].value;
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML += `<div>${activityDescription} - ${activityDate}</div>`;
    event.target.reset();
});

document.getElementById('grades-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const subject = event.target[0].value;
    const grade = event.target[1].value;
    const gradesList = document.getElementById('grades-list');
    gradesList.innerHTML += `<div>${subject}: ${grade}</div>`;
    event.target.reset();
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const student = event.target[0].value;
    const presence = event.target[1].value;
    const attendanceList = document.getElementById('attendance-list');
    attendanceList.innerHTML += `<div>${student} - ${presence}</div>`;
    event.target.reset();
});

document.getElementById('schedule-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const day = event.target[0].value;
    const time = event.target[1].value;
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML += `<div>${day}: ${time}</div>`;
    event.target.reset();
});

// Chame a função initChart após o carregamento da página
window.onload = function() {
    initChart();
};
