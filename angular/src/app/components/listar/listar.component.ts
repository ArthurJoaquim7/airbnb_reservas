import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../service/reserva.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  Reservas: any = [];

  responsiveOptions;
  constructor(private reservaService: ReservaService) {
    
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.reservaService.getReservas().subscribe(res => {
      console.log(res)
      this.Reservas = res;
    })
  }

  delete(id: any, i: any) {
    console.log(id);
    this.reservaService.deleteReserva(id).subscribe(res => {
      this.Reservas.splice(i, 1);
      console.log("Deletado!")
    })
  }

}
