import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const Feed = gql`
  query {
    feed {
      id
      title
      description
    }
  }
`;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  loading = true;
  error: any;
  data: any[];
  data2: Observable<any>;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({ query: Feed })
      .valueChanges.subscribe(({ data, loading }) => {
        this.data = data.feed;
        this.loading = loading;
      },
        err => {
          this.error = true;
          this.loading = false;
        });

    this.data2 = this.apollo.watchQuery<any>({ query: Feed })
      .valueChanges.pipe(map(({ data }) => data.feed));
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

}
