import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectComponent implements OnInit {

  listProjects: Project[] = [
    {
      name: 'BMI Calculator', 
      img: 'https://d33wubrfki0l68.cloudfront.net/607e19936bc55117e67cb0d0/screenshot_2021-04-20-00-00-20-0000.png',  
      description: "App to calculate your Body Mass Index", 
      date: '19/04/2021', 
      url: 'https://chsd-bmicalculator.netlify.app/'
    },
    {
      name: 'Eventos', 
      img: 'https://d33wubrfki0l68.cloudfront.net/60813e501c4afeaf88c8fcf2/screenshot_2021-04-22-09-13-53-0000.png',  
      description: "App to register your day events", 
      date: '20/04/2021', 
      url: 'https://chsd-eventos.netlify.app/'
    },
    {
      name: 'Clima', 
      img: 'https://d33wubrfki0l68.cloudfront.net/6082539b1fa6ec834c4fab4a/screenshot_2021-04-23-04-57-01-0000.png',  
      description: "App to ask for the weather", 
      date: '22/04/2021', 
      url: 'https://chsd-clima.netlify.app/'
    },
    {
      name: 'Conversor', 
      img: 'https://d33wubrfki0l68.cloudfront.net/607d33f2815f4cf37c6c64c3/screenshot_2021-04-19-07-40-35-0000.png',  
      description: "Converts from one type of currency to another", 
      date: '19/04/2021', 
      url: 'https://chsd-convertidor.netlify.app/'
    },
    {
      name: 'Dados', 
      img: 'https://d33wubrfki0l68.cloudfront.net/607ccc01d14a1f98f5ba276b/screenshot_2021-04-19-00-17-06-0000.png',  
      description: "Random dices game", 
      date: '18/04/2021', 
      url: 'https://chsd-dices.netlify.app/'
    },
    {
      name: 'List', 
      img: 'https://d33wubrfki0l68.cloudfront.net/60813e86c61e50b20b6a98ce/screenshot_2021-04-22-09-14-47-0000.png',  
      description: "List example", 
      date: '20/04/2021', 
      url: 'https://chsd-listaempleados.netlify.app/'
    },
    {
      name: 'Piano', 
      img: 'https://d33wubrfki0l68.cloudfront.net/607cb96f1d8fadb46c5fa7ec/screenshot_2021-04-18-22-57-53-0000.png',  
      description: "Piano songs", 
      date: '18/04/2021', 
      url: 'https://chsd-piano.netlify.app/'
    },
    {
      name: 'Presupuesto', 
      img: 'https://d33wubrfki0l68.cloudfront.net/60813e9200c2dda8bff8c4ca/screenshot_2021-04-22-09-15-00-0000.png',  
      description: "From your budget you can make a list of expenses", 
      date: '22/04/2021', 
      url: 'https://chsd-presupuesto.netlify.app/'
    },
    {
      name: 'Short URL', 
      img: 'https://d33wubrfki0l68.cloudfront.net/6085e71fe2f9ab7c1584c186/screenshot_2021-04-25-22-03-12-0000.png',  
      description: "This app provides you to short an url", 
      date: '25/04/2021', 
      url: 'https://chsd-shorturl.netlify.app/'
    },
    {
      name: 'Tareas', 
      img: 'https://d33wubrfki0l68.cloudfront.net/607cf2404a11f6cc0b1001af/screenshot_2021-04-19-03-00-17-0000.png',  
      description: "Record to-do tasks", 
      date: '18/04/2021', 
      url: 'https://chsd-tareas.netlify.app/'
    },
    {
      name: 'Noticias', 
      img: 'https://d33wubrfki0l68.cloudfront.net/608664683762c25146b35524/screenshot_2021-04-26-06-57-45-0000.png',
      description: "Portal to view news", 
      date: '26/04/2021', 
      url: 'https://chsd-noticias.netlify.app/'
    },
    {
      name: 'Galeria', 
      img: 'https://d33wubrfki0l68.cloudfront.net/6087bdc64e29b8d6dd033b6b/screenshot_2021-04-27-07-31-19-0000.png',
      description: "Here you can find a lot of images", 
      date: '27/04/2021', 
      url: 'https://chsd-galeria.netlify.app/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
