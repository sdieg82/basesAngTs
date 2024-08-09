import { Injectable } from '@angular/core';
import { Dbz } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Dbz[]=[{
    id:uuid(),
    name:'Krilin',
    power:1000
  },
  {
    id:uuid(),
    name:'Kid Goku',
    power:500
  },
  {
    id:uuid(),
    name:'Vegeto',
    power:10000
  }]

  onNewEventCharacter(character:Dbz):void{
    const newCharacter:Dbz={
      id:uuid(),
      ...character
    }
    this.characters.push(newCharacter)
  }

  // onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }
  constructor() { }
}
