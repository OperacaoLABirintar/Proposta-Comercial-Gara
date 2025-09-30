import { Component, inject } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalService } from './services/proposal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule
  ]
})
export class AppComponent {
  proposalService = inject(ProposalService);
  pedagogicalAxes = this.proposalService.getPedagogicalAxes();
}