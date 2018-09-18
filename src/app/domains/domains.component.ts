import {Component, OnInit} from '@angular/core';
import {List} from 'immutable';

import {DomainService} from 'src/app/domain.service';
import DomainHack from 'src/app/domain-hack';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domainHacks: List<DomainHack>;

  constructor(private domainService: DomainService) {
    domainService.searchTerm$.subscribe(
      term => {
        this.domainHacks = this.domainService.getDomainHacks(term);
      });
  }

  ngOnInit() {
  }
}
