import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barrra-horizontal',
  templateUrl: './grafico-barrra-horizontal.component.html',
  styleUrls: ['./grafico-barrra-horizontal.component.css']
})
export class GraficoBarrraHorizontalComponent {

  results: any[] =[
    {
      "name": "Juego1",
      "value": 10
    },
    {
      "name": "Juxego2",
      "value": 25
    },
    {
      "name": "Juego3",
      "value": 5
    },
    {
      "name": "Juego4",
      "value": 30
    }
  ];

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

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

}
