import { Component } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly projects: Project[] = [
    {
      title: 'Power Tools',
      description:
        'Cross-platform desktop application providing developer utilities for Dynamics 365, including data migration, plugin registration, and automation tools. Built with Electron and Node.js for seamless performance.',
      tags: ['Electron', 'React', '.NET Core'],
      github: 'https://github.com/AbdallahNagy/PowerTools',
    },
    {
      title: 'E-Commerce web app',
      description:
        'Full-stack e-commerce platform with essential shopping features including product catalog, shopping cart, user authentication, and order management. Built with Angular and Node.js/MongoDB backend.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      github: 'https://github.com/AbdallahNagy/E-Commerce-Project',
    },
  ];
}
