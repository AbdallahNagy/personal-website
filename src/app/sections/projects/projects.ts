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
      title: 'Project One',
      description: 'A full-stack web application with real-time features, built with Angular and .NET Core.',
      tags: ['Angular', '.NET', 'PostgreSQL', 'Docker'],
      github: '#',
      live: '#',
    },
    {
      title: 'Project Two',
      description: 'REST API service with authentication, caching, and automated deployment pipeline.',
      tags: ['Node.js', 'TypeScript', 'Redis', 'Azure'],
      github: '#',
    },
    {
      title: 'Project Three',
      description: 'Open source CLI tool for automating development workflows.',
      tags: ['TypeScript', 'Node.js', 'Shell'],
      github: '#',
      live: '#',
    },
  ];
}
