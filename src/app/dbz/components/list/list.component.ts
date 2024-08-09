import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dbz } from '../../interfaces/dbz.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Dbz[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter( id?: string ):void {
    if ( !id ) return;
    this.onDelete.emit( id );
    console.log(id);
    
  }

}