import {Component, OnInit} from '@angular/core';

import {DomainService} from 'src/app/domain.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domains;

  constructor(private domainService: DomainService) {
    domainService.searchTerm$.subscribe(
      term => {
        this.domains = this.domainService.getDomainHacks(term);
      });
  }

  ngOnInit() {
  }
}
