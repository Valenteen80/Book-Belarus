import { SortButtonDirection } from '../../enums/sort-button-direction-enum';
import { ButtonLabel } from '../../enums/button-label-enum';
import { ButtonValue } from '../../enums/button-value-enum';
import { SortButton } from '../../interfaces/sort-button';

export const SORTBUTTONS: SortButton[] = [
  {
    label: ButtonLabel.BY_RATING,
    value: ButtonValue.RATING,
    sortDirection: SortButtonDirection.DESC,
  },
  {
    label: ButtonLabel.BY_PRICE,
    value: ButtonValue.PRICE,
    sortDirection: SortButtonDirection.ASC,
  },
];
