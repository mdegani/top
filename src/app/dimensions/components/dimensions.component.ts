import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dimension } from '../models/dimension';
import * as dimension from '../actions/dimension';
import * as fromDimensions from '../reducers';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { MatRadioGroup } from '@angular/material';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  dataSource: DimensionDataSource | null;
  displayedColumns = ['id', 'name', 'dimType'];
  dimTypes = this.store.select(fromDimensions.getDistinctDimTypes);
  selectedDimType: Observable<string>;

  constructor(private store: Store<Dimension>) {}

  ngOnInit() {
    this.selectedDimType = this.store.select(
      fromDimensions.getSelectedDimType
    );
    this.dataSource = new DimensionDataSource(
      this.store,
      this.selectedDimType
    );
  }

  changeSelectedDimType(newValue) {
    this.store.dispatch(new dimension.ChangeSelectedDimType(newValue));
  }
}

export class DimensionDataSource extends DataSource<any> {
  constructor(
    private store: Store<Dimension>,
    private selected: Observable<string>
  ) {
    super();
  }
  connect(): Observable<Dimension[]> {
    this.store.dispatch(new dimension.Load());

    return this.selected.switchMap(strValue => {
      return this.store.select(fromDimensions.getAllDimensions).map(data => {
        return data.filter(row => row.dimType === strValue);
      });
    });
  }
  disconnect() {}
}
