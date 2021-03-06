import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


import { 
  SettingsService, 
  SharedService, 
  SidebarService,
  UsuarioService,
  LoginGuardGuard,
  AdminGuard,
  VerificaTokenGuard,  
  SubirArchivoService,
  HospitalService,
  MedicoService
} from "./service.index";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService, 
    SharedService, 
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService,
    VerificaTokenGuard
  ],
  declarations: []
})
export class ServiceModule { }
