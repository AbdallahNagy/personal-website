import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Free form-to-email service (https://web3forms.com). The access key is public
// by design — it only lets this form deliver messages to your inbox.
// Leave empty to fall back to opening the visitor's email app.
const WEB3FORMS_ACCESS_KEY = '2a412438-bc5b-4b48-8a7a-881849c9f9a5';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

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
  botcheck = false;
  status = signal<Status>('idle');

  readonly emailAddress = 'abdallah@abdallahnagy.com';

  readonly socials = [
    { label: 'GitHub',   href: 'https://github.com/AbdallahNagy', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdallahnagy/', icon: 'linkedin' },
  ];

  async onSubmit() {
    if (!this.name || !this.email || !this.message || this.status() === 'sending') return;

    if (!WEB3FORMS_ACCESS_KEY) {
      const subject = encodeURIComponent(`Portfolio Contact from ${this.name}`);
      const body = encodeURIComponent(`${this.message}\n\n— ${this.name} (${this.email})`);
      window.location.href = `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
      this.status.set('mailto');
      return;
    }

    this.status.set('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact from ${this.name}`,
          from_name: 'abdallahnagy.com',
          name: this.name,
          email: this.email,
          message: this.message,
          botcheck: this.botcheck,
        }),
      });
      const data = await res.json();
      this.status.set(res.ok && data.success ? 'sent' : 'error');
    } catch {
      this.status.set('error');
    }
  }
}
