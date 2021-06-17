// const sel = document.querySelector('#prd-selected-both') as HTMLSelectElement;
// const inpQuantity = document.querySelector("#quantity") as HTMLInputElement;
// let currentVariant = document.querySelector('#current-variant') as HTMLElement;
// let opt: any;

declare let product: any;

// sel.addEventListener('change', () => {
//   opt = sel.options[sel.selectedIndex];
//   let variant = product.variants.find((variant: { id: any; }) => variant.id == opt.value);
//   if (!variant.available) {
//     currentVariant.classList.add('sold-out');
//   }
// });


// const prdForm = document.querySelector('#prd-form') as HTMLElement;
// let url = new URL(`https://congbinh.myshopify.com/${prdForm.dataset.url}`);
// let search_params = url.searchParams;

// search_params.set('variant', opt.value);

// url.search = search_params.toString();

// let new_url = url.toString();
// console.log(new_url);

// const btnAddToCart = document.getElementById('add') as HTMLElement;
// btnAddToCart?.addEventListener('click', async () => {
//   let formData = {
//     'items': [{
//      'id': opt.value,
//      'quantity': inpQuantity.value
//      }]
//    };

//   const response = await fetch('/cart/add.js', {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify(formData)
//    })

//    const movies = await response.json();
//    location.reload();
//    return movies;
// });

class Cart {
  private sel : HTMLSelectElement;
  quantity: HTMLInputElement;
  currentVariant: HTMLElement;
  btnAdd: HTMLElement;
  option: any;

  constructor(element: HTMLElement) {
    this.sel = element.querySelector('#prd-selected-both') as HTMLSelectElement;
    this.quantity = element.querySelector("#quantity") as HTMLInputElement;
    this.currentVariant = element.querySelector('#current-variant') as HTMLElement;
    this.btnAdd = element.querySelector('#add') as HTMLElement;
    this.option = this.sel[0];
  }

  init(): void {
    this.variantChange();
    this.addToCart();
  }

  variantChange(): void {
    this.sel.addEventListener('change', () => {
      this.option = this.sel[this.sel.selectedIndex];
      let variant = product.variants.find((variant: { id: any; }) => variant.id == this.option.value);
      if (!variant.available) {
        this.currentVariant.classList.add('sold-out');
      }
    });
    console.log('done');
  }

  addToCart(): void {
    this.btnAdd?.addEventListener('click', async () => {
      let formData = {
        'items': [{
         'id': this.option.value,
         'quantity': this.quantity.value
         }]
       };

      const response = await fetch('/cart/add.js', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       })

       const movies = await response.json();
       location.reload();
       return movies;
    });
  }
}
const productEl = document.querySelector("#product") as HTMLElement;
const cart = new Cart(productEl);

cart.init();

