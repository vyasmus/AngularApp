import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Header } from '../header/header';

@Component({
  selector: 'app-main-frame',
  imports: [Header, RouterOutlet, RouterLink, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './main-frame.html',
  styleUrl: './main-frame.css',
})
export class MainFrame {
  protected readonly title = signal('AngularApp');
}
