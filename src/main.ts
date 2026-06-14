import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { App } from './app/app';
import { MainFrame } from './app/main-frame/main-frame';

//bootstrapApplication(App, appConfig)
bootstrapApplication(MainFrame, appConfig)
  .catch((err) => console.error(err));
