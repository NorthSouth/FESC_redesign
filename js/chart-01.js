    google.charts.load('current', {
      'packages': ['corechart']
    });


    var ufOrange='#b84300';   
    var ufBlue='#00529b';  

    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);

    function drawChart1() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'BTU (billions)'],
        ['1960', 35680],
        ['1961', 34417],
        ['1962', 35826],
        ['1963', 38613],
        ['1964', 39016],
        ['1965', 39916],
        ['1966', 42760],
        ['1967', 44550],
        ['1968', 49556],
        ['1969', 51489],
        ['1970', 51035],
        ['1971', 49968],
        ['1972', 54389],
        ['1973', 56250],
        ['1974', 52429],
        ['1975', 50007],
        ['1976', 56507],
        ['1977', 59953],
        ['1978', 65357],
        ['1979', 69419],
        ['1980', 90049],
        ['1981', 83117],
        ['1982', 104674],
        ['1983', 91705],
        ['1984', 108740],
        ['1985', 110698],
        ['1986', 116356],
        ['1987', 107606],
        ['1988', 113802],
        ['1989', 232261],
        ['1990', 198986],
        ['1991', 212955],
        ['1992', 230779],
        ['1993', 217028],
        ['1994', 215563],
        ['1995', 220211],
        ['1996', 240343],
        ['1997', 231308],
        ['1998', 205485],
        ['1999', 204114],
        ['2000', 194952],
        ['2001', 158038],
        ['2002', 174327],
        ['2003', 188473],
        ['2004', 179462],
        ['2005', 183175],
        ['2006', 185564],
        ['2007', 190489],
        ['2008', 195232],
        ['2009', 213642],
        ['2010', 223518],
        ['2011', 222956],
        ['2012', 220020],
        ['2013', 229666],
        ['2014', 226863],
        ['2015', 234192]
      ]);

      var options = {
        title: 'Renewable Energy Production (Florida)',
        curveType: 'function',
        titleTextStyle: { 
          fontSize: 17,
          fontName: 'Colaborate-Regular'
        },
        series: {
          0: {
            color: '#00529b'
          }
        },
        chartArea: {
          backgroundColor: 
          {
            fill: '#fffdf5'
          }
        },
        legend: {
          position: 'bottom'
        },
        forceIFrame: 'false'
      };

      var chart1 = new google.visualization.LineChart(document.getElementById('line_chart_1'));

      chart1.draw(data, options);
    }

    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'BTU (billions)'],
        ['1960', 57344],
        ['1961', 62705],
        ['1962', 71216],
        ['1963', 78258],
        ['1964', 87016],
        ['1965', 95878],
        ['1966', 108610],
        ['1967', 119314],
        ['1968', 135509],
        ['1969', 153032],
        ['1970', 171346],
        ['1971', 188564],
        ['1972', 209665],
        ['1973', 237104],
        ['1974', 235482],
        ['1975', 242096],
        ['1976', 252408],
        ['1977', 270767],
        ['1978', 289031],
        ['1979', 295551],
        ['1980', 309694],
        ['1981', 317921],
        ['1982', 315744],
        ['1983', 329216],
        ['1984', 353246],
        ['1985', 379307],
        ['1986', 398095],
        ['1987', 417862],
        ['1988', 444382],
        ['1989', 472473],
        ['1990', 489741],
        ['1991', 499299],
        ['1992', 501598],
        ['1993', 521176],
        ['1994', 544365],
        ['1995', 571483],
        ['1996', 586291],
        ['1997', 597240],
        ['1998', 639254],
        ['1999', 638966],
        ['2000', 668216],
        ['2001', 684966],
        ['2002', 718136],
        ['2003', 741696],
        ['2004', 745810],
        ['2005', 767622],
        ['2006', 778685],
        ['2007', 788461],
        ['2008', 771702],
        ['2009', 766848],
        ['2010', 788887],
        ['2011', 768009],
        ['2012', 752941],
        ['2013', 757189],
        ['2014', 771379],
        ['2015', 803865],
        ['2016', 804283]

      ]);

      var options = {
        title: 'Electricity, total consumption (Florida)',
        curveType: 'function',
        titleTextStyle: { 
          fontSize: 17,
          fontName: 'Colaborate-Regular'
        },
        series: {
          0: {
            color: '#00529b'
          }
        },
        legend: {
          position: 'bottom'
        },
        chartArea: {
          backgroundColor: 
          {
            fill: '#fffdf5'
          }
        },
        forceIFrame: 'false'        
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_chart_2'));

      chart.draw(data, options);
    }
    function drawChart3() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Total Consumption','Renewable Production'],
        ['1960', 57344,35680 ],
        ['1961', 62705,34417 ],
        ['1962', 71216,35826 ],
        ['1963', 78258,38613 ],
        ['1964', 87016,39016 ],
        ['1965', 95878, 39916],
        ['1966', 108610,42760 ],
        ['1967', 119314,44550 ],
        ['1968', 135509,49556 ],
        ['1969', 153032, 51489],
        ['1970', 171346,51035 ],
        ['1971', 188564,49968],
        ['1972', 209665,54389 ],
        ['1973', 237104,56250 ],
        ['1974', 235482,52429 ],
        ['1975', 242096,50007],
        ['1976', 252408,56507 ],
        ['1977', 270767, 59953],
        ['1978', 289031, 65357],
        ['1979', 295551, 69419],
        ['1980', 309694, 90049],
        ['1981', 317921, 83117],
        ['1982', 315744, 104674],
        ['1983', 329216, 91705],
        ['1984', 353246, 108740],
        ['1985', 379307,110698],
        ['1986', 398095, 116356],
        ['1987', 417862, 107606],
        ['1988', 444382, 113802],
        ['1989', 472473, 232261],
        ['1990', 489741, 198986],
        ['1991', 499299, 212955],
        ['1992', 501598, 230779],
        ['1993', 521176, 217028],
        ['1994', 544365, 215563],
        ['1995', 571483, 220211],
        ['1996', 586291, 240343],
        ['1997', 597240, 231308],
        ['1998', 639254, 205485],
        ['1999', 638966, 204114],
        ['2000', 668216, 194952],
        ['2001', 684966, 158038],
        ['2002', 718136, 174327],
        ['2003', 741696, 188473],
        ['2004', 745810, 179462],
        ['2005', 767622, 183175],
        ['2006', 778685, 185564],
        ['2007', 788461, 190489],
        ['2008', 771702, 195232],
        ['2009', 766848, 213642],
        ['2010', 788887, 223518],
        ['2011', 768009, 222956],
        ['2012', 752941, 220020],
        ['2013', 757189, 229666],
        ['2014', 771379, 226863],
        ['2015', 803865, 234192]
      ]);

      var options = {
        title: 'Electrical Consumption vs Production (Florida)',
        curveType: 'function',
        titleTextStyle: { 
          fontSize: 17,
          fontName: 'Colaborate-Regular'
        },
        series: {
          0: {
            color: '#00529b'
          },
          1: {
            color: '#b84300'
          }
        },
        chartArea: {
          backgroundColor: 
          {
            fill: '#fffdf5'
          }
        },
        legend: {
          position: 'bottom'
        },
        vAxes: [
          {
            title:'BTU (billions)'
          }
        ],
        forceIFrame: 'false'
      };

      var chart = new google.visualization.LineChart(document.getElementById('line_chart_3'));

      chart.draw(data, options);
    }