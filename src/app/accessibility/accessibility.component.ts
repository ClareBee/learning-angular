import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css'],
})
export class AccessibilityComponent implements OnInit {
  constructor() {}
  ariaMarkdown = `<!-- Use attr. when binding to an ARIA attribute -->
<button [attr.aria-label]="myActionLabel">...</button>`;
  ngOnInit() {}
}
