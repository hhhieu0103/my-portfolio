import { Component, inject } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  urlService = inject(UrlService)
  githubURL = "https://github.com/hhhieu0103?tab=repositories"
  igURL = "https://www.instagram.com/hhhieu0103"

  playSound() {
    let sound = new Audio("/assets/name-pronunciation.mp3")
    sound.play()
  }
}
