import {
  Component,
  ElementRef,
  OnDestroy,
  afterNextRender,
  signal,
  viewChild,
} from '@angular/core';

const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Contact',    id: 'contact' },
] as const;

// Drop the CV at public/cv.pdf — it is served from the site root.
const CV_URL = '/cv.pdf';
const CV_FILENAME = 'Abdallah-Nagy-CV.pdf';
const EMAIL = 'abdallah@abdallahnagy.com';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [],
})
export class Navbar implements OnDestroy {
  readonly links = NAV_LINKS;
  readonly cvUrl = CV_URL;
  readonly cvFilename = CV_FILENAME;
  readonly email = EMAIL;

  activeSection = signal('about');
  copied = signal(false);

  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('hireDialog');
  private observer!: IntersectionObserver;

  constructor() {
    // Browser-only: skipped during build-time pre-rendering
    afterNextRender(() => this.setupObserver());
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  openHire() {
    this.copied.set(false);
    this.dialog().nativeElement.showModal();
  }

  closeHire() {
    this.dialog().nativeElement.close();
  }

  // Clicks on the backdrop land on the <dialog> element itself
  onDialogClick(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) this.closeHire();
  }

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = `mailto:${this.email}`;
    }
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      { threshold: 0.4 }
    );

    // Observe after view is ready
    setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((s) => this.observer.observe(s));
    }, 300);
  }
}
