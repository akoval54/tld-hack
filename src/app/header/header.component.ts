import {Component, OnInit} from '@angular/core';

import {DomainService} from '../domain.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  areHacksFound: boolean;

  constructor(private domainService: DomainService) {
    domainService.domainHacks$.subscribe(
      domainHacks => {
        this.areHacksFound = domainHacks && !domainHacks.isEmpty();
      });
  }

  ngOnInit() {
  }

}
