import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TypingComponent } from './common/typing/typing.component';
import { PwgComponent } from './common/pwg/pwg.component';
import { Route, RouterModule } from '@angular/router';
import { BothComponent } from './common/both/both.component';
import { DonoComponent } from './common/dono/dono.component';
import { PkpediaComponent } from './common/pkpedia/pkpedia.component';

const routes: Route [] =[
  {path: 'typing' , component: TypingComponent},
  {path: 'pwg' , component: PwgComponent},
  {path: 'both', component: BothComponent},
  {path: 'dono' , component: DonoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TypingComponent,
    PwgComponent,
    BothComponent,
    DonoComponent,
    PkpediaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
