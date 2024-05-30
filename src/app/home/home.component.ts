import { Component, OnInit } from '@angular/core';
import { Cour } from '../models/Cour';
import { Formation } from '../models/Formation';
import { Formateur } from '../models/Formateur';
import { Router } from '@angular/router';
import { CourService } from '../services/CourService';
import { FormationService } from '../services/FormationService';
import { FormateurService } from '../services/FormateurService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cours: Cour[] = [];
  formations: Formation[] = [];
  formateurs: Formateur[] = [];
  futureformations : Formation [] = [];

  constructor(
    private router: Router,
    private courService: CourService,
    private formationService: FormationService,
    private formateurService: FormateurService
  ) { }

  ngOnInit(): void {
    this.courService.getAllCours().subscribe(
      (cours: Cour[]) => {
        this.cours = cours;
      },
      (error) => {
        console.error('Error fetching Cours:', error);
      }
    );

    this.formationService.getAllFormations().subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
      },
      (error) => {
        console.error('Error fetching Formations:', error);
      }
    );

    this.formateurService.getAllFormateurs().subscribe(
      (formateurs: Formateur[]) => {
        this.formateurs = formateurs;
      },
      (error) => {
        console.error('Error fetching Formateurs:', error);
      }
    );
    this.formationService.getFutureFormations().subscribe(
      (futureformations: Formation[]) => {
        this.futureformations = futureformations;
        console.log('Future formations:', futureformations);
      },
      (error) => {
        // Handle error
        console.error('Error fetching future formations:', error);
      }
    );
    
    
  }
  

  navigateToCourDetail(courId: number) {
    this.router.navigate(['/courdetail', courId]);
  }
}
