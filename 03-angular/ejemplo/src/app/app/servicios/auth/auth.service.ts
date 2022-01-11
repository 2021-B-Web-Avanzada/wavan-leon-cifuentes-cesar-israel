import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  estarLogeado = true;

  roles =[
    'admin',
    'supervisor',
    'usuario'
  ];
}
