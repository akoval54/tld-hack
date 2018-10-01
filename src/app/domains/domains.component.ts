import {Component, OnInit} from '@angular/core';

import {DomainService} from 'src/app/domain.service';
import DomainHack from 'src/app/domain-hack';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domainHacks: DomainHack[];

  constructor(private domainService: DomainService) {
    domainService.domainHacks$.subscribe(
      domainHacks => {
        this.domainHacks = domainHacks.toJS();
      });
  }

  ngOnInit() {
  }
}
