import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly skills = [
    'TypeScript', 'Angular', 'React', 'Node.js',
    '.NET', 'C#', 'SQL', 'PostgreSQL',
    'Docker', 'Git', 'REST APIs', 'Azure',
  ];
}
