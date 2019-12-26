import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  // hamburger.addEventListener( )
  

  constructor() { 
  }

  ngOnInit() {
  }


  hamburgerClicked() {
    // this.navLinks.classList.toggle("open");
    const  links = document.querySelector(".nav-links li");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
    links.classList.toggle("open");
  }
}
