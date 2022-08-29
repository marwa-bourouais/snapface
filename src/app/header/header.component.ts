import {Component} from '@angular/core';
import { Router } from '@angular/router';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewFaceSnap() {
    this.router.navigateByUrl('/create');
  }
}