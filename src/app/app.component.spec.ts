import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Component, Input} from '@angular/core';

@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {
}

@Component({selector: 'app-search', template: ''})
class SearchStubComponent {
}

@Component({selector: 'app-footer', template: ''})
class FooterStubComponent {
  @Input() build: string;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderStubComponent,
        SearchStubComponent,
        FooterStubComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have necessary BEM structure'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.b-app div.b-app__top app-header')).toBeTruthy();
    expect(compiled.querySelector('div.b-app div.b-app__middle app-search')).toBeTruthy();
    expect(compiled.querySelector('div.b-app div.b-app__bottom app-footer')).toBeTruthy();
  }));
});
