import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
})
export class Ex4Component {
  message = '';

  showSecretMessage() {}
}
