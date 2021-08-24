import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-document-search',
  templateUrl: './document-search.component.html',
  styleUrls: ['./document-search.component.scss']
})
export class DocumentSearchComponent implements OnInit {
  documents = [{ id: 1, name: 'Terminal Instructables', category: 'Technical' },
  { id: 2, name: 'Installation guides', category: 'Technical' },
  { id: 3, name: 'Career opportunities', category: 'Human resources' },
  { id: 4, name: 'Customer Onboarding', category: 'Financial' },
  { id: 5, name: 'Outlet Branding', category: 'Marketing' },
  { id: 6, name: 'Accounting Procedures', category: 'Financial' },
  { id: 7, name: 'Training', category: 'Human resources' },
  { id: 8, name: 'Printing guidance', category: 'Marketing' },
  { id: 9, name: 'Technical support', category: 'Technical' }];
  categories: string[];
  selectedCategory: string;
  searchText: any;
  constructor() {
    this.categories = [];
    this.selectedCategory = '';
    this.searchText = '';
  }

  ngOnInit(): void {
    this.categories = [...new Set(this.documents.map(item => item.category))];
  }
  setCategory(category: string): void {
    this.selectedCategory = category;
  }

}
