import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mini-student-application-client';

  programs = [
    {name: 'Software Engineering', code: 'SWENG', description: 'Cool Program'},
    {name: 'IT and Systems', code: 'ITSYS', description: ''},
    {name: 'Program three', code: 'Program 3', description: ''}
  ];
  programForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.programForm = fb.group({
      code: '',
      name: '',
      description: ''
    })
  }

  onSubmit(): void {
    const payload = this.programForm.value;
    this.programs.push(payload);
    this.programForm.patchValue({code: '', name: '', description: ''});
  }
}
