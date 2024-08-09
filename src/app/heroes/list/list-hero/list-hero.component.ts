import { Component } from '@angular/core';

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.css'
})
export class ListHeroComponent {
  public heroNames:string[]=['spiderman','ironMan','She Hulk','Hulk']
  public removedHero?:string='';
  eraseLastHero(){
    this.removedHero= this.heroNames.pop()
  }
  
}
