<<<<<<< HEAD
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SnippetDTO } from 'src/app/domain/snippet-response';

@Component({
  selector: 'edit-snippet-dialog',
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-snippet-dialog',
>>>>>>> 19f85d0899f1db0d9e89972765bc025d01eeca4f
  templateUrl: './edit-snippet-dialog.component.html',
  styleUrls: ['./edit-snippet-dialog.component.css']
})
export class EditSnippetDialogComponent implements OnInit {
<<<<<<< HEAD
  display: boolean = false;
  form: FormGroup;
  currentSnippet: SnippetDTO;

  @Output()
  editedSnippet: EventEmitter<SnippetDTO> = new EventEmitter();
=======
>>>>>>> 19f85d0899f1db0d9e89972765bc025d01eeca4f

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
    console.log("Edit Snippet Dialog initiated!");

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required)
    })
  }

  get f() {
    return this.form.controls;
  }

  public open(input: SnippetDTO) {
    this.display = true;
    this.currentSnippet = input;
    console.log(this.currentSnippet.title);
    this.f['title'].setValue(this.currentSnippet.title);
    this.f['code'].setValue(this.currentSnippet.code);
    this.f['description'].setValue(this.currentSnippet.description);
  }

  public close() {
    this.display = false;
    this.form.patchValue({
      title: '',
      code: '',
      description: ''
    })
  }

  public saveChanges() {
    let editedSnippet: SnippetDTO = {
      title: this.f['title'].value,
      code: this.f['code'].value,
      userId: this.currentSnippet.userId,
      type: this.currentSnippet.type,
      description: this.f['description'].value,
      id: this.currentSnippet.id
    }
    this.editedSnippet.emit(editedSnippet);
    this.close();
  }
=======
  }

>>>>>>> 19f85d0899f1db0d9e89972765bc025d01eeca4f
}
