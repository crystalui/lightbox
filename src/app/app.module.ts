import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureShowcaseComponent } from './feature-showcase.component';
import { CrystalLightboxModule } from './lightbox/lightbox.module';

@NgModule({
  declarations: [
    FeatureShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    CrystalLightboxModule
  ],
  providers: [],
  bootstrap: [FeatureShowcaseComponent]
})
export class AppModule { }
