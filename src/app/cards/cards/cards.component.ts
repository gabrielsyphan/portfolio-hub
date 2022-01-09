import { Component, Input, OnInit } from '@angular/core';
import Item from '../../shared/models/Item';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  itemsToButtons: Item[] | undefined;

  public items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = (this.itemsToButtons) ? this.itemsToButtons : 
    [
      new Item(
        'Portfolio',
        'http://localhost:4200/portfolio',
      ),
      new Item(
        'Orditi',
        'https://www.orditi.com',
      ),
      new Item(
        'MinhaLuz',
        'http://minhaluzapp.com.br/ ',
      )
    ];
  }

  onOpenPage(url: string): void {
    window.open(url, '_blank')?.focus();
  }
}
