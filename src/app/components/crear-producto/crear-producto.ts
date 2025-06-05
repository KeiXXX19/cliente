import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.html'
})
export class CrearProducto {
  producto: Producto = new Producto('', '', '', 0);

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí deberías guardar el producto (servicio, etc.)
    console.log('Producto creado:', this.producto);
    this.router.navigate(['/']);
  }
}
