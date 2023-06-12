import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
  })
