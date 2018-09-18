import TLDType from './tld-type';

export default class TopLevelDomain {
  constructor(
    public name: string,
    public type: TLDType,
    public languageCode: string,
    public translation: string,
    public sponsor: string) {
  }
}
