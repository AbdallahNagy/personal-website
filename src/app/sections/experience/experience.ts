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
      company: 'Company Name',
      period: '2023 — Present',
      bullets: [
        'Built and maintained scalable web applications using Angular and .NET.',
        'Designed RESTful APIs consumed by web and mobile clients.',
        'Improved CI/CD pipelines, reducing deployment time by 40%.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Previous Company',
      period: '2021 — 2023',
      bullets: [
        'Developed full-stack features across React frontend and Node.js backend.',
        'Collaborated with cross-functional teams in an Agile environment.',
        'Wrote unit and integration tests, raising coverage from 40% to 85%.',
      ],
    },
  ];
}
