import TopLevelDomain from './tld';

export default class DomainHack {
  constructor(public subDomain: string, public tld: TopLevelDomain) {
  }

  getName = () => `${this.subDomain}.${this.tld.name}`;

  getUrl = () => `http://${this.getName()}`;
}
