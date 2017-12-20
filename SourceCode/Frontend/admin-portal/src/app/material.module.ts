import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatGridListModule],
})
export class MaterialModule { }
