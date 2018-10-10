import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';

@Component({selector: 'app-search-box', template: ''})
class SearchBoxStubComponent {
}

@Component({selector: 'app-domains', template: ''})
class DomainsStubComponent {
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, SearchBoxStubComponent, DomainsStubComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
