import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mini-student-application-client';

  
  
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    // this.loadPrograms();
  }

  // loadPrograms(): void {
  //   this.http.get('http://localhost:3000/programs').subscribe((res: any) => {
  //     if(res.success) {
  //       this.programs = res.data;
  //     }
  //   })
  // }

  onSubmit(): void {
    // const payload = this.programForm.value;
    // this.programs.push(payload);
    // this.programForm.patchValue({code: '', name: '', description: ''});
  }
}
