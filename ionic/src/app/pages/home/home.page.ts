import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Feed } from "../../../graphql";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading = true;
  error = false;
  feed: Observable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.feed = this.apollo.watchQuery<any>({ query: Feed })
      .valueChanges.pipe(
        map(({ data }) => data.feed),
        catchError(err => of(
          this.error = true,
          this.loading = false
        ))
      );
  }
}
