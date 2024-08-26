import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservaService } from '../../service/reserva.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(

    public formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private ngZone: NgZone,
    private reservaService: ReservaService
  ) {

    this.getId = this.activateRoute.snapshot.paramMap.get('id');
    this.reservaService.getReserva(this.getId).subscribe(res => {
      console.log(res['reserva'])
      this.updateForm.setValue({
        title: res['reserva']['title'],
        where: res['reserva']['where'],
        price: res['reserva']['price'],
      });
    });

    this.updateForm = this.formBuilder.group({
      title: [''],
      where: [''],
      price: [''],
    })
  };

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.reservaService.updateReserva(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Dados atualizados com sucesso!')
        this.ngZone.run(() => this.router.navigateByUrl('/listar'))
      }, (err) => {
        console.log(err)
      })
  }

}
