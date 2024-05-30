import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from '../services/FormationService';
import { Formation } from '../models/Formation';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation: Formation | undefined;
  Listformations : Formation []=[] ;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    // Retrieve the formation ID from the route parameters
    const formationIdParam = this.route.snapshot.paramMap.get('id');
    
    // Convert the formation ID to a number
    const formationId = formationIdParam ? parseInt(formationIdParam, 10) : null;
    
    // Call the FormationService to fetch the formation details by ID
    if (formationId) {
      this.formationService.getFormationById(formationId).subscribe(
        (formation: Formation) => {
          this.formation = formation;
        },
        (error) => {
          console.error('Error fetching formation details:', error);
        }
      );
    }
    this.formationService.getAllFormations().subscribe(
      (Listformations: Formation[]) => {
        this.Listformations=Listformations ;
        console.log('All formations:', Listformations);
      },
      (error) => {
        // Handle error
        console.error('Error fetching all formations:', error);
      }
    );
  }
  }
  

