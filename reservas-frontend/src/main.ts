import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

registerLicense("ORg4AjUWIQA/Gnt2V1hiQlRPf0BFQmFJfFBmQ2ladlRxdkUmHVdTRHRcQlVjQX9bdUxmXH9ednc=");

document.addEventListener('DOMContentLoaded', () => {
  var myModal = document.getElementById('myModal');
  var myInput = document.getElementById('myInput');

  if (myModal && myInput) {
    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus();
    });
  }

  enableProdMode();

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
});