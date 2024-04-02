import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public placeholder: string = "Buscar por capital"

  searchByCapital ( term: string ):void {
    console.log('Desde capital page')
    console.log(term)
  }

}
