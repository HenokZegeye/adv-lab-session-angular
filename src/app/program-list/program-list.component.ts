import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  programs: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPrograms();
  }


  loadPrograms(): void {
    this.http.get('http://localhost:3000/programs').subscribe((response: any) => {
      this.programs = response.data;
    })
  }

}
