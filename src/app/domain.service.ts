import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {List, Range} from 'immutable';

import {TLD_MAX_LENGTH, TLD_MIN_LENGTH} from './tld-length';
import TLDMap from './tld-map';
import DomainHack from './domain-hack';
import TopLevelDomain from './tld';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  public domainHacks$ = new BehaviorSubject<List<DomainHack>>(List());

  public setCurrentTerm = (term: string) => {
    this.domainHacks$.next(this.getDomainHacks((term || '').toLowerCase()));
  }

  private getDomainHacks = (term: string) => {
    let results: List<DomainHack> = List();

    if (term.startsWith('-') || term.length <= TLD_MIN_LENGTH) {
      return results;
    }

    const tldLengthRange = Range(TLD_MIN_LENGTH, Math.min(TLD_MAX_LENGTH, term.length));

    tldLengthRange.forEach(tldLength => {
      const termSuffix = term.slice(-tldLength);
      const tldProps = TLDMap.get(termSuffix);

      if (tldProps && term[term.length - tldLength - 1] !== '-') {
        results = results.push(new DomainHack(
          term.slice(0, -tldLength),
          new TopLevelDomain(
            termSuffix,
            tldProps.get('type'),
            tldProps.get('punycode'),
            tldProps.get('language_code'),
            tldProps.get('translation'),
            tldProps.get('romanized'),
            tldProps.get('rtl'),
            tldProps.get('sponsor'))
        ));
      }
    });

    return results;
  }
}
