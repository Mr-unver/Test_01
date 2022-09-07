const data = [
    {
            title : 'Продукт 1',
            price : 1200,
            image : 'bravo-10.png',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.'
    },
    {
            title: 'Продукт 2',
            price: 1400,
            image : 'bravo-20.png',
            description : 'Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.'
    },
    {
            title: 'Продукт 3',
            price: 1600,
            image : 'bravo-30.png',
            description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.'
        }
    ]

class ProductService {
    constructor(products = []) {
      this.products = products
    }
}

class HTMLService {paintProduct(cart) 
   
    {
        return `
            <div class="col-4" wight="360" >
            <p class='card-title' display="inline-block">${cart.title}</p>    
            <img src="${cart.image}" class='img-fluid'/>
            <p class='description'>${cart.description}</p>
            <p class='price'>${new Intl.NumberFormat().format(cart.price)} руб.</p>
            <button class="btn">Добавить в корзину</button>
            </div>
        `
    }

    paintProducts(cart = []) 
    {
        return cart.map(this.paintProduct).join('')
    }
    
    paintCart({ totalPrice }) 
    {
        if (items.length === 0) {
            return `
            <p class="info">
              <span>Общая цена: <p class="redtext">${totalPrice.toFixed(2)}</p></span>
            </p>
          `
        }
    
        return `
        <p class="info">
          <span>Общая цена: <p class='price'>${new Intl.NumberFormat().format(totalPrice.toFixed(2))} руб.</p></span>
        </p>
      `
    }
}

const productService = new ProductService(data)
const htmlService = new HTMLService()

const productsContainer = document.getElementById('cart')

function renderProducts() {
    productsContainer.innerHTML = htmlService.paintProducts(
        productService.products
    )
}

renderProducts()
