import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent implements OnInit {
  routerLink = `<a routerLink="/" [routerLinkActiveOptions]="{ exact: true }">Home</a>`;
  pageScroll = `ngx i ngx-page-scroll --save

// in app.module.ts
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  imports: [
      /* Other imports here */
      NgxPageScrollModule
  ]
})
export class AppModule {
}`;

cssSnippet = `.active {
  background-color: theme(backgroundColor.background-dark);
  color: theme(textColor.white);
}
`
jsonConfig = ` // package.json scripts
{
  "format:fix": "pretty-quick --staged",
  "tslint-check": "tslint-config-prettier-check ./tslint.json"
},
"husky": {
  "hooks": {
    "pre-commit": "run-s format:fix lint"
  }
}`;
prettierConfig = `// .prettierrc
{
"trailingComma": "es5",
"tabWidth": 2,
"semi": true,
"singleQuote": true,
"htmlWhitespaceSensitivity": "ignore"
}
`;
constructor() {}
  ngOnInit() {}
}
