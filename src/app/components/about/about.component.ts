import {
  Component, Inject, OnInit, Optional,
} from '@angular/core';
import { ConstantsService, GeneratorService } from 'src/app/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
  providers: [
    {
      provide: ConstantsService,
      useValue: ConstantsService,
    },
    {
      provide: GeneratorService,
      useFactory: () => new GeneratorService(),
    },
  ],
})
export class AboutComponent implements OnInit {
  constructor(@Optional()@Inject(ConstantsService) private _constants, @Optional() private _generator: GeneratorService) { }

  ngOnInit(): void {
    console.log(this._constants);
    if (this._generator) {
      console.log('random str:', this._generator.generateString(5));
    }
  }
}
