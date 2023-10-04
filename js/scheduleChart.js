fetchColor = (context) => {
    const value = context.dataset.data[context.dataIndex];
    return value.color;
};
labels = ["A", "B", "C", "D"];
const data = {
    labels: labels,
    datasets: [],
};
let count = 0;

const config = {
    type: "bar",
    data,
    options: {
        indexAxis: "y",
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Vizualização de Escalonamento",
                font: {
                    size: 25,
                },
            },
        },
        scales: {
            x: {
                min: count,
                max: 10,
                ticks: {
                    font: {
                        size: 20,
                    },
                },
            },
            y: {
                stacked: true,
                ticks: {
                    font: {
                        size: 18,
                    },
                },
            },
        },
    },
};

const ctx = document.getElementById("myChart").getContext("2d");
const stackedBar = new Chart(ctx, config);

// Atualiza o Gant Chart
function updateChart(processes, sync){
    const processData = processes.map((e) => ({
        x: [sync, sync + 1],
        y: sync,
        color: e.color,
    }));
    const newData = {
        data: processData,
        backgroundColor: fetchColor,
    };
    data.datasets.push(newData);
    stackedBar.update();
}