import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../service/reserva.service';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  Reservas: any = [];

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(res => {
      console.log(res)
      this.Reservas = res;
    })
  }
}
