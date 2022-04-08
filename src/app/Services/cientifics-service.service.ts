import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CientificsServiceService {

  private cientificList:ICientific[]=[
    {
      id:1,
      nombre:"Galileo Galilei",
      data:"Galileo studied speed and velocity, gravity and free fall, the principle of relativity, inertia, projectile motion and also worked in applied science and technology, describing the properties of pendulums and 'ydrostatic balances'.",
      genero:"M"
    },
    {
      id:2,
      nombre:"Pythagoras",
      data:"Memories of middle or high school geometry invariably include an instructor drawing right triangles on a blackboard to explain the Pythagorean theorem. The lesson was that the square of the hypotenuse, or longest side, is equal to the sum of the squares of the other sides. Simply put: a2 + b2 = c2. A proof followed, adding a level of certainty rare in other high school classes, like social studies and English.",
      genero:"M"
    },
    {
      id:3,
      nombre:"Rosalind Franklin",
      data:"In 1962, Francis Crick, James Watson and Maurice Wilkins shared the Nobel Prize for describing DNA’s double-helix structure — arguably the greatest discovery of the 20th century. But no one mentioned Rosalind Franklin — arguably the greatest snub of the 20th century.",
      genero:"F"
    },
    {
      id:4,
      nombre:"Albert Einstein",
      data:"A crowd barged past dioramas, glass displays and wide-eyed security guards in the American Museum of Natural History. Screams rang out as some runners fell and were trampled. Upon arriving at a lecture hall, the mob broke down the door.",
      genero:"M"
    },
    {
      id:8,
      nombre:"Marie Curie",
      data:"Despite her French name, Marie Curie’s story didn’t start in France. Her road to Paris and success was a hard one, as equally worthy of admiration as her scientific accomplishments.",
      genero:"F"
    },
    {
      id:5,
      nombre:"Isaac Newton",
      data:"Isaac Newton was born on Christmas Day, 1642. Never the humble sort, he would have found the date apt: The gift to humanity and science had arrived. A sickly infant, his mere survival was an achievement. Just 23 years later, with his alma mater Cambridge University and much of England closed due to plague, Newton discovered the laws that now bear his name. (He had to invent a new kind of math along the way: calculus.) The introverted English scholar held off on publishing those findings for decades, though, and it took the Herculean efforts of friend and comet discoverer Edmund Halley to get Newton to publish. The only reason Halley knew of Newton’s work? A bet the former had with other scientists on the nature of planetary orbits. When Halley mentioned the orbital problem to him, Newton shocked his friend by giving the answer immediately, having long ago worked it out.",
      genero:"M"
    },
    {
      id:6,
      nombre:"Charles Darwin",
      data:"As a young man, his main interests were collecting beetles and studying geology in the countryside, occasionally skipping out on his classes at the University of Edinburgh Medical School to do so. It was a chance invitation in 1831 to join a journey around the world that would make Darwin, who had once studied to become a country parson, the father of evolutionary biology.",
      genero:"M"
    },
    {
      id:7,
      nombre:"Nikola Tesla",
      data:"Nikola Tesla grips his hat in his hand. He points his cane toward Niagara Falls and beckons bystanders to turn their gaze to the future. This bronze Tesla — a statue on the Canadian side — stands atop an induction motor, the type of engine that drove the first hydroelectric power plant.",
      genero:"M"
    }
  ];

  constructor() {
    console.log("Cientifics service is running!");
   }
   
   getCientifics():ICientific[]{
     return this.cientificList;
   }

   getCientificsById(id:number):ICientific{
    let cientific = this.cientificList.filter(c => c.id == id);
     return cientific[0];
   }

   getCientificsByGenre(genre:string):ICientific[]{    
     return this.cientificList.filter(c => c.genero == genre);
   }
}

export interface ICientific{
  id: number;
  nombre:string;
  data:string;
  genero:string;
}