import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './components/menu-pag-layout/menu-pag-layout.component';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { SaudeComponent } from './components/saude/saude.component';
import { SaneamentoComponent } from './components/saneamento/saneamento.component';
import { LazerComponent } from './components/lazer/lazer.component';
import { MobilidadeComponent } from './components/mobilidade/mobilidade.component';
import { AcessibilidadeComponent } from './components/acessibilidade/acessibilidade.component';
import { PlanejamentoComponent } from './components/planejamento/planejamento.component';


const routes: Routes = [
  {
    path: '', component: MenuPagLayoutComponent,
    children: [
      { path: '', component: ExemploComponent },
      { path: 'acessibilidade', component: AcessibilidadeComponent},
      { path: 'educacao', component: EducacaoComponent},
      { path: 'saude', component: SaudeComponent},
      { path: 'saneamento', component: SaneamentoComponent},
      { path: 'lazer', component: LazerComponent},
      { path: 'mobilidade', component: MobilidadeComponent},
      { path: 'planejamento', component: PlanejamentoComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
