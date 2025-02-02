import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productos = [
    { nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 10, categoria: 'cat1' },
    { nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 20, categoria: 'cat2' },
    
  ];

  private cart: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();
  private filteredProducts = new BehaviorSubject<any[]>(this.productos);
  public filteredProducts$ = this.filteredProducts.asObservable();


  constructor() { }

  getProducts(): Observable<any[]> {
    return this.filteredProducts$;
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.cartCount.next(this.cart.length);
  }

  getCart() {
    return this.cart;
  }

  filterProducts(query: string) {
    query = query.toLowerCase().trim();
    console.log('🔍 Buscando:', query);
    if (!query) {
      this.filteredProducts.next(this.productos);
      return;
    }

    const filtered = this.productos.filter(p =>
      p.nombre.toLowerCase().includes(query) || p.categoria.toLowerCase().includes(query)
    );

    this.filteredProducts.next(filtered);
  }
}
