import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
import { HelloService } from './hello.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  providers: [AppService, HelloService]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(private appSvs: AppService, private helloSvs: HelloService) {
    this.appSvs.run();
    this.helloSvs.run();
    this.helloSvs.run2();   
    this.helloSvs.run3(); 
    this.helloSvs.run4(); 
    this.helloSvs.run5(); 

  }
}
