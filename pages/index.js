import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.div`
  display:flex;
  background-color:black;
  justify-content:space-around;
  align-items:center;
  position:relative;
  padding:10px 0px;
  flex-wrap: wrap;

  .imageBackground{
    opacity:0.5;
    z-index:0;
    object-fit: cover;
    //position:absolute;
    //width:0;
  }

  .logoAndButton{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:50px;
    z-index:1;
  }
`;

const Button = styled.div`
  color: #D4145A;
  padding:20px 50px;
  border-radius: 50px;
  text-align:center;
  width:fit-content;
  background-color:white;
  z-index:2;
  cursor: pointer;
`

const CopyOne = styled.div`
color:#fffdfd;
background-color:black;
text-align:center;
display: flex;
align-items: center;
flex-direction:column;

.wrapper{
  display:flex;
  flex-direction:column;
  gap:30px;
  padding:10px;
  width: 70vw;
}

h1{
  margin:0;
  font-weight:500;
  font-size: 29px;
}
h2{
  font-size: 20px;
}

p{
  margin:0;
  font-size: 17px;
}

.divButton{
display:flex;
justify-content:center;
}

.contentCourse{
  margin-top: 20px;
  h1{
    color: #d4145a;
  }

  .imgMobile{
    display: none;
  }

}

@media(max-width: 440px) {
  p{
    text-align: justify;
  }
  .wrapper{
    width: 90vw;
  }
    .contentCourse .imgMobile{
      display: block;
    }
    .contentCourse .imgWeb{
      display: none;
    }
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aulão</title>
        <link rel="icon" href="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_32,h_32/https://juniorvolcan.com/wp-content/uploads/2020/03/cropped-castl-01-32x32.png" sizes="32x32" />
        <link rel="icon" href="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_192,h_192/https://juniorvolcan.com/wp-content/uploads/2020/03/cropped-castl-01-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_180,h_180/https://juniorvolcan.com/wp-content/uploads/2020/03/cropped-castl-01-180x180.png" />
      </Head>

      <main>
        <Header>
          <Image className="imageBackground" src="/images/background.jpg" layout={'fill'} />
          <div className="logoCourse">
            <Image src="/images/tittle-01.png" height={470} width={470} />
          </div>
          <div className="logoAndButton">
            <Image src="/images/logo_junin.png" height={70} width={300} />
            <div>
              <Link href="https://juniorvolcan.com/courses/?add-to-cart=1116">
                <a href="https://juniorvolcan.com/courses/?add-to-cart=1116">
                  <Button >
                    Adquira já
                  </Button>
                </a>

              </Link>
            </div>
          </div>
        </Header>
        <CopyOne>
          <div className="wrapper">
            <h1>
              UM GUIA PARA ORDENAR SUA ROTINA ATRAVÉS DA SABEDORIA DOS SANTOS
            </h1>
            <h2>
              Aprenda na prática como conciliar oração, estudo e trabalho.
            </h2>
            <p>
              Você não consegue perseverar e progredir na vida de oração, na vida de estudos e na santificação do trabalho? Provavelmente é porque (até hoje) ninguém te mostrou os meios efetivos de unir estes três pilares fundamentais.
            </p>

            <div className="divButton">
              <Link href="">
                <Button >
                  Adquira já
              </Button>
              </Link>
            </div>

            <p>
              Todos nós passamos pelas mesmas dificuldades: inconstância na oração, tropeços constantes nos estudos e estagnações no dia-a-dia de trabalho. Porém, até quando iremos nos conformar com o que sabemos? De que modo posso resgatar os grandes ensinamentos dos santos? Como faço para dar passos concretos rumo ao crescimento nesses pilares essenciais? Foi pensando exatamente nisso que montei este aulão.
            </p>
          </div>

          <div className="contentCourse">
            <h1>Você terá acesso a:</h1>
            <div className="imgWeb"><Image src="/images/conteudo_aulao_web.png" height={700} width={1200} /></div>
            <div className="imgMobile"><Image src="/images/conteudo_aulao_mobile.png" height={730} width={430} /></div>


          </div>
        </CopyOne>
        {/* <div className={styles.title}>
          <h1 className={styles.title}>
            Junior Volcan
          </h1>
        </div> */}

      </main>

      <footer>

      </footer>
    </div>
  )
}
