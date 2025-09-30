
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedagogicalAxis } from '../../models/proposal.model';

@Component({
  selector: 'app-proposal-axis',
  templateUrl: './proposal-axis.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class ProposalAxisComponent {
  axis = input.required<PedagogicalAxis>();
}
