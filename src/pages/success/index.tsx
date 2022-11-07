import { GetServerSideProps } from "next";
import Link from "next/link";
import { stripe } from "../../lib/stripe";
import { ImageContainer } from "../../styles/pages/success";
import { SuccessContainer } from "../../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>
    
      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items']
  })

  console.log(session.line_items.data)

  return {
    props: {

    }
  }
}