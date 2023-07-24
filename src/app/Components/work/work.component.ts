import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {

  internships = [
    {
      'name': 'S.A.I.L',
      'duration': '1 Month',
      'exp': 'Worked on the project to develop Dshboard for CMO for company website. Used Reactjs for building user interfaces based on UI components.'
    },
    {
      'name': 'SoftR Infotech',
      'duration': '1 Month',
      'exp': 'Worked on the front end development of an Android project.'
    },
    {
      'name': 'B.A.R.C',
      'duration': '2 Months',
      'exp': 'Was responsible for data collection and data sorting.'
    }
  ]

  projects = [
    {
      'img': '../../../assets/VEstudy.png',
      'title': 'VEstudy',
      'desc': "Created an online platform to simply fy the online teaching experience of both teachers and studends. Here teachers can upload  timetamped notes which can be accessed by the studens during and online session or a recorded class. Multiple tools have been developved for the assistance of teachers and acceseebility of students.",
    },
    {
      'img': '../../../assets/dtuiif.png',
      'title': 'DTU IIF',
      'desc': "Developed and maintained the website for Delhi Technological University Innovation And Incubation Foundation while automating many featers. Optimized the site for future developers and initiated the generation of software documentation.",
    },
    {
      'img': '../../../assets/ncmei.jpg',
      'title': 'Cause List App',
      'desc': "Made an app to insert and update the cause dates of a case heard in a judicial court. Developed for National Commission for Minority Educational Institutions. Backend for the app was deployed on NIC server.",
    },
    {
      'img': '../../../assets/sudoku.png',
      'title': 'Sudoku Solver',
      'desc': "A web app to generate random, valid sudokus and check if the user is solving the sudoku corretly. A solver was implemented which can solve an user inputed sudoku. The sudoku size and dificulty level can be can be adjusted",
    },
  ]

}
