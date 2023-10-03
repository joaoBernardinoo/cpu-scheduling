fetchColor = (context) => {
    const value = context.dataset.data[context.dataIndex];
    return value.color;
};
labels = ["A", "B", "C", "D"];
const data = {
    labels: labels,
    datasets: [],
};
let count = 5;

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
const delay = 750;

function processNext(process) {
    if (process.length > 0) {
        const p = process.shift();

        const processData = p.map((e) => ({
            x: [count, count + 1],
            y: count,
            color: colors[e],
        }));
        const newData = {
            data: processData,
            backgroundColor: fetchColor,
        };
        data.datasets.push(newData);
        count++;
        stackedBar.update();
        setTimeout(() => processNext(process), delay);
    }
}

colors = ["green", "#CF5C36", "#FFDA22", "blue", "#ffffff"];

processos = [
    [0, 4, 4, 4],
    [0, 4, 4, 4],
    [0, 2, 4, 4],
    [0, 2, 4, 4],
    [4, 2, 0, 4],
    [4, 0, 4, 4],
    [4, 0, 4, 2],
    [4, 4, 4, 0],
    [4, 4, 4, 0],
    [4, 4, 4, 0],
];

function update(){

    processStates

    const processData = p.map((e) => ({
        x: [count, count + 1],
        y: count,
        color: colors[e],
    }));
    const newData = {
        data: processData,
        backgroundColor: fetchColor,
    };
    data.datasets.push(newData);
    stackedBar.update();
    setTimeout(() => update(), delay);

}
const process = [
    new Process({ pid: "11111", arrival: 0, burst: 4, label: "A" }),
    new Process({ pid: "22222", arrival: 2, burst: 2, label: "B" }),
    new Process({ pid: "33333", arrival: 4, burst: 1, label: "C" }),
    new Process({ pid: "44444", arrival: 6, burst: 3, label: "D" }),
];

const cpu = new CPU();
cpu.scheduler.processes = process;
cpu.run();