const CATEGORIABIRRAS = [
    {
    "birraid": 1,
    "nombre": "Growler Scottish",
    "imagen": "images/grwoler.jpg",
    "precio": 380,
    },
        {
    "birraid": 2,
    "nombre": "Growler IPA",
    "imagen": "images/grwoler.jpg",
    "precio": 410,
    },
    {
    "birraid": 3,
    "nombre": "Growler Golden",
    "imagen": "images/grwoler.jpg",
    "precio": 320,
    },
    {
    "birraid": 4,
    "nombre": "Growler Kolsch",
    "imagen": "images/grwoler.jpg",
    "precio": 340,
    },
    {
    "birraid": 5,
    "nombre": "Growler Honey",
    "imagen": "images/grwoler.jpg",
    "precio": 360,
    },
    {
    "birraid": 6,
    "nombre": "Six Pack Scottish",
    "imagen": "images/lataScotish.png",
    "precio": 420,
    },
    {
    "birraid": 7,
    "nombre": "Six Pack Honey",
    "imagen": "images/lataHoney.png",
    "precio": 400,
    },
    {
    "birraid": 8,
    "nombre": "Remera NUNA",
    "imagen": "images/remera.png",
    "precio": 350,
    },
    {
    "birraid": 9,
    "nombre": "Gorro NUNA",
    "imagen": "images/gorro.png",
    "precio": 300,
    },
    {
    "birraid": 10,
    "nombre": "Destapador NUNA",
    "imagen": "images/destapador.png",
    "precio": 100,
    },
      {
    "birraid": 11,
    "nombre": "Llavero NUNA",
    "imagen": "images/llaveroNuna.png",
    "precio": 70,
    },
    {
    "birraid": 12,
    "nombre": "Posavasos x 6",
    "imagen": "images/posavaso.png",
    "precio": 480,
    }
]


  
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(CATEGORIABIRRAS));


