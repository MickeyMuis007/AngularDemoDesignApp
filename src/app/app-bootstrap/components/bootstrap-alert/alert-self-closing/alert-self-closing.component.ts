import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-alert-self-closing',
  templateUrl: './alert-self-closing.component.html',
  styleUrls: ['./alert-self-closing.component.css']
})
export class AlertSelfClosingComponent implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 2000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`)
  }
}
