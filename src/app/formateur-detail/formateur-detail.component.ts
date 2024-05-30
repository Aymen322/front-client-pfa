import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormateurService } from '../services/FormateurService';
import { Formateur } from '../models/Formateur';

@Component({
  selector: 'app-formateur-detail',
  templateUrl: './formateur-detail.component.html',
  styleUrls: ['./formateur-detail.component.css']
})
export class FormateurDetailComponent implements OnInit {
  formateur: Formateur | undefined;

  constructor(
    private route: ActivatedRoute,
    private formateurService: FormateurService
  ) {}

  ngOnInit(): void {
    // Retrieve the formateur ID from the route parameters
    const formateurId = this.route.snapshot.paramMap.get('id');
    
    // Convert the formateur ID to a number
    const id = formateurId ? parseInt(formateurId, 10) : null;

    // Call the FormateurService to fetch the formateur details by ID
    if (id) {
      this.formateurService.getFormateurById(id).subscribe(
        (formateur: Formateur) => {
          this.formateur = formateur;
        },
        (error) => {
          console.error('Error fetching formateur details:', error);
        }
      );
    }
  }
}
