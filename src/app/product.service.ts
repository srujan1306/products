import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const API = 'https://66c0344fba6f27ca9a55f89c.mockapi.io';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private router: Router) {}

  getAllProducts(): any {
    return fetch(`${API}/products`).then((res) => res.json());
  }
  getProductById(id: string): any {
    return fetch(`${API}/products/${id}`).then((res) => res.json());
  }
}
