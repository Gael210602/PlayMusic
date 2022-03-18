import { Component, Fragment } from 'react';
import inter from '../../../Complements/Images/inter.jpeg'
import easy from '../../../Complements/Images/easy.jpeg'
import hard from '../../../Complements/Images/hard.jpeg'

export default class Handbook extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Fragment>
        <div class="row text-center">
          <div class="col-12">
            <br/>
            <h1 className='dark-text'>¿Cómo jugar?</h1>
            <br/>
          </div>
        </div>
        <div class="row text-div">
          <div class="col-4">
            <img src={easy} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Fácil <br/> En esta modalidad, el usuario únicamente debe seguir un solo indicador (representado por los círculos amarillos), los cuales se desplazan de izquierda a derecha. El momento adecuado para seguir el patrón rítmico, es cuando el indicador se posiciona sobre la línea blanca. El jugador contará con cierto margen de error; no obstante, entre mayor precisión mayor será el puntaje que reciba. Cuenta con 3 corazones, las cuales representan gráficamente los intentos que tiene el usuario para equivocarse. Al seguir correctamente el ritmo, se irán acumulando puntos. Si se conserva una racha, el contador de puntos aumentará con mayor rapidez (esto aplica para las 3 dificultades).</p>
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Intermedia <br/> Para este modo, se aumenta el número de elementos que pueden ser utilizados para el patrón rítmico y cuenta también con los 3 corazones para mostrar los intentos restantes. Al presionar una tecla incorrecta o fuera del margen del tiempo, el usuario perderá medio corazón.</p>
          </div>
          <div class="col-4">
            <img src={inter} alt="" className='info-img' />
          </div>
        </div>
        <br />
        <div class="row text-div">
          <div class="col-4">
            <img src={hard} alt="" className='info-img' />
          </div>
          <div class="col-8">
            <br />
            <br />
            <br />
            <br />
            <p className='dark-text'>Dificultad: Difícil <br /> Este tipo de niveles presentan una mecánica similar a la anterior, añadiendo elementos de distracción, los cuales si se presionan, se le restará un corazón completo al jugador. De igual forma, la velocidad será mayor con respecto a los anteriores. Se aplican las mismas reglas que en la modalidad anterior con relación a las teclas incorrectas o fuera del margen del tiempo.</p>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}
