import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Dimension } from '../models/dimension';
import * as collection from '../actions/collection';
import * as fromDimensions from '../reducers';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  dimensions$;

  constructor(private store: Store<Dimension>) {
    this.dimensions$ = this.store.select(fromDimensions.getAllDimensions);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

}
