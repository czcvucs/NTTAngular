import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Offers, VData } from '../../models';


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements AfterViewInit {

  @Input() data: VData;
  displayedColumns: string[] = [
    'product.content.text',
    'contractTerm.uploadSpeed.amount',
    'contractTerm.downloadSpeed.amount',
    'cost.effectiveCost.amount'
  ];
  dataSource = new MatTableDataSource<Offers>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    if (this.data != null) {
      this.dataSource.data = this.data.offers;
      this.dataSource.sort = this.sort;
      this.dataSource.sortingDataAccessor =
        (data: object, sortHeaderId: string): string | number => {
          const propPath = sortHeaderId.split('.');
          const value: any = propPath
            .reduce((curObj, property) => curObj[property], data);
          return !isNaN(value) ? Number(value) : value;
        };
    }
    this.changeDetectorRef.detectChanges();
  }
}
