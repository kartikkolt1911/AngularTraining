import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponent {

  sample = 'String Interpolation';

  twoWay = "this text value is already defined on the source code. this input element rendered it because it is bound to the data. now if you edit this, the data in the source then will change too because the data is bound also to the input element."

  isDisabled = true;
  name = 'hide';

  disable() {
    if(this.isDisabled){
      this.isDisabled = false;
      this.name = 'show';
    } else {
      this.isDisabled = true;
      this.name = 'hide';
    }
  }
}
