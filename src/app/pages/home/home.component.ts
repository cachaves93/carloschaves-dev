import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) { }

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platformId)) this.loadLinkedInPlatformScript();
  }

  private loadLinkedInPlatformScript(): void {
    const html = document.getElementsByTagName('html')[0] as HTMLElement;
    const script = document.createElement('script') as HTMLScriptElement;
    script.type = 'text/javascript';
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.onerror = this.scriptCallback
    script.onload = this.scriptCallback
    html.append(script);
  }

  private scriptCallback(): void {
    console.log('script error')
  }

}
