// CONSUMO DE API
let lista = document.getElementById('lista');

fetch('https://fakestoreapi.com/products')
    .then(
        result => result.json()
    )
    .then(
        data => carregarLista(data)
    )

function carregarLista(data) {
    lista.innerHTML = ''

    data.forEach((produto) => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.style.width = "300px"

        card.innerHTML = `
        <div class="card shadow-sm border-0 rounded-4 modern-card">
            <img src="${produto.image}" class="card-img-top rounded-top-4" alt="${produto.description}">
            <div class="card-body">
            <h5 class="card-title fw-semibold text-dark">${produto.title}</h5>
            <p class="card-text text-secondary fs-5">$ ${produto.price}</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <i class="bi bi-cart-plus-fill me-2"></i>
                Adicionar ao Carrinho
            </button>
            </div>
        </div>
        `

        lista.appendChild(card)
    })
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}