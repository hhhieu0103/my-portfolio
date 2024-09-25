import { Component } from '@angular/core';
import { TimelineComponent } from "../timeline/timeline.component";
import { Hobby, TimeLineEvent } from '../shared/interfaces';
import { TimeLineType } from '../shared/enums';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TimelineComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  eduAndExp: TimeLineEvent[] = [
    {
      organization: 'Hoa Sen University',
      title: 'BS in Information Technology',
      location: 'Ho Chi Minh City, Vietnam',
      time: 'Fall 2018 - Fall 2022',
      type: TimeLineType.Education,
      badges: [{text: 'GPA: 3.54', colorClass: 'text-bg-success'}],
    },
    {
      organization: 'Hoang Minh CO',
      title: 'Full Stack Web Developer',
      location: 'Ho Chi Minh City, Vietnam',
      time: 'December 2021 - February 2023',
      type: TimeLineType.Experience,
      badges: [
        {text: 'Angular', colorClass: 'text-bg-danger'},
        {text: '.NET', colorClass: 'text-white bg-purple'},
        {text: 'Oracle', colorClass: 'text-danger bg-white'},
      ],
    },
    {
      organization: 'University of Massachusetts Dartmouth',
      title: 'MS in Computer Engineering',
      location: 'North Dartmouth, MA, USA',
      time: 'Fall 2023 - Spring 2025',
      type: TimeLineType.Education,
      badges: [{text: 'GPA: 3.95', colorClass: 'text-bg-success'}],
      isCurrent: true,
    },
    {
      organization: 'University of Massachusetts Dartmouth',
      title: 'ECE 160 Grader',
      location: 'North Dartmouth, MA, USA',
      time: 'Spring 2024',
      type: TimeLineType.Experience,
      badges: [{text: 'Part-time', colorClass: 'text-bg-secondary'}],
    },
  ]

  hobbies: Hobby[] = [
    {name: 'Video Games', icon: 'bi bi-controller'},
    {name: 'Collectibles', icon: 'bi bi-box2-heart'},
    {name: 'Movies', icon: 'bi bi-film'},
    {name: 'Photography', icon: 'bi bi-camera'},
  ]
}
