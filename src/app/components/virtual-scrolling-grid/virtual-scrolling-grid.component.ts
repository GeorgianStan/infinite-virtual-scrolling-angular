import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'virtual-scrolling-grid',
  templateUrl: './virtual-scrolling-grid.component.html',
  styleUrls: ['./virtual-scrolling-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollingGridComponent {
  @ViewChild(CdkVirtualScrollViewport) scroll: CdkVirtualScrollViewport;
  items = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);

  constructor() {}
}
