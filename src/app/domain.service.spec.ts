import {TestBed, inject} from '@angular/core/testing';

import {DomainService} from './domain.service';

describe('DomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainService]
    });
  });

  it('should be created with empty domain hacks collection', inject([DomainService], (service: DomainService) => {
    expect(service).toBeTruthy();
    expect(service.domainHacks$.getValue().size).toBe(0, 'domain hacks collection should be empty');
  }));

  it('should have no domain hacks on specific terms', inject([DomainService], (service: DomainService) => {
    ['', null, undefined].forEach(term => {
      service.setCurrentTerm(term);
      expect(service.domainHacks$.getValue().size).toBe(0, `'${term}' term cannot have domain hacks`);
    });

    service.setCurrentTerm('a');
    expect(service.domainHacks$.getValue().size).toBe(0, '1-char term cannot have domain hacks');

    service.setCurrentTerm('ru');
    expect(service.domainHacks$.getValue().size).toBe(0, '2-char term (existing TLD) cannot have domain hacks');

    ['-ru', '-aru', 'a-ru', '-a-ru'].forEach(term => {
      service.setCurrentTerm(term);
      expect(service.domainHacks$.getValue().size)
        .toBe(0, `Domain name cannot start or end with hyphen. Problem term: '${term}'`);
    });
  }));
});
