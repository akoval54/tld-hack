import {Map} from 'immutable';
import ISO_639_1 from 'iso-639-1';

import TLDType from './tld-type';
import emojiFlags from 'emoji-flags';

// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Exceptional_reservations
const extraTldToCountryCode = Map({
  'ac': 'gb',
  'uk': 'gb',
  'su': 'ru'
});

export default class TopLevelDomain {
  private emojiFlag: {
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

    if (type === TLDType.CountryCode) {
      this.emojiFlag = emojiFlags.countryCode(extraTldToCountryCode.get(name) || name);
    }
  }

  getCountryOrTypeName = () => {
    if (this.emojiFlag) {
      return `${this.emojiFlag.emoji} ${this.emojiFlag.name}`;
    }

    const language = this.languageCode ? `${ISO_639_1.getName(this.languageCode.substring(0, 2))} ` : '';
    const translation = this.translation ? ` (${this.translation})` : '';

    return `${language}${this.getTldTypeName()}${translation}`;
  }

  getTldTypeName = () => {
    // TODO: externalize/translate strings
    switch (this.type) {
      case TLDType.Generic:
        return 'Generic Domain';
      case TLDType.CountryCode:
        return 'Country Code Domain';
      case TLDType.GenericRestricted:
        return 'Generic Restricted Domain';
      case TLDType.Infrastructure:
        return 'Infrastructure Domain';
      case TLDType.Sponsored:
        return 'Sponsored Domain';
      case TLDType.Test:
        return 'Test Domain';
      default:
        return 'Unknown';
    }
  }

  getDelegationRecordUrl = () => `https://www.iana.org/domains/root/db/${this.name}.html`;

  getRegistrarSearchUrl = () => `https://www.google.com/search?q=register+.${this.name}+domain`;
}
