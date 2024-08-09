import { Component, EventEmitter, Output } from '@angular/core';
import { Dbz } from '../../../interfaces/dbz.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrl: './dbz-form.component.css'
})
export class DbzFormComponent {
  
  @Output()
  public onNewCharacter:EventEmitter<Dbz>=new EventEmitter
  
  public character:Dbz={
    name:'',
    power:0
  }

  saveCharacter(){
    if(this.character.name.length===0) return;
    this.onNewCharacter.emit(this.character)
  }
}
