import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Model, Model2 } from '../model/model';


@Injectable()
export class ServiceService {

  list: AngularFireList<any>;

  lista: Model2 = new Model2();

  constructor(private fd: AngularFireDatabase) { }

  getData(){
    return this.list = this.fd.list('empleados');
  }

}
