import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = ''

 }
