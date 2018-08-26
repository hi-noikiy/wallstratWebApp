export class Product {
  title: string;
  description: string;
  image: string;
  features:string[];

  constructor( product_title:string, product_description:string, image_src:string, features:string[]) {
     this.title = product_title;
     this.description = product_description;
     this.image = image_src; 
     this.features = features;
  }

}
