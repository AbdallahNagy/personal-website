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
      role: 'Senior Microsoft CRM Dynamics Developer',
      company: 'Link Development',
      period: 'Jan 2025 — Present',
      bullets: [
        'Developed and customized enterprise solutions using Microsoft Dynamics 365, Dataverse, Power Platform, C#, .NET Framework and JavaScript.',
        'Built Dynamics 365 plugins, custom workflow activities, business processes and client-side customizations to automate business operations and enforce complex business rules.',
        'Built automated CI/CD pipelines using Azure DevOps for API and portal deployments across all environments, reducing manual deployment effort by 10% and improving release consistency.',
        'Upgraded our Angular project from v13 to v19 to leverage the latest framework features and improvements.',
      ],
    },
    {
      role: 'Microsoft CRM Dynamics Developer',
      company: 'Link Development',
      period: 'Jul 2023 — Dec 2024',
      bullets: [
        'Designed and implemented REST API integrations between Dynamics 365 and external systems, including data mapping, authentication, error handling and troubleshooting.',
        'Designed and implemented Power Automate cloud flows to automate business processes, integrate Dataverse with external services, send notifications and reduce manual activities.',
      ],
    },
  ];
}
