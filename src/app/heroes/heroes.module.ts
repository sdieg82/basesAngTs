import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroComponent } from './list/list-hero/list-hero.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    ListHeroComponent,
    HeroComponent,
  ],
  exports:[
    ListHeroComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class HeroesModule { }
