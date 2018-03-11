import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario';
import { Hospital } from '../../models/hospital';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {


  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { 
  }
  

  cargarHospitales() {
    let url = URL_SERVICIOS + '/hospital';

    return this.http.get( url );
  }


  obtenerHospital(	id:	string	) {

    let url = URL_SERVICIOS + '/hospital/' + id;

    return this.http.get(url);
  }

  borrarHospital(	id:	string	) {
    let url = URL_SERVICIOS + '/hospital/' + id + '?token=' + this._usuarioService.token;

    return this.http.delete(url)
                .map(resp => {
                  swal('Usuario borrado', 'El usuario ha sido eliminado correctamente', 'success');
                  return true;
                });
  }

  crearHospital(	nombre:	string	) {
    let url = URL_SERVICIOS + '/hospital?token=' + this._usuarioService.token;


    return this.http.post( url, { nombre })
                .map( (resp: any) => {

                  swal('Hospital creado', nombre, 'success');
                  return resp.hospital;
                });
  }

  buscarHospital(	termino:	string	) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;

    return this.http.get(url)
                .map((resp: any) => resp.hospitales);
  }

  actualizarHospital(	hospital:	Hospital	) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id + '?token=' + this._usuarioService.token;

    return this.http.put(url, hospital)
              .map((resp: any) => {

                swal('Hospital actualizado', hospital.nombre, 'success');

                return true;
              });
  }

}
