import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor( private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
      .subscribe(res => {
        // console.log(res);
        this.juegos = res;
      });
  }

  votarJuego(juego: Game){
    this.gameService.votarJuego(juego.id)
    .subscribe((resp: any) =>{
      if (resp.ok){
        Swal.fire('Voto enviado', resp.mensaje, 'success');
      }else{
        Swal.fire('Oops!', resp.mensaje, 'error');
      }
    });
  }

}
