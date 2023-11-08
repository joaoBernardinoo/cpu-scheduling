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
// Cria os charts pra cada escalonamento
const ctx1 = document.getElementById("myChart1").getContext("2d");
const stackedBar1 = new Chart(ctx1, config1);

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
