import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      'heading': 'Secondary Class',
      'institution': "Kendriya Vidyalaya No.1 Salt Lake, Kolkata",
      'degree': "Xth",
      'icon': 'dev-icon fa-solid fa-school'
    },
    {
      'heading': 'Sr Secondary Class',
      'institution': "Midfields Sr Sec School, Delhi",
      'degree': "XIIth",
      'icon': 'dev-icon fa-solid fa-building-columns'
    },
    {
      'heading': 'Graduation',
      'institution': "Delhi Technological University",
      'degree': "B.Tech",
      'icon': 'dev-icon fa-solid fa-graduation-cap'
    }
  ]

}
