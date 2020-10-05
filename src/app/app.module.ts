import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from "./product.component";
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent] // başlangıç "component"i
})
export class AppModule { }
