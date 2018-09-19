import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {List, Range} from 'immutable';
import {TLD_MAX_LENGTH, TLD_MIN_LENGTH} from './tld-length';
import TLDMap from './tld-map';
import DomainHack from './domain-hack';
import TopLevelDomain from './tld';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private searchTerms = new Subject<string>();
  searchTerm$ = this.searchTerms.asObservable();

  setCurrentTerm = (term: string) => this.searchTerms.next(term.toLowerCase());

  getDomainHacks = (term: string) => {
    let results: List<DomainHack> = List();

    if (term.length <= TLD_MIN_LENGTH) {
      return results;
    }

    const tldLengthRange = Range(TLD_MIN_LENGTH, Math.min(TLD_MAX_LENGTH, term.length));

    tldLengthRange.forEach(tldLength => {
      const termSuffix = term.slice(-tldLength);
      const tldProps = TLDMap.get(termSuffix);

      if (tldProps) {
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
