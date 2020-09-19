import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { SaudeComponent } from './components/saude/saude.component';
import { SaneamentoComponent } from './components/saneamento/saneamento.component';
import { LazerComponent } from './components/lazer/lazer.component';
import { MobilidadeComponent } from './components/mobilidade/mobilidade.component';
import { AcessibilidadeComponent } from './components/acessibilidade/acessibilidade.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    MenuPagLayoutComponent,
    ExemploComponent,
    SobrePageComponent,
    EducacaoComponent,
    SaudeComponent,
    SaneamentoComponent,
    LazerComponent,
    MobilidadeComponent,
    AcessibilidadeComponent,
    PlanejamentoComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // extra
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers:  [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
