import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import {DomainService} from 'src/app/domain.service';
import DomainHack from 'src/app/domain-hack';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent implements OnInit {
  domainHacks: DomainHack[];
  columns: string[];

  constructor(private domainService: DomainService, private breakpointObserver: BreakpointObserver) {
    domainService.domainHacks$.subscribe(
      domainHacks => {
        this.domainHacks = domainHacks.toJS();
      });

    // Hide TLD manager column on mobile devices (width: 0-599px).
    breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      this.columns = result.matches
        ? ['domain', 'country']
        : ['domain', 'manager', 'country'];
    });
  }

  ngOnInit() {
  }
}
