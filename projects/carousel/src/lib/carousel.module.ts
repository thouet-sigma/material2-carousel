import {Injectable, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import {MatCarouselComponent} from "./carousel.component";
import {MatCarouselSlideComponent} from "./carousel-slide/carousel-slide.component";
import {HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule} from "@angular/platform-browser";

// https://github.com/angular/angular/issues/10541#issuecomment-300761387
@Injectable()
export class MatCarouselHammerConfig extends HammerGestureConfig {
  overrides = {
      pan: { direction: 6 },
      pinch: { enable: false },
      rotate: { enable: false }
  };
}

@NgModule({
    declarations: [MatCarouselComponent, MatCarouselSlideComponent],
    imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
    exports: [MatCarouselComponent, MatCarouselSlideComponent],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MatCarouselHammerConfig
        }
    ]
})
export class MatCarouselModule {
}