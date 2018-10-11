import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSloganText = () => element.all(by.css('.b-header-slogan__word'))
    .reduce((acc, elem) => elem.getText().then(text => `${acc}${text} `), '')
    .then(slogan => slogan.trim())
}
