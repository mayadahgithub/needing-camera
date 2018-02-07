import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';

 import { AngularFireDatabase ,AngularFireList ,AngularFireAction } from 'angularfire2/database';
 
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //search/
 
 //** */
 
 itemsRef: AngularFireList<any>;
 employees: Observable<any[]>;
 
 
 items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; 
 size$: BehaviorSubject<string|null>;
 
  

  constructor(public navCtrl: NavController,public af:AngularFireDatabase) {
   
    this.itemsRef =  af.list('/employ')
    this.employees = this.itemsRef.valueChanges() ;
 
   
 
    this.size$ = new BehaviorSubject(null); 
    this.items$ = this.size$.switchMap(size =>  
      af.list('employ', ref => 
        size ? ref.orderByChild('size').equalTo(size) : ref  
      ).snapshotChanges() 
    );
  
    this.items$.subscribe(actions => {
     actions.forEach(action => {
       console.log(action.type);
       console.log(action.key);
       console.log(action.payload.val());
     }) ; 
  
   });
 }
     
 
  
 

   //**search**/
   
  
   //*** */

  



  
}
