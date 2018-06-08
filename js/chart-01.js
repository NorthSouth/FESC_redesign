    google.charts.load('current', {
      'packages': ['corechart']
    });


    var ufOrange='#b84300';   
    var ufBlue='#00529b';  

    google.charts.setOnLoadCallback(getData1); // need to get data first!
    google.charts.setOnLoadCallback(getData2); // need to get data first!
    
    let testData="";
    usefulData1=[];
    usefulData2=[];
    usefulData3=[];



    function drawChart1() {
 
      usefulData1.unshift(["Year", "Billion BTUs"]);
      
      var data = google.visualization.arrayToDataTable(usefulData1);
      
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
      usefulData2.unshift(["Year", "Billion BTUs"]);
      
      var data = google.visualization.arrayToDataTable(usefulData2);
      
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
      console.log(usefulData1.length);
      console.log(usefulData2.length);
      
        for (i=1; i < usefulData1.length; i++){
          usefulData3.push([usefulData1[i][0],usefulData1[i][1],usefulData2[i][1]]);
        }
      usefulData3.unshift(['Year', 'Total Consumption','Renewable Production']);
     
      var data = google.visualization.arrayToDataTable(usefulData3);
      
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

 
    function getData1() {
      // Create a new request object
      let request = new XMLHttpRequest()
          
      let requestUrl = "https://api.eia.gov/series/?api_key=633efc9726e63241c5c5036ce19692eb&series_id=SEDS.REPRB.FL.A"
      // Open a connection
      request.open('GET', requestUrl, true)
      // Callback for when the request completes;
      request.onload = function() {
        
        usefulData1=JSON.parse(request.response).series[0].data.reverse();
        usefulData1.push(["2016",null]); //this data set has 1 fewer elements
        console.log("data set 1: ",usefulData1.length);
        
        console.log("response from server is: ", JSON.parse(request.response))
        
        drawChart1(usefulData1,'chart_div_1'); // call to Google Charts API
        drawChart3();
      }
      // Callback for when there's an error
      request.error = function(err) {
        console.log("error is: ", err)
      }
      // Send the request to the specified URL
      request.send()
    }
   
    
    function getData2() {
      // Create a new request object
      let request = new XMLHttpRequest()
      // TODO: URL to contact goes here
      let requestUrl = "https://api.eia.gov/series/?api_key=633efc9726e63241c5c5036ce19692eb&series_id=SEDS.TETCB.FL.A"
      // Open a connection
      request.open('GET', requestUrl, true)
      // Callback for when the request completes;
      request.onload = function() {
        
        usefulData2=JSON.parse(request.response).series[0].data.reverse();
        console.log("data set 2: ",usefulData2.length);
        
        console.log("response from server is: ", JSON.parse(request.response))
        
        //this data set has one more value than the other
        
        drawChart2(usefulData2,'chart_div_2'); // call to Google Charts API
        
      }
      // Callback for when there's an error
      request.error = function(err) {
        console.log("error is: ", err)
      }
      // Send the request to the specified URL
      request.send()
    }
   