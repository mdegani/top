import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dimension } from '../models/dimension';
import * as collection from '../actions/collection';
import * as fromDimensions from '../reducers';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  dataSource: DimensionDataSource | null;
  displayedColumns = ['id', 'name', 'dimType'];

  constructor(private store: Store<Dimension>) {}

  ngOnInit() {
    this.dataSource = new DimensionDataSource(this.store);
  }
}

export class DimensionDataSource extends DataSource<any> {
  constructor(private store: Store<Dimension>) {
    super();
  }
  connect(): Observable<Dimension[]> {
    this.store.dispatch(new collection.Load());

    return this.store.select(fromDimensions.getAllDimensions);
  }
  disconnect() {}
}
