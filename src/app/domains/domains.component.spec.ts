import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatTooltip, MatIcon, MatTableModule} from '@angular/material';

import {DomainsComponent} from './domains.component';

describe('DomainsComponent', () => {
  let component: DomainsComponent;
  let fixture: ComponentFixture<DomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DomainsComponent, MatTooltip, MatIcon],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
