import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../product.module';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() onSave = new EventEmitter<Product>();

  productForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      quantity: [null, [Validators.required, Validators.maxLength(200) ]],
      
    }
    this.productForm = this.fb.group(controls);
  }

    save(){
      const product = this.productForm.value;
    this.onSave.emit(product);
    this.productForm.reset();
    }
}
