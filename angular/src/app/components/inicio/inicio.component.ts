import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from '../../service/reserva.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  reservaForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    ngZone: NgZone,
    private reservaService: ReservaService
  ) {
    this.reservaForm = this.formBuilder.group({
      title: [''],
      where: [''],
      price: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.reservaService.AddReserva(this.reservaForm.value)
      .subscribe(() => {
        console.log('Dados adicionados com sucesso')
        this.NgZone.run(() => this.router.navigateByUrl('/reservas-list'))
      }, (err) => {
        console.log(err)
      })
  }

}
