import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: any = ['item 1','item 2','item 3','item 4'];

}
