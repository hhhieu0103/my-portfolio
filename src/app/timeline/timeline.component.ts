import { Component, Input } from '@angular/core';
import { TimeLineType } from '../shared/enums';
import { TimeLineEvent } from '../shared/interfaces';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  @Input() events: TimeLineEvent[] = [];
  readonly type = TimeLineType
}
