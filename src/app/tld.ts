import TLDType from './tld-type';
import emojiFlags from 'emoji-flags';

export default class TopLevelDomain {
  private emojiFlag: {
    emoji: string;
    name: string;
  };

  constructor(
    public name: string,
    public type: TLDType,
    public punycode: string,
    public languageCode: string,
    public translation: string,
    public romanized: string,
    public rtl: boolean,
    public sponsor: string) {

    this.emojiFlag = punycode ? emojiFlags.countryCode(languageCode) : emojiFlags.countryCode(name);
  }

  getCountryName = () => this.emojiFlag ? `${this.emojiFlag.emoji} ${this.emojiFlag.name}` : undefined;
}
