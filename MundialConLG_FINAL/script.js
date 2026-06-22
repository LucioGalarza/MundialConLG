/* ═══════════════════════════════════════════════════════════
   MundialConLG — script.js
   Algoritmos y Estructuras de Datos — Proyecto Universitario
   Registro: ProductoHistorico — Clave: idProducto
═══════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────
   REGISTRO PRINCIPAL: ProductoHistorico[]
   Estructura: idProducto | nombre | mundial | categoria |
               descripcion | precio | imagen | disponibilidad
────────────────────────────────────────────────────────── */
const productosHistoricos = [
  {
    idProducto: "P001",
    nombre: "Cuadro Conmemorativo Mano de Dios",
    mundial: "México 1986",
    categoria: "Cuadro",
    descripcion: "Reproducción artística del instante exacto en que Maradona anota con la mano ante Inglaterra en cuartos de final. Un momento que dividió al mundo y se convirtió en leyenda inmortal del fútbol. Impresión de alta definición en bastidor de madera, 60x80 cm.",
    precio: 12500,
    imagen: "https://www.infobae.com/resizer/v2/O2XK5EXCKVEM5NY47FQ3HFQ7OU.jpg?auth=fcd8eb629410862cca79613c8fc7324a6f710211c751122f164ca1633137bc4f&smart=true&width=992&height=558&quality=85",
    disponibilidad: true
  },
  {
    idProducto: "P002",
    nombre: "Cuadro Cabezazo de Zidane",
    mundial: "Alemania 2006",
    categoria: "Cuadro",
    descripcion: "Arte conmemorativo del infame cabezazo de Zinedine Zidane a Marco Materazzi en la final ante Italia. El último acto de un genio. Litografía artística numerada, edición limitada de 500 ejemplares. Incluye certificado de autenticidad.",
    precio: 9800,
    imagen: "https://scontent.fres5-1.fna.fbcdn.net/v/t39.30808-6/483873160_9965553366813431_7950791225893735062_n.jpg?stp=dst-jpg_tt6&cstp=mx875x837&ctp=p526x296&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3jXEdqkrlcAQ7kNvwF48Cf1&_nc_oc=AdrKHnGJ6rhUN9v57_II22MEoNoATDfLAVs1Y6Pc0zs_Xktx6GyQ2IpyAGvPFitSkoHT6g4VSCBsaH-jyjO1oEhL&_nc_zt=23&_nc_ht=scontent.fres5-1.fna&_nc_gid=EziO5WMctFv5NQC431p5CQ&_nc_ss=78289&oh=00_Af_NHTpXVu-zWUMJ1kykSBWXBeNcToUHIQZdFIPklG1r-Q&oe=6A3F030C",
    disponibilidad: true
  },
  {
    idProducto: "P003",
    nombre: "Pelota Jabulani — Sudáfrica 2010",
    mundial: "Sudáfrica 2010",
    categoria: "Pelota",
    descripcion: "Réplica oficial de la polémica Jabulani, la pelota más controvertida de la historia de los mundiales. Los arqueros la odiaron, los físicos la estudiaron. Material poliuretano de alta calidad, sellada y numerada.",
    precio: 5075,
    imagen: "https://www.ecured.cu/images/thumb/7/77/Jabulani-balon-oficial-fifa-2010.jpg/390px-Jabulani-balon-oficial-fifa-2010.jpg",
    disponibilidad: true
  },
  {
    idProducto: "P004",
    nombre: "Colección Waka Waka — Sudáfrica 2010",
    mundial: "Sudáfrica 2010",
    categoria: "Colección",
    descripcion: "Set completo de 5 piezas temáticas del Mundial Sudáfrica 2010: postal oficial, pin de la vuvuzela, banderín de seda, programa de la final y lámina de la canción oficial de Shakira. El mundial del fútbol africano en un solo pack.",
    precio: 4000,
    imagen: "https://storage.googleapis.com/assets.puremix.com/uploads/blog_posts/waka-waka-shakira-freshlyground/images/68ff7091-9838-4d14-98ab-e879cd0ed5cc.jpg",
    disponibilidad: true
  },
  {
    idProducto: "P005",
    nombre: "Botín Izquierdo Messi — Final Qatar",
    mundial: "Qatar 2022",
    categoria: "Botín",
    descripcion: "Réplica exacta del botín izquierdo Adidas X Speedportal con el que Lionel Messi jugó la final más épica de la historia ante Francia. Incluye la firma de colección y número 10. El botín que caminó hacia la gloria.",
    precio: 1000000,
    imagen: "https://media.todojujuy.com/p/247e4889091c0e6891650e1ad77cfb6e/adjuntos/227/imagenes/003/263/0003263743/790x0/smart/botines-messijpgwebp.png",
    disponibilidad: false
  },
  {
    idProducto: "P006",
    nombre: "Remera Messi Campeón Qatar 2022",
    mundial: "Qatar 2022",
    categoria: "Camiseta",
    descripcion: "Camiseta conmemorativa con el número 10 y estampado 'CAMPEÓN DEL MUNDO 2022'. Diseño premium en tela técnica transpirable. La remera que celebró 36 años de espera. Tallas: S / M / L / XL.",
    precio: 50000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyB6rV9ygSLwRYXcxW4ck1LNk1Ajr_ANYtnxyWSn4kOweBt0U276yQKryE&s=10",
    disponibilidad: true
  },
  {
    idProducto: "P007",
    nombre: "Figura Mbappé Joven — Rusia 2018",
    mundial: "Rusia 2018",
    categoria: "Figura",
    descripcion: "Figura coleccionable del prodigioso Kylian Mbappé en su primer mundial, cuando con apenas 19 años ganó el premio al mejor jugador joven. Resina de alta precisión, 22 cm de altura, base de madera tallada.",
    precio: 6700,
    imagen: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2018%2F07%2F18070938%2Fkylian-mbappe-campen-del-mundo-mundial-rusia-2018-SF.jpg?auth=5dd63cf57731be443c242be144982aead09c97b44954de7d3abeb6551e2c30e9&smart=true&width=992&height=693&quality=85",
    disponibilidad: true
  },
  {
    idProducto: "P008",
    nombre: "Poster Argentina Campeón Qatar 2022",
    mundial: "Qatar 2022",
    categoria: "Poster",
    descripcion: "Poster panorámico 90x60 cm del plantel argentino levantando la Copa del Mundo en Lusail. Fotografía oficial de alta resolución, impresión en papel fotográfico premium mate. La imagen más reproducida de la historia del fútbol argentino.",
    precio: 2000,
    imagen: "https://fotos.perfil.com/2022/12/18/trim/987/555/argentina-campeon-del-mundo-1475237.jpg?webp",
    disponibilidad: true
  },
  {
    idProducto: "P009",
    nombre: "Camiseta España Campeón 2010",
    mundial: "Sudáfrica 2010",
    categoria: "Camiseta",
    descripcion: "Réplica de la icónica camiseta roja de España en su primera y única conquista del campeonato mundial. La camiseta del tiki-taka, de Iniesta, de Villa, del gol más esperado de la historia española.",
    precio: 5700,
    imagen: "https://acdn-us.mitiendanube.com/stores/002/042/897/products/y-espana-20101-53ce938e4ccb9907e816776426004388-1024-1024.webp",
    disponibilidad: true
  },
  {
    idProducto: "P010",
    nombre: "Camiseta Alemania Campeón 2014",
    mundial: "Brasil 2014",
    categoria: "Camiseta",
    descripcion: "La camiseta blanca que vistió el equipo más dominante del siglo en el Maracaná. El 7-1 a Brasil quedó grabado en la historia y esta réplica es prueba de ello. Incluye el parche oficial de campeón del mundo.",
    precio: 1,
    imagen: "https://acdn-us.mitiendanube.com/stores/004/615/161/products/27ae794d-3b3fe1da4a3c4cdf9a17149207341097-1024-1024.webp",
    disponibilidad: true
  },
  {
    idProducto: "P011",
    nombre: "Cuadro de la maejor atajada de la historia de los mundiales",
    mundial: "Qatar 2022",
    categoria: "Cuadro",
    descripcion: "Composición artística de la mejor ataja en la historia de todos los mundiales realizada por el señor Dibu Martinez a Kolo Muani en el minuto 122:43 del segundo tiempo de la prorroga.",
    precio: 11000,
    imagen: "https://www.infobae.com/resizer/v2/7QEUXFUWX5D2LOUCZVUL3E2KR4?auth=432dd586ef660415b46af1bee99cad5af1e60063cb415386f1d74269d035f4fc&smart=true&width=992&height=558&quality=85",
    disponibilidad: false
  },
  {
    idProducto: "P012",
    nombre: "Poster Maradona México 86 — El Mejor",
    mundial: "México 1986",
    categoria: "Poster",
    descripcion: "Composición fotográfica con los cuatro goles más recordados de Maradona en México 86: la Mano de Dios, el Gol del Siglo, y dos más contra Bélgica. Impresión serigráfica de 5 colores, edición numerada 200 ejemplares.",
    precio: 4200,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdRZWYPmKCWFUnkK8uNCg14xdHZU9WHvRy2m_VBSaFhVJ3RuTt5hYhkE&s=10",
    disponibilidad: true
  }
];

