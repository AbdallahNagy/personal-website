import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';

interface Square {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  rotation: number;
  vr: number;
}

@Component({
  selector: 'app-animated-bg',
  templateUrl: './animated-bg.html',
  styleUrl: './animated-bg.scss',
})
export class AnimatedBg implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private squares: Square[] = [];
  private rafId = 0;
  private readonly COUNT = 28;

  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize();
    this.initSquares();
    this.animate();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:resize')
  resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initSquares() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.squares = Array.from({ length: this.COUNT }, () => this.makeSquare(w, h, true));
  }

  private makeSquare(w: number, h: number, random = false): Square {
    return {
      x: random ? Math.random() * w : Math.random() < 0.5 ? -20 : w + 20,
      y: random ? Math.random() * h : Math.random() * h,
      size: 12 + Math.random() * 14,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: 0.03 + Math.random() * 0.07,
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.004,
    };
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.width;
    const h = canvas.height;

    this.ctx.clearRect(0, 0, w, h);

    for (const sq of this.squares) {
      sq.x += sq.vx;
      sq.y += sq.vy;
      sq.rotation += sq.vr;

      // Wrap edges with padding
      const pad = sq.size * 2;
      if (sq.x < -pad) sq.x = w + pad;
      else if (sq.x > w + pad) sq.x = -pad;
      if (sq.y < -pad) sq.y = h + pad;
      else if (sq.y > h + pad) sq.y = -pad;

      this.ctx.save();
      this.ctx.globalAlpha = sq.opacity;
      this.ctx.translate(sq.x, sq.y);
      this.ctx.rotate(sq.rotation);
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 0.8;
      this.ctx.strokeRect(-sq.size / 2, -sq.size / 2, sq.size, sq.size);
      this.ctx.restore();
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }
}
