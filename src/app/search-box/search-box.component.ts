import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

import {DomainService} from 'src/app/domain.service';
import IdnCodesSet from 'src/app/idn-codes-set';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchBoxControl = new FormControl('', (control: AbstractControl) => {
    if (!control.value) {
      return null;
    }

    const errors = control.value.split('').reduce((acc, char) => {
      if (!IdnCodesSet.has(char.charCodeAt())) {
        acc[char] = true;
      }
      return acc;
    }, {});

    return Object.keys(errors).length ? errors : null;
  });

  constructor(private domainService: DomainService) {
    domainService.searchTerm$.subscribe(term => this.searchBoxControl.setValue(term));
  }

  ngOnInit() {
  }

  setCurrentTerm = (term: string) => this.domainService.setCurrentTerm(term);

  getErrorMessage = () => {
    const badSymbols = Object.keys(this.searchBoxControl.errors)
      .map(char => {
        switch (char) {
          case ' ':
            return '<space>';
          default:
            return char;
        }
      })
      .join(' ');

    return `Bad symbols: ${badSymbols}`;
  }
}
