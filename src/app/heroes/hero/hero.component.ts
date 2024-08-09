import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
name="Angular";
cellphone="1234";
age="15";

changeNumber(){
  this.cellphone="0984239318"
}
changeName(){
  this.name="ReactJs".toUpperCase()
}
changeHeroDescription():string{
  return `${this.age} - ${this.name}`
}
reset():string{
  return this.name='AngularJs'
}
}
