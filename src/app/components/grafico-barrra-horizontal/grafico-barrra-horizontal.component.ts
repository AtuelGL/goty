import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barrra-horizontal',
  templateUrl: './grafico-barrra-horizontal.component.html',
  styleUrls: ['./grafico-barrra-horizontal.component.css']
})
export class GraficoBarrraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 10
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 5
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // this.intervalo = setInterval( () => {

    //   const newResults = [...this.results];

    //   // tslint:disable-next-line: forin
    //   for (let i in newResults){
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults]
    // }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    // clearInterval(this.intervalo);
  }

}
