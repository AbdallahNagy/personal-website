import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly skills = [
    'Node.js',
    'Angular',
    'React',
    'Typescript',
    '.NET Core',
    'C#',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Git',
    'REST APIs',
  ];
}
