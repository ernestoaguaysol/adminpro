import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { HospitalService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';


@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = [];

  totalRegistros: number = 0;

  cargando: boolean = true;

  constructor(
    public _hospitalService: HospitalService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarHospitales();

    this._modalUploadService.notificacion
          .subscribe(resp => this.cargarHospitales());
  }

  mostrarModal( id: string ) {

    this._modalUploadService.mostrarModal( 'hospitales', id );
  }

  cargarHospitales() {

    this.cargando = true;
    this._hospitalService.cargarHospitales()
    .subscribe((resp: any) => {
      
      
      this.totalRegistros = resp.total;
      
      this.hospitales = resp.hospitales;

      console.log(this.hospitales);
      
    });
    this.cargando = false;
  }

  crearHospital() {

    
    swal({
      title: 'Crear Hospital',
      text: 'Ingrese el nombre del hospital',
      content: {
        element: "input",
        attributes: {
          placeholder: "Nombre de hospital",
        },
      },
      buttons: ['Cancelar', 'Crear Hospital'],
      dangerMode: true
    })
    .then(valor => {
      
      if (valor || valor.length === 0) {
        this._hospitalService.crearHospital(valor)
              .subscribe(resp => {
                console.log(resp);
                this.cargarHospitales();
                
              });
      }
    });
  }

  buscarHospital( termino: string) {

    console.log(termino);
    

    if (termino.length <= 0) {
      this.cargarHospitales();
      return;
    }

    this.cargando = true;

    this._hospitalService.buscarHospital(termino)
          .subscribe((hospitales: Hospital[]) => {
            this.hospitales = hospitales;
            this.cargando = false;
          });
    
  }

  borrarHospital( id: string ) {

    swal({
      title: '¿Está seguro?',
      text: 'Está a punto de borrar el hospital ',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    })
    .then(borrar => {
      
      if (borrar) {
        this._hospitalService.borrarHospital(id)
              .subscribe(borrado => {
                console.log(borrado);
                this.cargarHospitales();
                
              });
      }
    });
  }

  guardarHospital(	hospital:	Hospital	) {
    this._hospitalService.actualizarHospital(hospital)
          .subscribe();
  }

}
