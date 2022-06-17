import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})
export class ProgramFormComponent implements OnInit {
  programForm: FormGroup;
  @Output() submit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.programForm = fb.group({
      code: '',
      name: '',
      description: ''
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const payload = this.programForm.value;
    this.http.post('http://localhost:3000/programs', payload).subscribe((res) => {
      console.log(res);
      
    })
  }

}
