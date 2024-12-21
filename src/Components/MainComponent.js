import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 200px;
    background: var(--Color-Primitive-Brand-brand-900, #134E4A);
    color: white;
    display: flex;
    flex-direction: column;
    padding:20px;
    border-right: 1px solid var(--Color-Primitive-Neutral-neutral-200, #E5E5E5);
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
`


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
    height: 75%;
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
    color: #0D9488;
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    font-size: .82em;
    font-family: Arial, Helvetica, sans-serif;
    &.active {
        color: #ffffff
    }

    @media screen and (max-width: 768px) {
        float: left;
        font-size: 0.8em;
        padding: 1em 0.5em;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        
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
`;

export const MainContent = styled.div`
    flex-grow: 1;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`;

export const ContentArea = styled.div`
    flex-grow: 1;
    padding: 20px;
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