import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
      width: 200px;
    background: var(--Color-Primitive-Brand-brand-900, #134E4A);
    color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-right: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
    transition: width 0.3s;

    @media (max-width: 900px) {
        width: 60px; /* Hanya ikon yang ditampilkan */
    }

    @media (max-width: 500px) {
        display: none; /* Sidebar tersembunyi di layar kecil */
    }
`;

export const SidebarHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -5px;
    margin-bottom: 20px;
`;

export const Image = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .2em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#ffffff"};

`;


export const TitleHeader = styled.p`
    width: 152px;
    gap: 0px;
    opacity: 0px;
    //styleName: Label/text-l-lg;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 0px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--Color-Primitive-Base-white, #FFFFFF);
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 65%;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 5px;

    &:hover {
    background-color: #00796b;
    }
`;
export const NavLinks = styled(Link)`
    display: flex;
    align-items: center;
    color: #0D9488;
    text-decoration: none;
    font-size: 0.82em;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;

    span {
        display: inline-block;
        margin-left: 10px;
        white-space: nowrap;
        opacity: 1;
        transition: opacity 0.3s, visibility 0.3s;

        @media (max-width: 900px) {
            opacity: 0;
            display: none;
        }
    }

    &:hover span {
        opacity: 1;
        visibility: none;
        @media (max-width: 900px) {
            display: block;
            position: absolute;
            left: 60px; /* Posisi teks muncul di sebelah kanan ikon */
            background: #134E4A;
            padding: 5px 10px;
            border-radius: 150px 0px 0px 150px; /* Melengkung hanya di sisi kanan */
            color: white;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        }
    }

    &.active {
        color: #ffffff;

        span {
            color: #ffffff;
        }
    }
`;

export const FooterSidebarDesktop = styled.div`
    @media (max-width: 900px) {
        display: none;
    }
`;
export const FooterSidebarMobile = styled.div`
    display: none;
    @media (max-width: 900px) {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .burgerProfil{
        @media (max-width: 900px) {
           display: none;
        }
    }
     .burgerProfil{
        opacity: 1;
        visibility: none;
        @media (max-width: 900px) {
            display: block;
            position: absolute;
            left: 120px; /* Posisi teks muncul di sebelah kanan ikon */
            background: linear-gradient(267.17deg, #0D9488 0%, #115E59 100%);
            padding: 5px 10px;
            color: white;
            height: auto;
            width: 120px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            /* Membuat sisi kiri bawah lancip */
            /* clip-path: polygon(100% 0%, 100% 46%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); */
        }

    }
`;

export const NavIcon = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .5em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#0D9488"};

    
    &.active {
        color: white;
        background-color: white;
    }

`;
export const TopBarContainer = styled.div`
    height: 60px;
    background: var(--Color-Primitive-Base-white, #FFFFFF);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: white;
    border-bottom: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
    @media (max-width: 500px) {
        background: #134E4A;
    }
`;

export const TextTopbar = styled.p`
    width: 62px;
    height: 20px;
    gap: 0px;
    opacity: 0px;
    //styleName: Paragraph/text-p-md;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--Color-Primitive-Neutral-neutral-900, #171717);
    @media (max-width: 500px) {
        display: none;
    }
`;

export const ShortcutButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    height: 30px;
    width:auto;
    padding: 6px 12px 6px 12px;
    gap: 8px;
    border-radius: 8px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
    background: var(--Color-Primitive-Base-white, #FFFFFF);
    border: 1px solid var(--Color-Primitive-Neutral-neutral-300, #D4D4D4);
    box-shadow: 0px 1px 2px 0px #134E4A1A;
    //styleName: Label/text-l-md;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

`;

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    @media (max-width: 500px) {
        display: grid;
        justify-content:normal;
    }
`;

export const MainContent = styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const ContentArea = styled.div`
    flex-grow: 1;
    padding: 20px;
    height: 77vh;
`;

export const FooterSidebar = styled.div`
    height: 20%;
`;

export const CardProfil = styled.div`
    margin-top: 20px;
    width: Fill (208px)px;
    height: 40px;
    padding: 12px;
    gap: 8px;
    border-radius: 8px;
    opacity: 0px;
    background: var(--Color-Primitive-Brand-brand-800, #115E59);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BingkatFoto = styled.div`
    width: 40px;
    height: 40px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
`;

export const Profil = styled.div`
    width: Fill (128px)px;
    height: 70px;
`;

export const NameProfil = styled.p`
    width: 128px;
    height: 20px;
    gap: 0px;
    opacity: 0px;
    //styleName: Label/text-l-md;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--Color-Primitive-Base-white, #FFFFFF);
`;

export const EmailProfil = styled.p`
    width: 128px;
    gap: 0px;
    opacity: 0px;
    //styleName: Paragraph/text-p-sm;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 0px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: var(--Color-Primitive-Brand-brand-500, #14B8A6);
`;

export const NavbarMobile = styled.div`
    display: none;
    @media (max-width: 500px) {
    width: 100%;
    height: 60px;
    position: relative;
    display: flex;
    overflow-x: auto; /* Aktifkan pengguliran horizontal */
    overflow-y: hidden; /* Sembunyikan pengguliran vertikal */
    -ms-overflow-style: none; /* Untuk Internet Explorer dan Edge */
    scrollbar-width: none;
    border-top: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5)
}

`;

export const MenuMobile = styled.div`
width: auto;
height: Hug (40px)px;
padding: 10px 0px 0px 0px;
gap: 8px;
border-radius: var(--Radiusradius-1);
opacity: 0px;
margin-left: 10px;
`;

export const NavLinksMobile = styled(Link)`
    display: flex;
    width: Fill (112px)px;
    height: 40px;
    padding: 0px 10px 0px 10px;
    gap: 8px;
    border-radius: var(--Radiusradius-1);
    opacity: 0px;
    color: #A3A3A3;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    font-size: .82em;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 8px;
    &.active {
        background: #c4fff1;
        color: #0D9488;
    }


`;

export const NavIconMobile = styled.img`
    width: 1.7em;
    height: 1.7em;
    margin-right: .2em;
    -webkit-mask: url(${props => props.icon}) no-repeat center;
    mask: url(${props => props.icon}) no-repeat center;
    background-color: ${props => props.color ? props.color : "#A3A3A3"};

    
    &.active {
        color: #0D9488;
        background: #0D9488;
    }

`;