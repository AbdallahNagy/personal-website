import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  signal,
} from '@angular/core';
const NAV_LINKS = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Contact',    id: 'contact' },
] as const;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  imports: [],
})
export class Navbar implements OnInit, OnDestroy {
  readonly links = NAV_LINKS;

  hidden = signal(false);
  activeSection = signal('about');

  private lastScrollY = 0;
  private observer!: IntersectionObserver;

  ngOnInit() {
    this.lastScrollY = window.scrollY;
    this.setupObserver();
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.hidden.set(y > this.lastScrollY && y > 80);
    this.lastScrollY = y;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
