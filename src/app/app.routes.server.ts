import { RenderMode, ServerRoute } from '@angular/ssr';

// Pre-render every page to static HTML at build time so search engines and
// link previews see real content instead of an empty <app-root>.
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
