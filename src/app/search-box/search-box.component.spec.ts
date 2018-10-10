import {MatFormFieldModule, MatIcon, MatInput} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchBoxComponent} from './search-box.component';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBoxComponent, MatIcon, MatInput],
      imports: [ReactiveFormsModule, MatFormFieldModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
