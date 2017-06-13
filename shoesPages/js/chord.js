require.config({
    paths: {
        echarts: './build/dist' //引用资源文件夹路径，注意路径
    }
});
require(
    [
        'echarts',
        'echarts/chart/line',   // 按需加载所需图表，用到什么类型就加载什么类型，这里不需要考虑路径
        'echarts/chart/bar',     //柱形图
        //'echarts/chart/line'    //折线图
        //'echarts/chart/pie'     //饼图  （如需饼漏斗图动态类型切换，require时还需要echarts/chart/funnel）
        'echarts/chart/chord'   //和弦图
        //'echarts/chart/map'     //地图
        //'echarts/chart/radar'   //雷达
    ],
    function (ec) {
        var myChart = ec.init(document.getElementById('chord'));
        var option = {
            title : {
                text: '',
                x:'right',
                y:'bottom'
            },
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    if (params.indicator2) {    // is edge
                        return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
                    } else {    // is node
                        return params.name
                    }
                }
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true},
                    //magicType: {show: true, type: ['force', 'chord']},
                    saveAsImage : {show: true}
                }
            },
            legend: {
                orient : 'vertical',
                x: 'left',
                data:[]
                // data:['High Heel', 'Middle Heel', 'Low Heel', 'Flat Bottom', 'Reds', 'Golders', 'Browns', 'Dark Color', 'Light Color', 'Pointed Head', 'Round Head', 'Peep-toe', 'Leather', 'Artificial Leather', 'Rubber', 'Canvas',
                //     'Printing', 'Cartoon', 'Fur', 'Fleece', 'Casual Wear', 'Formal Wear', 'For Banquet', 'For Sports']
            },
            series : [
                {
                    type:'chord',
                    sort : 'ascending',
                    sortSub : 'descending',
                    showScale : false,
                    itemStyle : {
                        normal : {
                            label : {
                                rosourcete : true
                            }
                        }
                    },
                    // 使用 nodes links 表达和弦图
                    nodes: [
                        {name:'High Heel'},
                        {name:'Middle Heel'},
                        {name:'Low Heel'},
                        {name:'Flat Bottom'},
                        {name:'Dark Color'},
                        {name:'Golders'},
                        {name:'Light Color'},
                        {name:'Browns'},
                        {name:'Pointed Head'},
                        {name:'Round Head'},
                        {name:'Peep-toe'},
                        {name:'Reds'},
                        {name:'Leather'},
                        {name:'Artificial Leather'},
                        {name:'Canvas'},
                        //{name:'Rubber'},
                        //{name:'Printing'},
                        {name:'Fur'},
                        //{name:'Fleece'},
                        //{name:'Cartoon'},
                        {name:'Casual Wear'},
                        //{name:'Formal Wear'},
                        //{name:'For Banquet'},
                        //{name:'For Sports'},
                    ],
                    links: [
                        {source: 'High Heel', target: 'Golders', weight: 0.9},
                        {source: 'High Heel', target: 'Reds', weight: 0.65},
                        {source: 'High Heel', target: 'Pointed Head', weight: 0.98},
                        {source: 'High Heel', target: 'Artificial Leather', weight: 0.9},
                        {source: 'High Heel', target: 'For Banquet', weight: 0.95},
                        {source: 'Middle Heel', target: 'Reds', weight: 0.88},
                        {source: 'Middle Heel', target: 'Browns', weight: 0.72},
                        {source: 'Middle Heel', target: 'Pointed Head', weight: 0.87},
                        {source: 'Middle Heel', target: 'Peep-toe', weight: 0.7},
                        {source: 'Middle Heel', target: 'Artificial Leather', weight: 0.88},
                        {source: 'Middle Heel', target: 'Fur', weight: 0.7},
                        {source: 'Middle Heel', target: 'For Banquet', weight: 0.8},
                        {source: 'Low Heel', target: 'Browns', weight: 0.8},
                        {source: 'Low Heel', target: 'Dark Color', weight: 0.9},
                        {source: 'Low Heel', target: 'Round Head', weight: 0.8},
                        {source: 'Low Heel', target: 'Peep-toe', weight: 0.9},
                        {source: 'Low Heel', target: 'Leather', weight: 0.9},
                        {source: 'Low Heel', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Low Heel', target: 'Formal Wear', weight: 0.9},
                        {source: 'Low Heel', target: 'Casual Wear', weight: 0.7},
                        {source: 'Low Heel', target: 'Fur', weight: 0.7},

                        {source: 'Flat Bottom', target: 'Light Color', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Dark Color', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Round Head', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Flat Bottom', target: 'For Sports', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Canvas', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Casual Wear', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Rubber', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Printing', weight: 0.9},
                        {source: 'Flat Bottom', target: 'Cartoon', weight: 0.9},

                        {source: 'Reds', target: 'Browns', weight: 0.9},
                        {source: 'Reds', target: 'Pointed Head', weight: 0.9},
                        {source: 'Reds', target: 'Peep-toe', weight: 0.9},
                        {source: 'Reds', target: 'Artificial Leather', weight: 0.9},
                        {source: 'Reds', target: 'Printing', weight: 0.9},
                        {source: 'Reds', target: 'For Banquet', weight: 0.9},

                        {source: 'Dark Color', target: 'Browns', weight: 0.9},
                        {source: 'Dark Color', target: 'Light Color', weight: 0.6},
                        {source: 'Dark Color', target: 'Peep-toe', weight: 0.9},
                        {source: 'Dark Color', target: 'Round Head', weight: 0.9},
                        {source: 'Dark Color', target: 'Fur', weight: 0.9},
                        {source: 'Dark Color', target: 'Fleece', weight: 0.9},
                        {source: 'Dark Color', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Dark Color', target: 'Leather', weight: 0.9},
                        {source: 'Dark Color', target: 'For Banquet', weight: 0.9},
                        {source: 'Dark Color', target: 'Formal Wear', weight: 0.9},

                        {source: 'Golders', target: 'Light Color', weight: 0.9},
                        {source: 'Golders', target: 'Peep-toe', weight: 0.9},
                        {source: 'Golders', target: 'Pointed Head', weight: 0.9},
                        {source: 'Golders', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Golders', target: 'For Banquet', weight: 0.9},

                        {source: 'Light Color', target: 'Round Head', weight: 0.9},
                        {source: 'Light Color', target: 'Fleece', weight: 0.9},
                        {source: 'Light Color', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Light Color', target: 'For Banquet', weight: 0.9},
                        {source: 'Light Color', target: 'Rubber', weight: 0.9},
                        {source: 'Light Color', target: 'Canvas', weight: 0.9},
                        {source: 'Light Color', target: 'For Sports', weight: 0.9},
                        {source: 'Light Color', target: 'Casual Wear', weight: 0.9},
                        {source: 'Light Color', target: 'Cartoon', weight: 0.9},
                        {source: 'Light Color', target: 'Printing', weight: 0.9},

                        {source: 'Browns', target: 'Peep-toe', weight: 0.9},
                        {source: 'Browns', target: 'Round Head', weight: 0.9},
                        {source: 'Browns', target: 'Artificial Leather', weight: 0.8},
                        {source: 'Browns', target: 'Leather', weight: 0.9},
                        {source: 'Browns', target: 'For Banquet', weight: 0.9},
                        {source: 'Browns', target: 'Formal Wear', weight: 0.9},

                        {source: 'Pointed Head', target: 'Leather', weight: 0.9},
                        {source: 'Pointed Head', target: 'Artificial Leather', weight: 0.9},
                        {source: 'Pointed Head', target: 'For Banquet', weight: 0.9},

                        {source: 'Round Head', target: 'Leather', weight: 0.9},
                        {source: 'Round Head', target: 'Artificial Leather', weight: 0.9},
                        {source: 'Round Head', target: 'Formal Wear', weight: 0.9},
                        {source: 'Round Head', target: 'Canvas', weight: 0.9},
                        {source: 'Round Head', target: 'Rubber', weight: 0.9},
                        {source: 'Round Head', target: 'Casual Wear', weight: 0.9},
                        {source: 'Round Head', target: 'For Sports', weight: 0.9},

                        {source: 'Peep-toe', target: 'Leather', weight: 0.9},
                        {source: 'Peep-toe', target: 'Artificial Leather', weight: 0.9},
                        {source: 'Peep-toe', target: 'Casual Wear', weight: 0.9},
                        {source: 'Peep-toe', target: 'For Banquet', weight: 0.9},
                        {source: 'Peep-toe', target: 'Fur', weight: 0.9},

                        {source: 'Leather', target: 'Artificial Leather', weight: 0.9},
                        {source: 'Leather', target: 'Rubber', weight: 0.9},
                        {source: 'Leather', target: 'For Banquet', weight: 0.9},
                        {source: 'Leather', target: 'Fur', weight: 0.9},
                        {source: 'Leather', target: 'Formal Wear', weight: 0.9},

                        {source: 'Artificial Leather', target: 'Rubber', weight: 0.9},
                        {source: 'Artificial Leather', target: 'Printing', weight: 0.9},
                        {source: 'Artificial Leather', target: 'Fur', weight: 0.9},
                        {source: 'Artificial Leather', target: 'Fleece', weight: 0.9},
                        {source: 'Artificial Leather', target: 'Casual Wear', weight: 0.9},

                        {source: 'Canvas', target: 'Rubber', weight: 0.9},
                        {source: 'Canvas', target: 'Printing', weight: 0.9},
                        {source: 'Canvas', target: 'Cartoon', weight: 0.9},
                        {source: 'Canvas', target: 'Casual Wear', weight: 0.9},
                        {source: 'Canvas', target: 'For Sports', weight: 0.9},

                        {source: 'Rubber', target: 'Casual Wear', weight: 0.9},
                        {source: 'Rubber', target: 'For Sports', weight: 0.9},

                        {source: 'Printing', target: 'Cartoon', weight: 0.9},
                        {source: 'Printing', target: 'Casual Wear', weight: 0.9},

                        {source: 'Fur', target: 'Fleece', weight: 0.9},
                        {source: 'Fur', target: 'Casual Wear', weight: 0.9},
                        {source: 'Fur', target: 'For Banquet', weight: 0.9},

                        {source: 'Fleece', target: 'Casual Wear', weight: 0.9},

                        {source: 'Cartoon', target: 'Casual Wear', weight: 0.9},

                        {source: 'Casual Wear', target: 'For Sports', weight: 0.9},

                        {source: 'Formal Wear', target: 'For Banquet', weight: 0.9},


                        // {target: 'High Heel', source: 'Golders', weight: 0.9},
                        // {target: 'High Heel', source: 'Reds', weight: 0.65},
                        // {target: 'High Heel', source: 'Pointed Head', weight: 0.98},
                        // {target: 'High Heel', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'High Heel', source: 'For Banquet', weight: 0.95},
                        {target: 'Middle Heel', source: 'Reds', weight: 0.88},
                        {target: 'Middle Heel', source: 'Browns', weight: 0.72},
                        {target: 'Middle Heel', source: 'Pointed Head', weight: 0.87},
                        {target: 'Middle Heel', source: 'Peep-toe', weight: 0.7},
                        {target: 'Middle Heel', source: 'Artificial Leather', weight: 0.88},
                        {target: 'Middle Heel', source: 'Fur', weight: 0.7},
                        {target: 'Middle Heel', source: 'For Banquet', weight: 0.8},
                        // {target: 'Low Heel', source: 'Browns', weight: 0.8},
                        // {target: 'Low Heel', source: 'Dark Color', weight: 0.9},
                        // {target: 'Low Heel', source: 'Round Head', weight: 0.8},
                        // {target: 'Low Heel', source: 'Peep-toe', weight: 0.9},
                        // {target: 'Low Heel', source: 'Leather', weight: 0.9},
                        // {target: 'Low Heel', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Low Heel', source: 'Formal Wear', weight: 0.9},
                        // {target: 'Low Heel', source: 'Casual Wear', weight: 0.7},
                        // {target: 'Low Heel', source: 'Fur', weight: 0.7},
                        //
                        // {target: 'Flat Bottom', source: 'Light Color', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Dark Color', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Round Head', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Flat Bottom', source: 'For Sports', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Canvas', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Rubber', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Printing', weight: 0.9},
                        // {target: 'Flat Bottom', source: 'Cartoon', weight: 0.9},
                        //
                        // {target: 'Reds', source: 'Browns', weight: 0.9},
                        // {target: 'Reds', source: 'Pointed Head', weight: 0.9},
                        // {target: 'Reds', source: 'Peep-toe', weight: 0.9},
                        // {target: 'Reds', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'Reds', source: 'Printing', weight: 0.9},
                        // {target: 'Reds', source: 'For Banquet', weight: 0.9},
                        //
                        // {target: 'Dark Color', source: 'Browns', weight: 0.9},
                        // {target: 'Dark Color', source: 'Light Color', weight: 0.6},
                        // {target: 'Dark Color', source: 'Peep-toe', weight: 0.9},
                        // {target: 'Dark Color', source: 'Round Head', weight: 0.9},
                        // {target: 'Dark Color', source: 'Fur', weight: 0.9},
                        // {target: 'Dark Color', source: 'With Fleece', weight: 0.9},
                        // {target: 'Dark Color', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Dark Color', source: 'Leather', weight: 0.9},
                        // {target: 'Dark Color', source: 'For Banquet', weight: 0.9},
                        // {target: 'Dark Color', source: 'Formal Wear', weight: 0.9},
                        //
                        // {target: 'Golders', source: 'Light Color', weight: 0.9},
                        // {target: 'Golders', source: 'Peep-toe', weight: 0.9},
                        // {target: 'Golders', source: 'Pointed Head', weight: 0.9},
                        // {target: 'Golders', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Golders', source: 'For Banquet', weight: 0.9},
                        //
                        // {target: 'Light Color', source: 'Round Head', weight: 0.9},
                        // {target: 'Light Color', source: 'Fleece', weight: 0.9},
                        // {target: 'Light Color', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Light Color', source: 'For Banquet', weight: 0.9},
                        // {target: 'Light Color', source: 'Rubber', weight: 0.9},
                        // {target: 'Light Color', source: 'Canvas', weight: 0.9},
                        // {target: 'Light Color', source: 'For Sports', weight: 0.9},
                        // {target: 'Light Color', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Light Color', source: 'Cartoon', weight: 0.9},
                        // {target: 'Light Color', source: 'Printing', weight: 0.9},
                        //
                        // {target: 'Browns', source: 'Peep-toe', weight: 0.9},
                        // {target: 'Browns', source: 'Round Head', weight: 0.9},
                        // {target: 'Browns', source: 'Artificial Leather', weight: 0.8},
                        // {target: 'Browns', source: 'Leather', weight: 0.9},
                        // {target: 'Browns', source: 'For Banquet', weight: 0.9},
                        // {target: 'Browns', source: 'Formal Wear', weight: 0.9},
                        //
                        // {target: 'Pointed Head', source: 'Leather', weight: 0.9},
                        // {target: 'Pointed Head', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'Pointed Head', source: 'For Banquet', weight: 0.9},
                        //
                        // {target: 'Round Head', source: 'Leather', weight: 0.9},
                        // {target: 'Round Head', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'Round Head', source: 'Formal Wear', weight: 0.9},
                        // {target: 'Round Head', source: 'Canvas', weight: 0.9},
                        // {target: 'Round Head', source: 'Rubber', weight: 0.9},
                        // {target: 'Round Head', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Round Head', source: 'For Sports', weight: 0.9},
                        //
                        // {target: 'Peep-toe', source: 'Leather', weight: 0.9},
                        // {target: 'Peep-toe', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'Peep-toe', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Peep-toe', source: 'For Banquet', weight: 0.9},
                        // {target: 'Peep-toe', source: 'Fur', weight: 0.9},
                        //
                        // {target: 'Leather', source: 'Artificial Leather', weight: 0.9},
                        // {target: 'Leather', source: 'Rubber', weight: 0.9},
                        // {target: 'Leather', source: 'For Banquet', weight: 0.9},
                        // {target: 'Leather', source: 'Fur', weight: 0.9},
                        // {target: 'Leather', source: 'Formal Wear', weight: 0.9},
                        //
                        // {target: 'Artificial Leather', source: 'Rubber', weight: 0.9},
                        // {target: 'Artificial Leather', source: 'Printing', weight: 0.9},
                        // {target: 'Artificial Leather', source: 'Fur', weight: 0.9},
                        // {target: 'Artificial Leather', source: 'Fleece', weight: 0.9},
                        // {target: 'Artificial Leather', source: 'Casual Wear', weight: 0.9},
                        //
                        // {target: 'Canvas', source: 'Rubber', weight: 0.9},
                        // {target: 'Canvas', source: 'Printing', weight: 0.9},
                        // {target: 'Canvas', source: 'Cartoon', weight: 0.9},
                        // {target: 'Canvas', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Canvas', source: 'For Sports', weight: 0.9},
                        //
                        // {target: 'Rubber', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Rubber', source: 'For Sports', weight: 0.9},
                        //
                        // {target: 'Printing', source: 'Cartoon', weight: 0.9},
                        // {target: 'Printing', source: 'Casual Wear', weight: 0.9},
                        //
                        // {target: 'Fur', source: 'Fleece', weight: 0.9},
                        // {target: 'Fur', source: 'Casual Wear', weight: 0.9},
                        // {target: 'Fur', source: 'For Banquet', weight: 0.9},
                        //
                        // {target: 'Fleece', source: 'Casual Wear', weight: 0.9},
                        //
                        // {target: 'Cartoon', source: 'Casual Wear', weight: 0.9},
                        //
                        // {target: 'Casual Wear', source: 'For Sports', weight: 0.9},
                        //
                        // {target: 'Formal Wear', source: 'For Banquet', weight: 0.9}


                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
);
