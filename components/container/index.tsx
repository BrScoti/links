import styled, { css } from 'styled-components'

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;

    @media(min-width: ${({ theme }) => theme.medias.xs}) {
      max-width: 540px;
    }

    // Medium devices (tablets, 768px and up)
    @media(min-width: ${({ theme }) => theme.medias.md}) {
      max-width: 720px; 
    }

    // Large devices (desktops, 992px and up) 
    @media(min-width: ${({ theme }) => theme.medias.lg}) {
      max-width: 960px;
    }

    // Large devices (large desktops, 1200px and up)
    @media(min-width: ${({ theme }) => theme.medias.xl}) {
      max-width: 1140px;
    }
    
    // X-Large devices (large desktops, less than 1400px)
    @media(min-width: ${({ theme }) => theme.medias.xxl}) {
      max-width: 1320px;
    }

    //Configurações apenas no mobile/tablet para não precisar reversão no desk e poupar linha.
    @media(max-width: ${({ theme }) => theme.medias.lg}) {
      
    }
`;
