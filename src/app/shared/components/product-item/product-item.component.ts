import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../product.module';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onSave = new EventEmitter<Product>();

  editMode = false;

  productForm!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const controls={
      name: [null, [Validators.required, Validators.maxLength(100)]],
      quantity: [null, [Validators.required, Validators.maxLength(200) ]],
  }
  this.productForm = this.fb.group(controls);

    if(this.product){
      this.productForm.patchValue(this.product);
    }
  }

  delete(){
    this.onDelete.emit(this.product.id);
  }
  save(){
    const product = this.productForm.value;
    this.onSave.emit(product);
    this.editMode = false;
  }
}
