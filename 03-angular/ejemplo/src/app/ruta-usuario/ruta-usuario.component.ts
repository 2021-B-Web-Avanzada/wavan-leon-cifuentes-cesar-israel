import {Component, OnInit} from '@angular/core';
import {UserJphService} from "../app/servicios/http/user-jph.service";
import {UserJphInterface} from "../app/servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[] = []
  buscarUsuario = ''

  constructor(
    private readonly userJphService: UserJphService,
    private readonly router : Router,
    private readonly  activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const parametroURL$ = this.activateRoute
      .queryParams;
    parametroURL$
      .subscribe(
        {
          next:(queryParams)=>{//try
            this.buscarUsuario = queryParams['name']
            this.buscarUsuarios()
          },
          error:()=>{//catch

          },
          complete:()=>{//finally

          }
        }

      )
  }

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app','usuario'], //armamos la URL /app/usuario
        {
          queryParams:{
            name: this.buscarUsuario
          }
        }
      )
  }

  buscarUsuarios() {
    this.userJphService
      .buscarTodos({
        name: this.buscarUsuario
      })
      .subscribe({
          next: (datos) => {
            this.arreglo = datos
            this.buscarUsuario = ''
          },
          error: (error) => {
            console.log({error})
          }
        }
      )
  }

  gestionarUsuario(id: number) {

  }
}
