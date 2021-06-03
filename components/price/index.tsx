import Image from "next/image";
import { PriceContainer, PriceTable, PriceTitle, ItemsList } from "./styles"

const items = ['Aulão + PDF Exclusivo', 'Minicurso Vida de Estudos', 'Série "Vida dos Santos"', 'Planner de estudos'];

export const Price = () => {
  return (
    <PriceContainer>
      <PriceTable>
        <PriceTitle>
          <div className="original-price">R$147</div>
          <span className="currency">R$</span>
          <span className="value">97</span>
        </PriceTitle>
        <ItemsList>
          <ul>
            {
              items.map((item, index) => {
                return (
                  <li key={index}><Image src='/icons/check-solid.svg' height={20} width={20} />{item}</li>
                )
              })
            }
          </ul>
        </ItemsList>
      </PriceTable>
    </PriceContainer>
  )
}