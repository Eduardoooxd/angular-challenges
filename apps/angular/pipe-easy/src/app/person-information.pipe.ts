import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'PersonInformation',
  standalone: true,
})
export class PersonInformationPipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value} - ${index}`;
  }
}
