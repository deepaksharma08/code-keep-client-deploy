import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { EditSnippetDialogComponent } from './edit-snippet-dialog.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 19f85d0899f1db0d9e89972765bc025d01eeca4f



@NgModule({
  declarations: [EditSnippetDialogComponent],
  imports: [
    CommonModule,
<<<<<<< HEAD
    DialogModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
=======
    DialogModule
  ],
  exports: [
>>>>>>> 19f85d0899f1db0d9e89972765bc025d01eeca4f
    EditSnippetDialogComponent
  ]
})
export class EditSnippetDialogModule { }
