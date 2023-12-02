import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PersonInformationPipe } from './person-information.pipe';

@Component({
  standalone: true,
  imports: [NgFor, PersonInformationPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | PersonInformation : index }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
