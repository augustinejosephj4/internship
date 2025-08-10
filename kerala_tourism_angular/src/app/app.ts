import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./common/navbar/navbar";
import { Districts } from "./pages/districts/districts";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Districts, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tourism');
}
