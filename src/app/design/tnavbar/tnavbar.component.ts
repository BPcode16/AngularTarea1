import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './tnavbar.component.html',
  styleUrls: ['./tnavbar.component.scss'],
})
export class NavbarComponent {
  @ViewChild('myButton') hamburger!: ElementRef;
  @ViewChild('mobile') navMenu!: ElementRef;

  modificar() {
    this.hamburger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
    const miSelector = document.getElementById('mybody') as HTMLElement;
    miSelector.classList.toggle('is-active');
  }
}
