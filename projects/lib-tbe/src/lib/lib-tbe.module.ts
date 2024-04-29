import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LibToolbarComponent } from './components/toolbar/lib-toolbar.component';
import { LibButtonComponent } from './components/button/lib-button.component';

@NgModule({
  declarations: [
    LibButtonComponent,
    LibToolbarComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    LibButtonComponent,
    LibToolbarComponent
  ]
})
export class LibTbeModule { }
