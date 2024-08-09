import { Component, EventEmitter, Output } from '@angular/core';
import { Dbz } from './interfaces/dbz.interface';
import { DbzService } from './services/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css',
  
})
export class DbzComponent {
  constructor(public dbzService:DbzService){
  }
   // onDelete = Index value : number
   @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();
 
  onDeleteCharacter( id?: string ):void {

    if ( !id ) return;
    this.onDelete.emit( id );
  }
}

