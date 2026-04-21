import { Component } from '@angular/core';

export interface Job {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly jobs: Job[] = [
    {
      role: 'Full Stack Developer',
      company: 'Link Development',
      period: 'Jul 2023 — Jan 2025',
      bullets: [
        'Built and maintained scalable web applications using Angular and .NET.',
        'Developed reusable generic Angular components that are utilized across multiple services and modules throughout the application, enabling other developers to easily integrate common functionality.',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Link Development',
      period: 'Jan 2025 — Present',
      bullets: [
        'Upgraded our Angular project from v13 to v19 to leverage the latest framework features and improvements',
        'Designed and implemented CI/CD pipelines using Azure DevOps to automate deployment of APIs and portal across multiple environments, reducing manual effort by 12% to 15% and enhancing deployment reliability',
      ],
    },
  ];
}
