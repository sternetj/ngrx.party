import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent {
  public profileImages = [
    '//ssl.gstatic.com/docs/common/profile/alligator_lg.png',
    '//ssl.gstatic.com/docs/common/profile/anteater_lg.png',
    '//ssl.gstatic.com/docs/common/profile/axolotl_lg.png',
    '//ssl.gstatic.com/docs/common/profile/badger_lg.png',
    '//ssl.gstatic.com/docs/common/profile/bat_lg.png',
    '//ssl.gstatic.com/docs/common/profile/beaver_lg.png',
    '//ssl.gstatic.com/docs/common/profile/buffalo_lg.png',
    '//ssl.gstatic.com/docs/common/profile/camel_lg.png',
    '//ssl.gstatic.com/docs/common/profile/capybara_lg.png',
    '//ssl.gstatic.com/docs/common/profile/chameleon_lg.png',
    '//ssl.gstatic.com/docs/common/profile/cheetah_lg.png',
    '//ssl.gstatic.com/docs/common/profile/chinchilla_lg.png',
    '//ssl.gstatic.com/docs/common/profile/chipmunk_lg.png',
    '//ssl.gstatic.com/docs/common/profile/chupacabra_lg.png',
    '//ssl.gstatic.com/docs/common/profile/cormorant_lg.png',
    '//ssl.gstatic.com/docs/common/profile/coyote_lg.png',
    '//ssl.gstatic.com/docs/common/profile/crow_lg.png',
    '//ssl.gstatic.com/docs/common/profile/dingo_lg.png',
    '//ssl.gstatic.com/docs/common/profile/dinosaur_lg.png',
    '//ssl.gstatic.com/docs/common/profile/dolphin_lg.png',
    '//ssl.gstatic.com/docs/common/profile/duck_lg.png',
    '//ssl.gstatic.com/docs/common/profile/elephant_lg.png',
    '//ssl.gstatic.com/docs/common/profile/ferret_lg.png',
    '//ssl.gstatic.com/docs/common/profile/frog_lg.png',
    '//ssl.gstatic.com/docs/common/profile/giraffe_lg.png',
    '//ssl.gstatic.com/docs/common/profile/grizzly_lg.png',
    '//ssl.gstatic.com/docs/common/profile/hedgehog_lg.png',
    '//ssl.gstatic.com/docs/common/profile/hippo_lg.png',
    '//ssl.gstatic.com/docs/common/profile/ibex_lg.png',
    '//ssl.gstatic.com/docs/common/profile/ifrit_lg.png',
    '//ssl.gstatic.com/docs/common/profile/jackal_lg.png',
    '//ssl.gstatic.com/docs/common/profile/jackalope_lg.png',
    '//ssl.gstatic.com/docs/common/profile/kangaroo_lg.png',
    '//ssl.gstatic.com/docs/common/profile/koala_lg.png',
    '//ssl.gstatic.com/docs/common/profile/kraken_lg.png',
    '//ssl.gstatic.com/docs/common/profile/lemur_lg.png',
    '//ssl.gstatic.com/docs/common/profile/leopard_lg.png',
    '//ssl.gstatic.com/docs/common/profile/liger_lg.png',
    '//ssl.gstatic.com/docs/common/profile/llama_lg.png',
    '//ssl.gstatic.com/docs/common/profile/mink_lg.png',
    '//ssl.gstatic.com/docs/common/profile/monkey_lg.png',
    '//ssl.gstatic.com/docs/common/profile/narwhal_lg.png',
    '//ssl.gstatic.com/docs/common/profile/nyancat_lg.png',
    '//ssl.gstatic.com/docs/common/profile/orangutan_lg.png',
    '//ssl.gstatic.com/docs/common/profile/panda_lg.png',
    '//ssl.gstatic.com/docs/common/profile/penguin_lg.png',
    '//ssl.gstatic.com/docs/common/profile/pumpkin_lg.png',
    '//ssl.gstatic.com/docs/common/profile/python_lg.png',
    '//ssl.gstatic.com/docs/common/profile/quagga_lg.png',
    '//ssl.gstatic.com/docs/common/profile/rabbit_lg.png',
    '//ssl.gstatic.com/docs/common/profile/raccoon_lg.png',
    '//ssl.gstatic.com/docs/common/profile/rhino_lg.png',
    '//ssl.gstatic.com/docs/common/profile/sheep_lg.png',
    '//ssl.gstatic.com/docs/common/profile/shrew_lg.png',
    '//ssl.gstatic.com/docs/common/profile/skunk_lg.png',
    '//ssl.gstatic.com/docs/common/profile/squirrel_lg.png',
    '//ssl.gstatic.com/docs/common/profile/tiger_lg.png',
    '//ssl.gstatic.com/docs/common/profile/turtle_lg.png',
    '//ssl.gstatic.com/docs/common/profile/walrus_lg.png',
    '//ssl.gstatic.com/docs/common/profile/wolverine_lg.png',
    '//ssl.gstatic.com/docs/common/profile/wombat_lg.png',
  ];

  public profileIndex = 0;
  public name = '';

  constructor(public dialogRef: MatDialogRef<WelcomeModalComponent>) {
    this.profileIndex = Math.floor(Math.random() * this.profileImages.length);
  }

  public nextImage() {
    this.profileIndex = (this.profileIndex + 1) % this.profileImages.length;
  }

  public closeDialog() {
    this.dialogRef.close({
      logo: this.profileImages[this.profileIndex],
      name: this.name
    });
  }

}
