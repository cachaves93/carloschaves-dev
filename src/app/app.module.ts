import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { LayoutModule } from './layout/layout.module';
import { CardComponent } from './shared/components/card/card.component';
import { SharedModule } from './shared/shared.module';
import { SideProjectsComponent } from './pages/side-projects/side-projects.component';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'carlos-chaves-dev' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    CurriculumVitaeComponent,
    HomeComponent,
    AboutMeComponent,
    SideProjectsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
