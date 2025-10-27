import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './components/communication/parent/parent';
import { Child } from './components/communication/child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice');
}
