import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};


    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    background-image: url("https://lh3.googleusercontent.com/proxy/-yfHDtCixObDpBbGi0CYjTCmnRD2Nvihdvnw9iq-IRIhTL23E5m5CBh0lsAMrEhyqtnwPU9Uyr_gazKtO0HnWxG6EawsLuU-aV6sO11bwagIU2glqwz0xDCXcbdABD-_oB79bA");
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
    width: 110%;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 19px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText}) => (lightText ? '#f7f8fa' : '#010606')};


    @media screen and (max-width: 480px){
        font-size: 32px;
    }
        
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    //max-width: 555px;
    //height: 100vh;
    
`

export  const Img = styled.div`
    //width: 100%; 
    margin: 0 0 10px 0;
    padding-right: 0;
    
`

