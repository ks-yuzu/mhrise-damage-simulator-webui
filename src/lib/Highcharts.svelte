<script lang="ts">
  import {onMount, afterUpdate} from "svelte"
  import _, {debounce}          from 'lodash'
  import * as Highcharts        from 'highcharts'
  // https://api.highcharts.com/highcharts/
  import resize                 from '$lib/resize'
  import {isSeriesVisible}      from '$lib/store'

  export let chartId: string              = 'chart'
  export let series:  Highcharts.SeriesOptionsType[] = []
  export let onClick: (x: number, y: number|undefined, pointName: string, seriesName: string) => void

  let chart:      Highcharts.Chart | null
  let chartWidth: number

  onMount(() => init())
  afterUpdate(() => {
    if      (chart == null)                                                { draw() }
    else if (_.differenceBy(chart.series, series, s => s.name).length > 0) { draw() }
    else                                                                   { updateSeries() }
  })

  function init() {
    Highcharts.theme = {
      colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
               '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      chart: {
        backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
            [0, '#2a2a2e'],
            [1, '#2a2a2e'],
          ]
        },
        style: {},
        plotBorderColor: '#606063'
      },
      title: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase',
          fontSize: '20px'
        }
      },
      subtitle: {
        style: {
          color: '#E0E0E3',
          textTransform: 'uppercase'
        }
      },
      xAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      yAxis: {
        gridLineColor: '#707073',
        labels: {
          style: {
            color: '#E0E0E3'
          }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
          style: {
            color: '#A0A0A3'
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
          color: '#F0F0F0'
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            color: '#F0F0F3',
            style: {
              fontSize: '13px'
            }
          },
          marker: {
            lineColor: '#333'
          }
        },
        boxplot: {
          fillColor: '#505053'
        },
        candlestick: {
          lineColor: 'white'
        },
        errorbar: {
          color: 'white'
        }
      },
      legend: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        itemStyle: {
          color: '#E0E0E3'
        },
        itemHoverStyle: {
          color: '#FFF'
        },
        itemHiddenStyle: {
          color: '#606063'
        },
        title: {
          style: {
            color: '#C0C0C0'
          }
        }
      },
      credits: {
        style: {
          color: '#666'
        }
      },
      labels: {
        style: {
          color: '#707073'
        }
      },
      drilldown: {
        activeAxisLabelStyle: {
          color: '#F0F0F3'
        },
        activeDataLabelStyle: {
          color: '#F0F0F3'
        }
      },
      navigation: {
        buttonOptions: {
          symbolStroke: '#DDDDDD',
          theme: {
            fill: '#505053'
          }
        }
      },
      // scroll charts
      rangeSelector: {
        buttonTheme: {
          fill: '#505053',
          stroke: '#000000',
          style: {
            color: '#CCC'
          },
          states: {
            hover: {
              fill: '#707073',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            },
            select: {
              fill: '#000003',
              stroke: '#000000',
              style: {
                color: 'white'
              }
            }
          }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
        },
        labelStyle: {
          color: 'silver'
        }
      },
      navigator: {
        handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
        },
        xAxis: {
          gridLineColor: '#505053'
        }
      },
      scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#606063',
        buttonBorderColor: '#606063',
        rifleColor: '#FFF',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
      }
    }
    Highcharts.setOptions(Highcharts.theme)
  }

  function draw() {
    if (typeof Highcharts.chart !== 'function') { return }

    chart = Highcharts.chart(chartId, {
      chart: {
        width: chartWidth,
      },
      title: {
        text: undefined, // required to hide chart title
      },
      yAxis: {
        title: {
          text: 'ダメージ期待値',
        },
      },
      xAxis: {
        allowDecimals: false,
        min: 0,
        // max: 7,
        title: {
          // text: '追加スキル (Lv)',
          text: '追加スキル (Lv × スロット)',
        },
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          events: {
            click: (e) => {
              console.log(e)
              onClick(e.point.x, e.point.y, e.point.name, e.point.series.name)
            },
            legendItemClick: (e) => {
              const {name, visible} = e.target
              isSeriesVisible.update(v => {
                v[name] = !visible // click 時の visibility なので反転して保存
                return v
              })
            },
          },
          pointStart: 0,
        }
      },

      series: series,

      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    })
  }

  function updateSeries() {
    chart?.update({series})
  }

  function onResize(e: Event) {
    const width = (e.target as HTMLElement)?.clientWidth
    const height = (e.target as HTMLElement)?.clientHeight
    if (width) { chart?.setSize(width, height) }
  }
</script>

<div id={chartId}
     class="chart"
     style="width: 100%; height: 100%;"
     bind:clientWidth={chartWidth}
     use:resize
     on:resize={debounce(onResize, 100)}
     >
</div>

<style>
  :global(.chart > .div) {
    width:  100% !important;
    height: 100% !important;
  }
</style>
