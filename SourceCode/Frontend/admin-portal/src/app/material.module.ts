import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,
  MatSelectModule, MatSlideToggleModule, MatSliderModule,
  MatDatepickerModule, MatNativeDateModule, MatListModule, MatIconModule, MatDialogModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule,
    MatNativeDateModule, MatListModule, MatIconModule, MatDialogModule],

  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule,
    MatGridListModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatDatepickerModule,
    MatNativeDateModule, MatListModule, MatIconModule, MatDialogModule],
})
export class MaterialModule { }
