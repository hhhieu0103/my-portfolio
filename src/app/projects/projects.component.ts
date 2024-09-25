import { Component, inject } from '@angular/core';
import { Project } from '../shared/interfaces';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  urlService = inject(UrlService)
  projects: Project[] = [
    {
      name: "TSPGeneticAlgorithm",
      description: "Implementation of Genetic Algorithm to solve Travelling Salesman Problem (TSP)",
      tags: [
        { text: "Java", colorClass: "bg-light text-danger" },
        { text: "Travelling Salesman Problem", colorClass: "text-bg-primary" },
        { text: "Genetic Algorithm", colorClass: "text-bg-primary" },
      ],
      imgPath: "/assets/tsp-genetic-algorithm.png",
      buttons: [
        {text: "Github Repo", class: "btn btn-dark", icon: "bi bi-github", url: "https://github.com/hhhieu0103/TSPGeneticAlgorithm"}
      ],
    },
    {
      name: "SimpleAuthentication",
      description: "A simple authentication module for Angular and NodeJS, supporting End to End encryption, protect authentication information from man-in-the-middle attacks.",
      tags: [
        { text: "Angular", colorClass: "text-bg-danger" },
        { text: "NodeJS", colorClass: "text-bg-success" },
        { text: "ExpressJS", colorClass: "text-bg-light" },
        { text: "Cyber Security", colorClass: "text-bg-primary" },
        { text: "E2E Encryption", colorClass: "text-bg-primary" },
        { text: "Web Development", colorClass: "text-bg-primary" },
        { text: "Authentication", colorClass: "text-bg-primary" },
      ],
      imgPath: "/assets/simple-authentication.png",
      buttons: [
        {text: "Client Repo", class: "btn btn-dark", icon: "bi bi-laptop", url: "https://github.com/hhhieu0103/simple-authentication-client"},
        {text: "Server Repo", class: "btn btn-dark", icon: "bi bi-database", url: "https://github.com/hhhieu0103/simple-authentication-server"}
      ],
    },
    {
      name: "MyPortfolio",
      description: "Creating my personal portfolio website using Angular and Bootstrap.",
      tags: [
        { text: "Angular", colorClass: "text-bg-danger" },
        { text: "Bootstrap", colorClass: "text-white bg-purple" },
        { text: "Web Development", colorClass: "text-bg-primary" },
        { text: "Frontend Development", colorClass: "text-bg-primary" },
        { text: "Responsive Web Design", colorClass: "text-bg-primary" },
      ],
      imgPath: "/assets/logo5x-with-bg.png",
      buttons: [
        {text: "Github Repo", class: "btn btn-dark", icon: "bi bi-github", url: "https://github.com/hhhieu0103/TSPGeneticAlgorithm"}
      ],
    },
  ]

  openHTML(path: string) {
    window.open(path)
  }
}
