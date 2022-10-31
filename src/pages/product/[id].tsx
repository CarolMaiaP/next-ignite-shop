import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam vel libero doloremque voluptatibus blanditiis aut animi, illum maxime optio voluptatem id exercitationem facere excepturi, temporibus iste inventore totam odit?</p>
      
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}