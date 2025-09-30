
import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProposalAxisComponent } from './components/proposal-axis/proposal-axis.component';
import { ActorsViewComponent } from './components/actors-view/actors-view.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProposalService } from './services/proposal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ProposalAxisComponent,
    ActorsViewComponent,
    LifecycleComponent,
    FooterComponent
  ]
})
export class AppComponent {
  proposalService = inject(ProposalService);
  pedagogicalAxes = this.proposalService.getPedagogicalAxes();
}