/* ──────────────────────────────────────────────────────────
   CAMISETAS CAMPEONAS — Galería visual
────────────────────────────────────────────────────────── */
const camisetasCampeonas = [
  {
    campeon: "Brasil",
    año: 2002,
    sede: "Corea-Japón",
    imagen: "https://acdn-us.mitiendanube.com/stores/004/615/161/products/tmp_b64_9b68dab4-8e88-4fcb-8aa2-393c88a1bb40_4615161_6179703-89d99200710f1a475017818161394658-1024-1024.webp",
    emoji: "🇧🇷"
  },
  {
    campeon: "Italia",
    año: 2006,
    sede: "Alemania",
    imagen: "https://acdn-us.mitiendanube.com/stores/004/615/161/products/35d7f282-ce3bb6deec9064f3b217149339503044-1024-1024.webp",
    emoji: "🇮🇹"
  },
  {
    campeon: "España",
    año: 2010,
    sede: "Sudáfrica",
    imagen: "https://acdn-us.mitiendanube.com/stores/002/042/897/products/y-espana-20101-53ce938e4ccb9907e816776426004388-1024-1024.webp",
    emoji: "🇪🇸"
  },
  {
    campeon: "Alemania",
    año: 2014,
    sede: "Brasil",
    imagen: "https://camisetasfutbolymas.com/wp-content/uploads/2023/04/alemania-2014-frontal.jpg.png",
    emoji: "🇩🇪"
  },
  {
    campeon: "Francia",
    año: 2018,
    sede: "Rusia",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTUVaQ1QDNL9hS1svDKu8WfSF2n5pyQ9093qS9U_50LWv2r7YQ0GoExef&s=10",
    emoji: "🇫🇷"
  },
  {
    campeon: "Argentina",
    año: 2022,
    sede: "Qatar",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_921701-MLA109221854500_042026-F.webp",
    emoji: "🇦🇷"
  }
];

