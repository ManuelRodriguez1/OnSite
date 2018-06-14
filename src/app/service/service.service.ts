import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Model } from '../model/model';


@Injectable()
export class ServiceService {

  list: AngularFireList<any>;

  lista: Model = new Model();

  constructor(private fd: AngularFireDatabase) { }

  getData(){
    return this.list = this.fd.list('Categorias', ref => ref.orderByChild('nombre'));
  }

}
