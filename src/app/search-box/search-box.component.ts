import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

import {DomainService} from 'src/app/domain.service';
import IdnCodesSet from 'src/app/idn-codes-set';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @ViewChild('searchBox')
  searchBox: ElementRef;

  searchBoxControl = new FormControl('', (control: AbstractControl) => {
    if (!control.value) {
      return null;
    }

    const errors = control.value.toLowerCase().split('').reduce((acc, char, index) => {
      if (!IdnCodesSet.has(char.charCodeAt()) || (char === '-' && index === 0)) {
        acc[char] = true;
      }
      return acc;
    }, {});

    return Object.keys(errors).length ? errors : null;
  });

  constructor(private domainService: DomainService) {
  }

  ngOnInit() {
    this.searchBox.nativeElement.focus();
    this.searchBoxControl.markAsTouched();

    this.searchBoxControl.valueChanges.subscribe(value => {
      if (value.includes(' ')) {
        this.searchBoxControl.setValue(value.replace(/\s+/g, '-'));
        return;
      }

      if (this.searchBoxControl.invalid) {
        this.domainService.setCurrentTerm(undefined);
      } else {
        this.domainService.setCurrentTerm(value);
      }
    });
  }

  getErrorMessage = () => {
    const badSymbols = Object.keys(this.searchBoxControl.errors)
      .map(char => {
        switch (char) {
          case ' ':
            return '<space>';
          case '-':
            return '<leading hyphen>';
          default:
            return char;
        }
      })
      .join(' ');

    return `Bad symbols: ${badSymbols}`;
  }

  handleEnter = (event) => {
    event.target.blur();
  }
}