/* ──────────────────────────────────────────────────────────
   HISTORIA DE LOS MUNDIALES — Timeline
────────────────────────────────────────────────────────── */
const historiaMundiales = [
  {
    año: 2002,
    sede: "Corea del Sur & Japón",
    campeon: "🇧🇷 Brasil — Pentacampeón",
    momento: "Ronaldo Fenómeno regresó de dos graves lesiones para marcar un doblete en la final ante Alemania (2-0). Su grito de gol en Yokohama fue el resurgir del fenómeno.",
    imagen: "https://estaticos-cdn.prensaiberica.es/clip/f1b5b1b5-f0cc-46da-8fb2-b2ba2a7a09ea_source-aspect-ratio_default_0.webp"
  },
  {
    año: 2006,
    sede: "Alemania",
    campeon: "🇮🇹 Italia — Tetracampeón",
    momento: "La final fue decidida en los penales ante Francia. Pero la imagen que quedó para siempre fue el cabezazo de Zinedine Zidane a Materazzi en el último acto de su carrera.",
    imagen: "https://preview.redd.it/9-luglio-2006-19-anni-fa-litalia-vinceva-il-mondiale-v0-numm5ye8tvbf1.jpeg?auto=webp&s=840b6386a1850cab4bd57962f8ec64136cb57431"
  },
  {
    año: 2010,
    sede: "Sudáfrica",
    campeon: "🇪🇸 España — Primera Copa del Mundo",
    momento: "Iniesta en el minuto 116 ante Holanda. España se convirtió en el primer equipo europeo en ganar un mundial fuera de Europa. El tiki-taka conquistó el mundo.",
    imagen: "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_43,w_3310,h_1861/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2Fsports_illustrated_ftbol%2F01k03x8pa6956n3hvqa9.jpg"
  },
  {
    año: 2014,
    sede: "Brasil",
    campeon: "🇩🇪 Alemania — Cuarto título",
    momento: "El 7-1 de Alemania sobre Brasil en el Mineirão se conoció como el Mineirazo. La humillación más grande del anfitrión en su propia casa. Mario Götze hizo el gol de la final.",
    imagen: "https://fotos.perfil.com/2026/01/14/trim/987/555/el-mineirazo-la-historica-derrota-de-brasil-ante-alemania-que-transformo-el-futbol-mundial-en-2014-2169108.jpg?webp"
  },
  {
    año: 2018,
    sede: "Rusia",
    campeon: "🇫🇷 Francia — Segundo título",
    momento: "Francia ganó con un equipo de generación irrepetible liderado por el jovencísimo Kylian Mbappé, que con 19 años se convirtió en el segundo jugador joven en marcar en una final.",
    imagen: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1AED/production/_102539860_4ff917d6-45cd-4957-b4d7-58b1df4f7bbf.jpg.webp"
  },
  {
    año: 2022,
    sede: "Qatar",
    campeon: "🇦🇷 Argentina — Tricampeón",
    momento: "Lionel Messi, a los 35 años, levantó la Copa del Mundo ante Francia en la final más épica de la historia (3-3, penales). 36 años de espera. El mundo se rindió ante el GOAT.",
    imagen: "https://primerobahia.com.ar/wp-content/uploads/2022/12/argentina-campeon-750x375.png"
  }
];

