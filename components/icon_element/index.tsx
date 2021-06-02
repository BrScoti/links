import { FunctionComponent } from 'react';
import Image from 'next/image'
import { Description, IconBox, IconContainer, Title } from './styles';
export const IconElement: FunctionComponent<{ icon: string, title: string, description: string }> =
  ({ icon, title, description }) => {
    //const icon = require('../../public/icons/book.svg');

    return (
      <IconBox>
        <IconContainer>
          <Image src={`/icons/${icon}.svg`} height={20} width={20} />
        </IconContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </IconBox>
    )
  }