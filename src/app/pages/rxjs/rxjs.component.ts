import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  
  constructor() { 

    
    
    this.regresaObservable().retry(2)
      .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obs (dos veces)', error),
      () => console.log('El observador terminó!')
      
    );
  }

  ngOnInit() {
  }

  regresaObservable(): Observable<number> {
    return new Observable( observer => {
      
    let contador = 0;

    let intervalo = setInterval( () => {
      
      contador++;

      observer.next( contador );

      if (contador === 3) {
        clearInterval(intervalo);
        observer.complete();
      }

      if (contador === 2 ) {
        // clearInterval(intervalo);
        observer.error('Auxilio!!');
      }

    }, 1000 );

    
  });

  }

}
