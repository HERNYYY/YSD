// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('welCharts'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '报表总览'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['库存总量','采购总量','入库总量','出库总量','退库总量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'退库总量',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'采购总量',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'入库总量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'出库总量',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'库存总量',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
