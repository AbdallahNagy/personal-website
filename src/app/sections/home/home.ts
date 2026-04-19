import { Component } from '@angular/core';
import { About } from '../about/about';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [About, Experience, Projects, Contact],
})
export class Home {}
