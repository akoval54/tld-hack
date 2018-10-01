import {Map} from 'immutable';

import TLDType from './tld-type';
import emojiFlags from 'emoji-flags';

// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Exceptional_reservations
const extraTldToCountryCode = Map({
  'ac': 'gb',
  'uk': 'gb',
  'su': 'ru'
});

export default class TopLevelDomain {
  public emojiFlag: {
    code: string;
    emoji: string;
    name: string;
  };

  constructor(
    public name: string,
    public type: string,
    public punycode: string,
    public languageCode: string,
    public translation: string,
    public romanized: string,
    public rtl: boolean,
    public sponsor: string) {

    if (punycode) {
      // TODO: convert languageCode to countryCode
      this.emojiFlag = emojiFlags.countryCode(languageCode);
    } else if (type === TLDType.CountryCode) {
      this.emojiFlag = emojiFlags.countryCode(extraTldToCountryCode.get(name) || name);
    }
  }
}
