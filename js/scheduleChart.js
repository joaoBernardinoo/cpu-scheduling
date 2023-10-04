// Esse arquivo aqui ta uma bagunça, mas é pq eu tava testando umas coisas
// a única função importante é updateChart na linha 112

fetchColor = (context) => {
    const value = context.dataset.data[context.dataIndex];
    return value.color;
};
labels = ["A", "B", "C", "D"];
const data1 = {
    labels: labels,
    datasets: [],
};
const data2 = {
    labels: labels,
    datasets: [],
};
const data3 = {
    labels: labels,
    datasets: [],
};
const data4 = {
    labels: labels,
    datasets: [],
};
let count = 0;
const options = {
    indexAxis: "y",
    plugins: {
        tooltip: {
            enabled: false,
        },
        zoom: {
            pan: {
                enabled: true,
            },
            zoom: {
                mode: "x",
                wheel: {
                    enabled: true,
                },
            },
            limits: {
                x: { min: 0 },
            },
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Vizualização de Escalonamento",
            font: {
                size: 15,
            },
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            min: count,
            ticks: {
                font: {
                    size: 10,
                },
            },
        },
        y: {
            stacked: true,
            ticks: {
                font: {
                    size: 8,
                },
            },
        },
    },
};

const config1 = {
    type: "bar",
    data: data1,
    options,
};
const config2 = {
    type: "bar",
    data: data2,
    options,
};
const config3 = {
    type: "bar",
    data: data3,
    options,
};
const config4 = {
    type: "bar",
    data: data4,
    options,
};

// Cria os charts pra cada escalonamento
const ctx1 = document.getElementById("myChart1").getContext("2d");
const stackedBar1 = new Chart(ctx1, config1);
const ctx2 = document.getElementById("myChart2").getContext("2d");
const stackedBar2 = new Chart(ctx2, config2);
const ctx3 = document.getElementById("myChart3").getContext("2d");
const stackedBar3 = new Chart(ctx3, config3);
const ctx4 = document.getElementById("myChart4").getContext("2d");
const stackedBar4 = new Chart(ctx4, config4);

const stackedBars = [stackedBar1, stackedBar2, stackedBar3, stackedBar4];

// Atualiza o Gant Chart
function updateChart(stackedBar, processes, sync) {
    const processData = processes.map((e) => ({
        x: [sync, sync + 1],
        y: sync,
        color: e.color,
    }));
    const newData = {
        data: processData,
        backgroundColor: fetchColor,
    };
    stackedBar.data.datasets.push(newData);
    stackedBar.update();
}

// Retorna o zoom original ao dar um duplo clique no chart
document.getElementById("myChart1").addEventListener("dblclick", () => {
    stackedBar1.resetZoom();
});
document.getElementById("myChart2").addEventListener("dblclick", () => {
    stackedBar2.resetZoom();
});
document.getElementById("myChart3").addEventListener("dblclick", () => {
    stackedBar3.resetZoom();
});
document.getElementById("myChart4").addEventListener("dblclick", () => {
    stackedBar4.resetZoom();
});
