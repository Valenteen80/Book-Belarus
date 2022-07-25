import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortButtonDirection } from 'src/app/enums/sort-button-direction-enum';
import { SortButton } from 'src/app/interfaces/sort-button';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
  @Input() public sortButtons: SortButton[];
  @Output() public sortEvent: EventEmitter<SortButton> = new EventEmitter<SortButton>();

  public selectedButton: SortButton = {} as SortButton;
  public readonly sortButtonDirectionASC: string = SortButtonDirection.ASC;
  public readonly sortButtonDirectionDESC: string = SortButtonDirection.DESC;

  public sort(selectedButton: SortButton): void {
    this.selectedButton = { ...selectedButton };

    this.selectedButton.sortDirection =
      selectedButton.sortDirection === SortButtonDirection.ASC
        ? SortButtonDirection.DESC
        : SortButtonDirection.ASC;
    this.sortEvent.emit(this.selectedButton);
  }

}
