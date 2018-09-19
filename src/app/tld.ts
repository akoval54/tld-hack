import TLDType from './tld-type';
import countryCodesMap from './country-codes-map';

export default class TopLevelDomain {
  constructor(
    public name: string,
    public type: TLDType,
    public languageCode: string,
    public translation: string,
    public sponsor: string) {
  }

  getCountryName = () => countryCodesMap.get(this.name) || countryCodesMap.get(this.languageCode);
}
