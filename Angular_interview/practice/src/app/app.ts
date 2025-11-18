import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './components/communication/parent/parent';
import { Child } from './components/communication/child/child';
import { ReactiveForm } from './components/Form/reactive-form/reactive-form';
import { Reactivetwo } from './components/Form/reactivetwo/reactivetwo';
import { User } from './components/statemgmtBehaviour/user/user';
import { Profile } from './components/statemgmtBehaviour/profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,ReactiveForm,Reactivetwo,User,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
}
