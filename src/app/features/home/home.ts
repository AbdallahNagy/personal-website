import { Component } from '@angular/core';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [About, Experience, Projects, Contact],
})
export class Home {}
