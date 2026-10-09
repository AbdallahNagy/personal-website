import { Component } from '@angular/core';

export interface ProjectTool {
  name: string;
  description: string;
}

export interface Project {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tools: ProjectTool[];
  stack: string[];
  website: string;
  download: string;
  github: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly project: Project = {
    title: 'Power Tools',
    tagline: 'A free, modern XrmToolBox alternative for Dataverse & Dynamics 365.',
    description:
      'An open-source Windows desktop toolkit that brings migration, FetchXML, plug-in registration and metadata work into one workspace. Each tool opens in its own tab and keeps its own state, so you can work across environments without losing context.',
    highlights: [
      'Your data stays local — the app talks to Dataverse directly from your machine through a local API bound to 127.0.0.1.',
      'Connects to Online environments with Microsoft sign-in, and to on-premises with Active Directory or IFD.',
      'One-click Windows installer, and the app checks for new releases on its own.',
      'CI on Windows type-checks, lints with zero warnings, runs unit tests and an Electron smoke test.',
    ],
    tools: [
      { name: 'Data Migration', description: 'Move data between environments with a guided workflow.' },
      { name: 'Plugin Registration', description: 'Manage assemblies, types, steps and images.' },
      { name: 'FetchXML Builder', description: 'Build, run and refine FetchXML queries.' },
      { name: 'FetchXML Tester', description: 'Run queries as written and keep a query library.' },
      { name: 'Attribute Explorer', description: 'Inspect every table, field, type and lookup.' },
      { name: 'Polymorphic Lookup Creator', description: 'Create, update and delete polymorphic lookups.' },
      { name: 'Workflow Activities Viewer', description: 'Find processes that use a custom workflow activity.' },
    ],
    stack: ['Electron', 'React', 'TypeScript', 'ASP.NET Core', '.NET 9', 'Dataverse'],
    website: 'https://powertools.abdallahnagy.com/',
    download: 'https://github.com/AbdallahNagy/PowerTools/releases/latest/download/PowerTools-Setup.exe',
    github: 'https://github.com/AbdallahNagy/PowerTools',
  };
}
