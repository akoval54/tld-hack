import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {List, Range} from 'immutable';
import {TLD_MAX_LENGTH, TLD_MIN_LENGTH} from './tld-length';
import TLDMap from './tld-map';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private searchTerms = new Subject<string>();
  searchTerm$ = this.searchTerms.asObservable();

  setCurrentTerm = (term: string) => this.searchTerms.next(term);

  getDomainHacks = (term: string) => {
    let results: List<string> = List();

    if (term.length <= TLD_MIN_LENGTH) {
      return results;
    }

    const tldLengthRange = Range(TLD_MIN_LENGTH, Math.min(TLD_MAX_LENGTH, term.length));

    tldLengthRange.forEach(tldLength => {
      const tld = TLDMap.get(term.slice(-tldLength));

      if (tld) {
        results = results.push(`${term.slice(0, -tldLength)}.${term.slice(-tldLength)}`);
      }
    });

    return results;
  }
}
