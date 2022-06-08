import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  programs = [
    {name: 'Software Engineering', code: 'SWENG', description: 'Cool Program'},
    {name: 'IT and Systems', code: 'ITSYS', description: ''},
    {name: 'Program three', code: 'Program 3', description: ''}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
