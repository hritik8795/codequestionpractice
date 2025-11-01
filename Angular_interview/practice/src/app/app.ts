import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './components/communication/parent/parent';
import { Child } from './components/communication/child/child';
import { ReactiveForm } from './components/Form/reactive-form/reactive-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
}
