import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { GalleriaModule } from 'primeng/galleria';
import { EditorModule } from 'primeng/editor';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    GalleriaModule,
    EditorModule,
    DividerModule,
    CardModule,
    CarouselModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimeModule { }
