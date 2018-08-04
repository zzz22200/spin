import { Component } from '@angular/core';
import { Gif } from '../../models/Gif.model';
import { Frame } from '../../models/Frame.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spin';

  gif: Gif = {
    current: 0,
    height: 256,
    width: 256,
    frames: [
      {
        id: 0,
        uri: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        delay: 20,
        keep: false,
      } as Frame,
      {
        id: 1,
        uri: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
        delay: 20,
        keep: false,
      } as Frame
    ]
  } as Gif;
}
