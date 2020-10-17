import React, { useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

function PieChart(){
  var dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#B3B6B7',
                '#A533FF',
                '#311846',
                '#6D6673'
            ]
        }],

    labels: []

};

  function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}

// const[posts, setPosts] = useState([])
    useEffect(() => {
    axios.get('http://localhost:3000/budget')
    .then(res => {
      console.log(res);
      for (var i = 0; i < res.data.myBudget.length; i++) {
          dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
          dataSource.labels[i] = res.data.myBudget[i].title;
      }
      createChart();
        })
      })
      return (
        <div>

        </div>
      );

}
export default PieChart;