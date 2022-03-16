import { Component, Fragment } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend, } from 'chart.js';
import { Doughnut, Bar } from'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default class MyStats extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const contdata = {
        labels: [
          'Victorias',
          'Derrotas',
        ],
        datasets: [{
          label: 'Promedio de victorias',
          data: [ 50,  50  ],
          backgroundColor: [
            'rgb(109, 199, 0)',
            'rgb(255, 15, 75)',
          ],
          hoverOffset: 4
        }]
    };
    const data = {
      labels: [
        'Maximo',
        'Minimo'
      ],
      datasets: [{
        label: 'Tiempos',
        data: [65, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    return (
      <Fragment>
        <div class="row text-center">
          <div class="col-12">
            <br/>
            <h1 className='dark-text'>Nuestras Estadísticas</h1>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <h2 className='dark-text'>Top score:</h2>
          </div>
          <div class="col-4">
            <h2 className='dark-text'>Minutos totales jugados:</h2>
          </div>
          <div class="col-4">
            <h2 className='dark-text'>Promedio de sesión:</h2>
          </div>
        </div>
        <br /><br />
        <div class="row text-div">
          <div class="col-6">
            <h2>Promedio de victorias:</h2>
            <Doughnut data={contdata} />
          </div>
          <div class="col-6">
            <h2 className='dark-text'>Tiempos máximo y mínimo:</h2>
            <Bar data={data} />

          </div>
        </div>

        <br />
      </Fragment>
    );
  }
}
