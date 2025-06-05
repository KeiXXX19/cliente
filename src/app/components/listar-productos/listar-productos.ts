import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.html'
})
export class ListarProductos {
  productos: Producto[] = [
    new Producto('Cocacola', 'Bebida', 'Buenos Aires', 2),
    new Producto('Malboro 20', 'Cigarrillos', 'Buenos Aires', 5)
  ];
}
