import { Component } from '@angular/core';
import { NavController ,NavParams,LoadingController} from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
import *as firebase from 'firebase';
//import {environmen } from '../../environments/environment';
  

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 peoplelist: AngularFireList<any>;
 selectedPhoto;
 loading;
 currentImage;


  constructor(public navCtrl: NavController ,public navparams:NavParams,public loadingctrl:LoadingController,
     public db:AngularFireDatabase) {
   
 this.peoplelist=db.list('/employ');//
 //firebase.initializeApp(environment.firebase);
 
  }
  
  
 createEmployee(firstname,lastname, address,phone,infor){
  this.peoplelist.push({
    key_id: new Date().getTime(),
      firstname :firstname ,
        lastname :lastname,
        address:address,
        phone : phone,
        infor:infor      
          
        }).then(newPerson => {

          this.navCtrl.push(HomePage);
        })
}

takePhoto(){


}



}
