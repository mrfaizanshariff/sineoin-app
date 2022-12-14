import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  productCard=[
    {
      title:'HYDROXY CITRONELLAL',
      imgSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hydroxycitronellal.png/640px-Hydroxycitronellal.png',
      description:'CAS-NO 107-75-5',
    },
    {
      title:'WOODAMBINOL (NORLIMBANOL)',
      imgSrc:'data:image/png;base64,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',
      description:'CAS-NO 0070788-30-6',
    },
    {
      title:'AURANTINE NFF (HYDROXY SCHIFF BASE)',
      imgSrc:'https://www.researchgate.net/profile/Alev-Dogan/publication/243950836/figure/fig1/AS:393148720271371@1470745367541/The-structure-of-Schiff-bases-derived-from-2-hydroxy-1-naphthaldehyde-and-some-a-amino_Q640.jpg',
      description:'CAS-NO 89-43-0',
    },
    {
      title:'CITRONELLAL - 96',
      imgSrc:'https://assets.thermofisher.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-106-23-0.jpg-650.jpg',
      description:'CAS-NO 106-23-0',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
