const loader = document.getElementById('loader')

function mostrarLoader() {
    loader.classList.remove('d-none')
}

function esconderLoader() {
    loader.classList.add('d-none')
}

// CONSUMO DE API
let lista = document.getElementById('lista');

fetch('https://fakestoreapi.com/products')
    .then(
        result => result.json()
    )
    .then(
        data => carregarLista(data)
    )

// CARREGAR TODOS OS PRODUTOS
function carregarLista(data) {
    lista.innerHTML = ''

    data.forEach((produto) => {
        let card = document.createElement('div')
        card.classList.add('col-sm-6', 'col-md-4', 'col-lg-3')
        card.innerHTML = `
        <div class="card shadow-sm border-0 rounded-4 modern-card h-100 d-flex flex-column">
            <img src="${produto.image}" class="card-img-top rounded-top-4" alt="${produto.description}" style="object-fit: contain; height: 250px;">
            <div class="card-body">
            <h5 class="card-title fw-semibold text-dark card-title-limit">${produto.title}</h5>
            <p class="card-text text-secondary fs-5">$ ${produto.price}</p>
            <button class="btn btn-primary mt-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <i class="bi bi-cart-plus-fill me-2"></i>
                Adicionar ao Carrinho
            </button>
            </div>
        </div>
        `

        lista.appendChild(card)
    })
}

// CARREGAR POR CATEGORIA
function carregarPorCategoria(categoria = 'all') {
    lista.innerHTML = ''
    let url = 'https://fakestoreapi.com/products'

    if (categoria !== 'all') {
        url = `https://fakestoreapi.com/products/category/${categoria}`
    }

    fetch(url)
        .then(
            result => result.json()
        )
        .then(
            data => carregarLista(data)
        )
}

function selecionarCategoria(categoria, elemento) {
    document.querySelectorAll('.filtro-link').forEach(link => {
        link.classList.remove('active');
    });
    
    elemento.classList.add('active');

    carregarPorCategoria(categoria);
}


const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}