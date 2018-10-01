import {Component, OnInit} from '@angular/core';
import {List} from 'immutable';

import {DomainService} from '../domain.service';
import DomainHack from '../domain-hack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  areHacksFound: boolean;
  domainHacks: List<DomainHack>;

  constructor(private domainService: DomainService) {
    domainService.domainHacks$.subscribe(
      domainHacks => {
        this.areHacksFound = domainHacks && !domainHacks.isEmpty();
        this.domainHacks = domainHacks;
      });
  }

  ngOnInit() {
  }

}
