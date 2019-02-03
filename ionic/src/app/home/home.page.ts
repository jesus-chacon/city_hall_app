import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loading = true;
  error: any;
  data: any[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            feed {
              id
              title
              description
            }
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.data = result.data && result.data['feed'];
        this.loading = result.loading;
        console.log(result);
        this.error = !!result.errors;
      });
  }

}
