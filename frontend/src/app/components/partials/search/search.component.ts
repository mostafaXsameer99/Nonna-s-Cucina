import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  key = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe(params => {
      if (params.key) {
        this.key = params.key;
      }
    });
  }

  ngOnInit(): void {

  }

  search(key: String): void {
    if (key) {
      this.router.navigateByUrl('/search/' + key)
    }
  }

}
