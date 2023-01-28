import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { CardsComponent } from './pages/cards/cards.component';
import { CardComponent } from './pages/card/card.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SuggestionsComponent } from './pages/suggestions/suggestions.component';
import { NaveComponent } from './pages/nave/nave.component';
import { MegaheaderComponent } from './pages/megaheader/megaheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoriesComponent,
    CardsComponent,
    CardComponent,
    PerfilComponent,
    SuggestionsComponent,
    NaveComponent,
    MegaheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
