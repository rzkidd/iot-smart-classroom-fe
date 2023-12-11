const motionCtx = document.getElementById("motion-chart");

let motionChart = new Chart(motionCtx, {
    type: "line",
    data: {
        datasets: [
            {
                label: "Motion",
                data: {
                    1: "YES",
                    2: "NO",
                    3: "YES",
                    4: "YES",
                },
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                type: "category",
                labels: ["YES", "NO"],
                position: "left",
                offset: true,
            },
        },
    },
});

const brightnessCtx = document.getElementById("brightness-chart");

let brightnessChart = new Chart(brightnessCtx, {
    type: "line",
    data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "Brightness",
                data: [100, 80, 40, 50, 0, 70],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const temperatureCtx = document.getElementById("temperature-chart");

let tempChart = new Chart(temperatureCtx, {
    type: "line",
    data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "Temperature",
                data: [20, 18, 21, 19, 17, 16],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

const humidityCtx = document.getElementById("humidity-chart");

let humidityChart = new Chart(humidityCtx, {
    type: "line",
    data: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
            {
                label: "Humidity",
                data: [100, 80, 40, 50, 0, 70],
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
