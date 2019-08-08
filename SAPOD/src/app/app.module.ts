import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { APODBrowserComponent } from './src/components/apodbrowser/apodbrowser.component';
import { TopComponent } from './src/components/top/top.component';
import { VersusComponent } from './src/components/versus/versus.component';
import { APODDetailComponent } from './src/components/apoddetail/apoddetail.component';
import { FirstConnectionComponent } from './src/components/first-connection/first-connection.component';
import { APODCompactComponent } from './src/components/apodcompact/apodcompact.component';

@NgModule({ //Whole application annotation
  declarations: [ //Declaration of application components
    AppComponent, APODBrowserComponent, TopComponent, VersusComponent, APODDetailComponent, FirstConnectionComponent, APODCompactComponent
  ],
  imports: [ //Module import
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
