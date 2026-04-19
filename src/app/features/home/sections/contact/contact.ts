import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  imports: [FormsModule],
})
export class Contact {
  name = '';
  email = '';
  message = '';
  submitted = signal(false);

  readonly emailAddress = 'abdallahnagy773@gmail.com';

  readonly socials = [
    { label: 'GitHub',   href: '#', icon: 'github' },
    { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  ];

  onSubmit() {
    if (!this.name || !this.email || !this.message) return;
    // No backend — open mail client as fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${this.name}`);
    const body = encodeURIComponent(this.message);
    window.open(`mailto:${this.emailAddress}?subject=${subject}&body=${body}`);
    this.submitted.set(true);
  }
}
