import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modal = 'modal';
  name = 'Angular';
  list: any[];
  list2: any[];
  openModal(inp: string) {
    console.log(inp);
    this.modal = 'modal-open';
  }
  closeModal() {
    this.modal = 'modal';
  }
  ngOnInit() {
    this.list = [
      {
        id: 1,
        title: 'Assessment & Progess',
        checked: false,
      },
      {
        id: 2,
        title: 'Weekly review',
        checked: false,
      },
      {
        id: 3,
        title: 'Therapy dashboard',
        checked: false,
      },
      {
        id: 4,
        title: 'Meal Summary',
        checked: false,
      },
      {
        id: 5,
        title: 'episode Summary',
        checked: false,
      },
    ];
    this.list2 = [
      {
        id: 1,
        title: 'Adherence',
        checked: false,
      },
      {
        id: 2,
        title: 'Senior & meter overview',
        checked: false,
      },
      {
        id: 3,
        title: 'Logbook',
        checked: false,
      },
      {
        id: 4,
        title: 'Device Settings',
        checked: false,
      },
    ];
  }

  get result() {
    return this.list.filter((item) => item.checked);
  }
  onSave(data: any) {
    console.log('received val;', data);
  }
}
