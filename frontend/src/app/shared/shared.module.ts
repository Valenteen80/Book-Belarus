import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';



@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, DropdownModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule, DropdownModule],
})
export class SharedModule { }