/* ──────────────────────────────────────────────────────────
   ESTADO GLOBAL
────────────────────────────────────────────────────────── */
let productosFiltrados = [...productosHistoricos]; // Resultado de búsqueda/filtro
let carrito            = [];                       // Array del carrito de compras
let productoEnModal    = null;                     // Producto activo en el modal

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: mostrarProductos()
   Recorre productosHistoricos[] y genera las cards dinámicamente
══════════════════════════════════════════════════════════ */
function mostrarProductos(lista = productosHistoricos) {
  const grid  = document.getElementById("productsGrid");
  const count = document.getElementById("productCount");

  // Limpiar grilla
  grid.innerHTML = "";

  // Actualizar contador
  count.textContent = `Mostrando ${lista.length} producto${lista.length !== 1 ? "s" : ""}`;

  // Sin resultados
  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="no-results reveal">
        <span>🔍</span>
        No se encontraron productos que coincidan con tu búsqueda.
      </div>`;
    activarReveal();
    return;
  }

  // Generar cada card recorriendo el arreglo
  lista.forEach((producto, index) => {
    const card = document.createElement("div");
    card.className = "product-card reveal";
    card.style.transitionDelay = `${index * 0.06}s`;
    card.setAttribute("data-id", producto.idProducto);

    const stockClass = producto.disponibilidad ? "stock-in" : "stock-out";
    const stockText  = producto.disponibilidad ? "EN STOCK" : "AGOTADO";
    const precioFmt  = formatearPrecio(producto.precio);

    card.innerHTML = `
      <span class="product-card-stock ${stockClass}">${stockText}</span>
      <img
        class="product-card-img"
        src="${producto.imagen}"
        alt="${producto.nombre}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x250/1a1a25/c9a84c?text=⚽'"
      />
      <div class="product-card-body">
        <div class="product-card-cat">${producto.categoria}</div>
        <div class="product-card-name">${producto.nombre}</div>
        <div class="product-card-mundial">🌍 ${producto.mundial}</div>
        <div class="product-card-footer">
          <span class="product-card-price">${precioFmt}</span>
          <button
            class="product-card-btn"
            onclick="mostrarDetalleProducto('${producto.idProducto}')"
          >VER DETALLE</button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  // Activar animación de aparición
  activarReveal();
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: buscarProducto()
   Búsqueda en tiempo real sobre nombre, mundial y categoría
══════════════════════════════════════════════════════════ */
function buscarProducto() {
  const termino   = document.getElementById("searchInput").value.toLowerCase().trim();
  const mundial   = document.getElementById("filterMundial").value;
  const categoria = document.getElementById("filterCategoria").value;

  productosFiltrados = productosHistoricos.filter(p => {
    // Condición de texto
    const coincideTexto =
      !termino ||
      p.nombre.toLowerCase().includes(termino) ||
      p.mundial.toLowerCase().includes(termino) ||
      p.categoria.toLowerCase().includes(termino) ||
      p.descripcion.toLowerCase().includes(termino);

    // Condición de filtro mundial
    const coincideMundial = !mundial || p.mundial === mundial;

    // Condición de filtro categoría
    const coincideCategoria = !categoria || p.categoria === categoria;

    return coincideTexto && coincideMundial && coincideCategoria;
  });

  mostrarProductos(productosFiltrados);
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: filtrarPorMundial()
   Aplica filtro de mundiales (y re-ejecuta búsqueda activa)
══════════════════════════════════════════════════════════ */
function filtrarPorMundial() {
  buscarProducto(); // Reutiliza la lógica de búsqueda combinada
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: mostrarDetalleProducto(id)
   Busca el producto por su clave idProducto y abre el modal
══════════════════════════════════════════════════════════ */
function mostrarDetalleProducto(id) {
  // Búsqueda lineal por clave primaria
  const producto = productosHistoricos.find(p => p.idProducto === id);
  if (!producto) return;

  productoEnModal = producto;

  // Poblar el modal con los datos del registro
  document.getElementById("modalImg").src    = producto.imagen;
  document.getElementById("modalImg").alt    = producto.nombre;
  document.getElementById("modalTitle").textContent   = producto.nombre;
  document.getElementById("modalCat").textContent     = producto.categoria;
  document.getElementById("modalMundial").textContent = `🌍 ${producto.mundial}`;
  document.getElementById("modalDesc").textContent    = producto.descripcion;
  document.getElementById("modalPrice").textContent   = formatearPrecio(producto.precio);
  document.getElementById("modalBadge").textContent   = producto.disponibilidad ? "✓ EN STOCK" : "✗ AGOTADO";

  // Estado del botón según disponibilidad
  const btn = document.getElementById("modalCartBtn");
  if (!producto.disponibilidad) {
    btn.textContent = "✗ PRODUCTO AGOTADO";
    btn.disabled    = true;
    btn.style.opacity = "0.5";
  } else {
    btn.innerHTML = "🛒 AGREGAR AL CARRITO";
    btn.disabled  = false;
    btn.style.opacity = "1";
  }

  // Abrir modal
  const modal = document.getElementById("productModal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: cerrarModal()
══════════════════════════════════════════════════════════ */
function cerrarModal() {
  document.getElementById("productModal").classList.remove("open");
  document.body.style.overflow = "";
  productoEnModal = null;
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: agregarAlCarritoDesdeModal()
   Agrega el producto activo del modal al carrito
══════════════════════════════════════════════════════════ */
function agregarAlCarritoDesdeModal() {
  if (!productoEnModal || !productoEnModal.disponibilidad) return;
  agregarAlCarrito(productoEnModal.idProducto);
  cerrarModal();
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: agregarAlCarrito(id)
   Agrega un producto al arreglo del carrito
══════════════════════════════════════════════════════════ */
function agregarAlCarrito(id) {
  const producto = productosHistoricos.find(p => p.idProducto === id);
  if (!producto || !producto.disponibilidad) return;

  // Verificar si ya existe en el carrito
  const existente = carrito.find(item => item.idProducto === id);
  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarrito();
  mostrarNotificacion(`✓ "${producto.nombre}" agregado al carrito`);
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: actualizarCarrito()
   Recalcula totales y re-renderiza el carrito lateral
══════════════════════════════════════════════════════════ */
function actualizarCarrito() {
  const count = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  // Actualizar badge del navbar
  document.getElementById("cartCount").textContent = count;

  // Actualizar total
  document.getElementById("cartTotal").textContent = formatearPrecio(total);

  // Re-renderizar lista de items
  const itemsContainer = document.getElementById("cartItems");

  if (carrito.length === 0) {
    itemsContainer.innerHTML = `<p class="cart-empty">Tu carrito está vacío.<br>¡Explorá la colección!</p>`;
    return;
  }

  itemsContainer.innerHTML = carrito.map(item => `
    <div class="cart-item">
      <img
        src="${item.imagen}"
        alt="${item.nombre}"
        onerror="this.src='https://via.placeholder.com/50x50/1a1a25/c9a84c?text=⚽'"
      />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nombre}</div>
        <div class="cart-item-price">${formatearPrecio(item.precio)} × ${item.cantidad}</div>
      </div>
      <button class="cart-item-remove" onclick="eliminarDelCarrito('${item.idProducto}')">✕</button>
    </div>
  `).join("");
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: eliminarDelCarrito(id)
══════════════════════════════════════════════════════════ */
function eliminarDelCarrito(id) {
  carrito = carrito.filter(item => item.idProducto !== id);
  actualizarCarrito();
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: toggleCarrito()
   Abre / cierra el panel lateral del carrito
══════════════════════════════════════════════════════════ */
function toggleCarrito() {
  const drawer = document.getElementById("cartDrawer");
  const isOpen = drawer.classList.toggle("open");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: mostrarRegistros()
   Muestra el JSON del arreglo productosHistoricos en la sección AED
══════════════════════════════════════════════════════════ */
function mostrarRegistros() {
  const viewer = document.getElementById("jsonViewer");
  const isVisible = viewer.style.display !== "none";

  if (isVisible) {
    viewer.style.display = "none";
    return;
  }

  // Serializar el arreglo en JSON formateado
  const jsonString = JSON.stringify(productosHistoricos, null, 2);
  viewer.textContent = jsonString;
  viewer.style.display = "block";

  // Scroll hacia el viewer
  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: guardarIntercambio()
   Guarda una publicación en localStorage y actualiza el feed
══════════════════════════════════════════════════════════ */
function guardarIntercambio() {
  const nombre  = document.getElementById("exchName").value.trim();
  const ofrece  = document.getElementById("exchOfrece").value.trim();
  const busca   = document.getElementById("exchBusca").value.trim();
  const msgEl   = document.getElementById("exchMsg");

  // Validación
  if (!nombre || !ofrece || !busca) {
    msgEl.textContent = "⚠ Completá todos los campos antes de publicar.";
    msgEl.style.color = "#ff8080";
    return;
  }

  // Crear registro de intercambio
  const publicacion = {
    id:     Date.now(),
    nombre: nombre,
    ofrece: ofrece,
    busca:  busca,
    fecha:  new Date().toLocaleDateString("es-AR", {
      day: "2-digit", month: "short", year: "numeric"
    })
  };

  // Leer publicaciones existentes de localStorage
  const existentes = cargarIntercambios();
  existentes.unshift(publicacion); // Insertar al inicio

  // Guardar en localStorage
  localStorage.setItem("mundialconlg_intercambios", JSON.stringify(existentes));

  // Limpiar formulario
  document.getElementById("exchName").value   = "";
  document.getElementById("exchOfrece").value = "";
  document.getElementById("exchBusca").value  = "";

  msgEl.textContent = "✓ Publicación guardada exitosamente.";
  msgEl.style.color = "#4dffaa";
  setTimeout(() => { msgEl.textContent = ""; }, 3000);

  // Actualizar el feed visualmente
  renderizarIntercambios();
}

/* ══════════════════════════════════════════════════════════
   FUNCIÓN: cargarIntercambios()
   Lee las publicaciones guardadas en localStorage
══════════════════════════════════════════════════════════ */
function cargarIntercambios() {
  try {
    const data = localStorage.getItem("mundialconlg_intercambios");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/* ──────────────────────────────────────────────────────────
   renderizarIntercambios()
   Genera el HTML del feed de intercambios
────────────────────────────────────────────────────────── */
function renderizarIntercambios() {
  const feed        = document.getElementById("intercambioFeed");
  const publicaciones = cargarIntercambios();

  if (publicaciones.length === 0) {
    feed.innerHTML = `<p class="exch-empty">⚽ Todavía no hay publicaciones.<br>¡Sé el primero en intercambiar!</p>`;
    return;
  }

  feed.innerHTML = publicaciones.map(p => `
    <div class="exch-post">
      <div class="exch-post-header">
        <span class="exch-post-name">👤 ${p.nombre}</span>
        <span class="exch-post-date">${p.fecha}</span>
      </div>
      <div class="exch-post-row">
        <span class="exch-tag">🟢 Ofrece: <strong>${p.ofrece}</strong></span>
        <span class="exch-tag">🔵 Busca: <strong>${p.busca}</strong></span>
      </div>
    </div>
  `).join("");
}

/* ──────────────────────────────────────────────────────────
   renderizarCamisetas()
   Genera la galería de camisetas campeonas
────────────────────────────────────────────────────────── */
function renderizarCamisetas() {
  const grid = document.getElementById("jerseysGrid");

  grid.innerHTML = camisetasCampeonas.map((c, i) => `
    <div class="jersey-card reveal" style="transition-delay: ${i * 0.1}s">
      <img
        class="jersey-img"
        src="${c.imagen}"
        alt="Camiseta ${c.campeon} ${c.año}"
        loading="lazy"
        onerror="this.src='https://via.placeholder.com/300x220/1a1a25/c9a84c?text=${c.emoji}'"
      />
      <div class="jersey-overlay">
        <div class="jersey-champion">${c.emoji} ${c.campeon}</div>
        <div class="jersey-year">${c.sede} ${c.año}</div>
      </div>
      <div class="jersey-label">
        <div class="jersey-label-name">${c.emoji} ${c.campeon}</div>
        <div class="jersey-label-year">${c.año}</div>
      </div>
    </div>
  `).join("");
}

/* ──────────────────────────────────────────────────────────
   renderizarTimeline()
   Genera el timeline histórico de mundiales
────────────────────────────────────────────────────────── */
function renderizarTimeline() {
  const timeline = document.getElementById("timeline");

  timeline.innerHTML = historiaMundiales.map((m, i) => `
    <div class="timeline-item reveal" style="transition-delay: ${i * 0.1}s">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <img
          src="${m.imagen}"
          alt="${m.campeon} ${m.año}"
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x160/1a1a25/c9a84c?text=${m.año}'"
        />
        <div class="timeline-card-body">
          <div class="timeline-year">${m.año}</div>
          <div class="timeline-sede">📍 ${m.sede}</div>
          <div class="timeline-champ">${m.campeon}</div>
          <p class="timeline-moment">${m.momento}</p>
        </div>
      </div>
    </div>
  `).join("");
}

/* ──────────────────────────────────────────────────────────
   renderizarAED()
   Muestra la cantidad de registros calculada automáticamente
────────────────────────────────────────────────────────── */
function renderizarAED() {
  document.getElementById("aedCount").textContent = productosHistoricos.length;
}

/* ──────────────────────────────────────────────────────────
   UTILIDADES
────────────────────────────────────────────────────────── */

// Formatear precio en pesos argentinos
function formatearPrecio(precio) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  }).format(precio);
}

// Notificación flotante de carrito
function mostrarNotificacion(texto) {
  const notif = document.createElement("div");
  notif.style.cssText = `
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    background: linear-gradient(135deg, #2a3a1e, #3d5a28);
    border: 1px solid rgba(77,255,170,0.4);
    color: #4dffaa;
    padding: 0.75rem 1.2rem;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 700;
    z-index: 9999;
    animation: fadeUp 0.3s ease;
    max-width: 280px;
    line-height: 1.4;
  `;
  notif.textContent = texto;
  document.body.appendChild(notif);
  setTimeout(() => {
    notif.style.opacity = "0";
    notif.style.transition = "opacity 0.3s ease";
    setTimeout(() => notif.remove(), 300);
  }, 2500);
}

/* ──────────────────────────────────────────────────────────
   ANIMACIONES DE SCROLL (Intersection Observer)
────────────────────────────────────────────────────────── */
function activarReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
    observer.observe(el);
  });
}

/* ──────────────────────────────────────────────────────────
   NAVBAR: scroll activo + link activo
────────────────────────────────────────────────────────── */
function iniciarNavbar() {
  const navbar   = document.getElementById("navbar");
  const backTop  = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section[id]");
  const links    = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Sombra en navbar
    navbar.classList.toggle("scrolled", scrollY > 60);

    // Botón volver arriba
    backTop.classList.toggle("visible", scrollY > 400);

    // Link activo según sección visible
    sections.forEach(section => {
      const top    = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        links.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${section.id}`
          );
        });
      }
    });
  }, { passive: true });
}

/* ──────────────────────────────────────────────────────────
   NAVBAR: menú hamburguesa (mobile)
────────────────────────────────────────────────────────── */
function iniciarHamburguesa() {
  const btn   = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");

  btn.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  // Cerrar al hacer click en un link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
}

/* ──────────────────────────────────────────────────────────
   CARRITO: botón en navbar
────────────────────────────────────────────────────────── */
function iniciarCarritoBtn() {
  document.getElementById("cartBtn").addEventListener("click", toggleCarrito);
}

/* ──────────────────────────────────────────────────────────
   HERO: partículas flotantes
────────────────────────────────────────────────────────── */
function crearParticulas() {
  const container = document.getElementById("heroParticles");
  const cantidad  = 25;

  for (let i = 0; i < cantidad; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left     = `${Math.random() * 100}%`;
    p.style.width    = `${Math.random() * 3 + 1}px`;
    p.style.height   = p.style.width;
    p.style.animationDuration  = `${Math.random() * 10 + 8}s`;
    p.style.animationDelay     = `${Math.random() * 8}s`;
    container.appendChild(p);
  }
}

/* ──────────────────────────────────────────────────────────
   HERO: botón EXPLORAR con scroll suave
────────────────────────────────────────────────────────── */
function iniciarHeroBtn() {
  document.getElementById("heroBtn").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("objetos").scrollIntoView({ behavior: "smooth" });
  });
}

/* ──────────────────────────────────────────────────────────
   FILTROS: eventos en tiempo real
────────────────────────────────────────────────────────── */
function iniciarFiltros() {
  document.getElementById("searchInput").addEventListener("input", buscarProducto);
  document.getElementById("filterMundial").addEventListener("change", filtrarPorMundial);
  document.getElementById("filterCategoria").addEventListener("change", filtrarPorMundial);
}

/* ──────────────────────────────────────────────────────────
   MODAL: cerrar con ESC
────────────────────────────────────────────────────────── */
function iniciarModalKeyboard() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cerrarModal();
      const drawer = document.getElementById("cartDrawer");
      if (drawer.classList.contains("open")) {
        drawer.classList.remove("open");
        document.body.style.overflow = "";
      }
    }
  });
}

/* ══════════════════════════════════════════════════════════
   INICIALIZACIÓN — DOMContentLoaded
   Punto de entrada principal del sistema
══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {

  // 1. Renderizar todos los módulos
  mostrarProductos();        // Sección objetos — genera cards desde productosHistoricos[]
  renderizarCamisetas();     // Galería camisetas campeonas
  renderizarTimeline();      // Timeline histórico
  renderizarIntercambios();  // Feed de intercambios (desde localStorage)
  renderizarAED();           // Contador de registros en sección AED

  // 2. Iniciar lógica de UI
  iniciarNavbar();           // Scroll activo + link activo
  iniciarHamburguesa();      // Menú mobile
  iniciarCarritoBtn();       // Botón carrito
  iniciarHeroBtn();          // Scroll suave desde hero
  iniciarFiltros();          // Búsqueda y filtros en tiempo real
  iniciarModalKeyboard();    // Cierre con ESC
  crearParticulas();         // Partículas del hero

  // 3. Primera pasada de reveal (elementos ya visibles)
  activarReveal();

  console.log(`%c⚽ MundialConLG — Sistema iniciado`, "color: #c9a84c; font-weight: bold; font-size: 14px");
  console.log(`%cRegistros cargados: ${productosHistoricos.length} | Clave primaria: idProducto`, "color: #888");
});

function buscarPorID(){
 const v=document.getElementById('idSearch')?.value?.trim();
 const p=productosHistoricos.find(x=>x.idProducto===v);
 document.getElementById('idResult').innerHTML=p?`<b>${p.nombre}</b><br>${p.mundial}<br>$${p.precio}`:'Producto no encontrado';
}
