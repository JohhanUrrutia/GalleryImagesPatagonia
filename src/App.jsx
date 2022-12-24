import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Header
      titulo="Galería De Imagenes Con React 😇"
      autor="Johhan Urrutia"
      ></Header>
      <Card 
      rutaImagen="https://www.ecocamp.travel/hs-fs/hubfs/Imported_Blog_Media/31585196636_03e7a19fda_k-1024x684.jpg?width=1024&height=684&name=31585196636_03e7a19fda_k-1024x684.jpg"
      titulo="Guanaco"
      descripcion="El guanaco es una especie de mamífero artiodáctilo de la familia Camelidae propia de América del Sur. Es un animal salvaje, en oposición a la llama que es doméstica. Es de huesos finos, con una altura aproximada de 1,60 metros y cerca de 91 kilogramos de peso."
      >
      </Card>
      <Card
      rutaImagen="https://inaturalist-open-data.s3.amazonaws.com/photos/654809/original.jpg"
      titulo="Zorro Gris"
      descripcion="El zorro gris patagónico o chilla es una de las especies sudamericanas de cánidos semejantes a los zorros del Viejo Mundo, por lo cual se les da el mismo nombre vulgar. Fue descrito por Gray en 1837 como Vulpes griseus. Posteriormente fue trasladado al género Lycalopex."
      >
      </Card>
      <Card
      rutaImagen="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YGN2HPL4XZF6VGQTEJKOXWTLME.jpg"
      titulo="Puma"
      descripcion="El puma austral, puma chileno, puma del sur de América del Sur o león de montaña es la más austral de las subespecies en que se divide la especie de Puma concolor, denominado comúnmente puma, pangui o león americano.​"
      >
      </Card>
      <Card
      rutaImagen="https://www.infocampo.com.ar/wp-content/uploads/2020/03/ovejas-cordero-infocampo.jpg"
      titulo="Oveja"
      descripcion="A fines del siglo XIX y principios del XX, la cría de ovejas se expandió por los pastizales patagónicos, lo que convirtió a las regiones australes de Argentina y Chile en una de las áreas ovejeras más importantes del mundo."
      >
      </Card>
      <Footer texto="Galería De Imagenes - Animales De La Patagonia"></Footer>
    </div>
  )
}

export default App