import {Component, OnInit} from '@angular/core';

import {DomainService} from 'src/app/domain.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  value: string;

  constructor(private domainService: DomainService) {
    domainService.searchTerm$.subscribe(term => this.value = term);
  }

  ngOnInit() {
  }

  setCurrentTerm = (term: string) => this.domainService.setCurrentTerm(term);
}
