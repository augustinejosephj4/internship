import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,FormsModule],
  standalone:true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})


export class Navbar {

  searchQuery: string = '';
  constructor(private router:Router){}

onSearch() {
  if (this.searchQuery.trim()) {
    this.router.navigate(['/'], { queryParams: { q: this.searchQuery } });
  }
}

}
