import React, { useState } from 'react'
import { AppContainer, BingkatFoto, Button, CardProfil, ContentArea, EmailProfil, FooterSidebar, Image, MainContent, Menu, MenuItem, MenuMobile, NameProfil, NavbarMobile, NavIcon, NavIconMobile, NavLinks, NavLinksMobile, Profil, ShortcutButtons, SidebarContainer, SidebarHeader, TextTopbar, TitleHeader, TopBarContainer } from '../../Components/MainComponent'
import { iconBadge, iconCalendMonth, iconCloseSidebar, iconDashboard, iconEnterprise, iconLogout, iconMoneyBag, iconNotif, iconPace, iconProblem, iconSetting } from '../../Assets'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../HR/dashboard'
import Karyawan from '../HR/karyawan'
import Jadwal from '../HR/jadwal'
import Kehadiran from '../HR/kehadiran'
import Cuti from '../HR/cuti'
import Pinjaman from '../HR/pinjaman'
import SuratPeringatan from '../HR/suratPeringatan'
import Setting from '../HR/Setting'

const menu = [
    {
        id: 1,
        text: 'Dashboard',
        url: '/dashboard',
        icon: iconDashboard
    },
    {
        id: 2,
        text: 'Karyawan',
        url: '/karyawan',
        icon: iconBadge
    },
    {
        id: 3,
        text: 'Jadwal',
        url: '/jadwal',
        icon: iconCalendMonth
    },
    {
        id: 4,
        text: 'Kehadiran',
        url: '/kehadiran',
        icon: iconPace
    },
    {
        id: 5,
        text: 'Cuti',
        url: '/cuti',
        icon: iconEnterprise
    },
    {
        id: 6,
        text: 'Pinjaman',
        url: '/pinjaman',
        icon: iconMoneyBag
    },
    {
        id: 5,
        text: 'Surat Peringatan',
        url: '/surat-Peringatan',
        icon: iconProblem
    },
    {
        id: 6,
        text: 'Setting',
        url: '/setting',
        icon: iconSetting
    },
    {
        id: 7,
        text: 'Keluar',
        url: '/logout',
        icon: iconLogout
    },
]

const MainApp = () => {
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const handleActiveMenu = (menu) => {
        setActiveMenu(menu)
    }
    return (
        <AppContainer>
            <SidebarContainer>
                <SidebarHeader>
                    <TitleHeader>
                        HRGA APPS
                    </TitleHeader>
                    <Image src={iconCloseSidebar} />
                </SidebarHeader>
                <Menu>
                    {
                        menu?.map((item, index) => (
                            item?.text !== 'Setting' && item?.text !== 'Keluar' ? <MenuItem onClick={() => handleActiveMenu(item?.text)} key={index}>
                                <NavLinks to={item?.url} className={activeMenu === item?.text ? 'active' : ""}>
                                    <NavIcon icon={item?.icon} className={activeMenu === item?.text ? 'active' : ""} /><span>{item?.text}</span>
                                </NavLinks>
                            </MenuItem> : ""
                        ))
                    }
                </Menu>
                <FooterSidebar>
                    {
                        menu?.map((item, index) => (
                            item?.text === 'Setting' || item?.text === 'Keluar' ? <MenuItem onClick={() => handleActiveMenu(item?.text)} key={index}>
                                <NavLinks to={item?.url} className={activeMenu === item?.text ? 'active' : ""}>
                                    <NavIcon icon={item?.icon} className={activeMenu === item?.text ? 'active' : ""} /><span>{item?.text}</span>
                                </NavLinks>
                            </MenuItem> : ""
                        ))
                    }
                    <CardProfil>
                        <BingkatFoto></BingkatFoto>
                        <Profil>
                            <NameProfil>James Geidt</NameProfil>
                            <EmailProfil>james@hrga.com</EmailProfil>
                        </Profil>
                    </CardProfil>
                </FooterSidebar>
            </SidebarContainer>
            <MainContent>
                <TopBarContainer>
                    <ShortcutButtons>
                        <TextTopbar>Shortcut:</TextTopbar>
                        <Button>Absensi</Button>
                        <Button>Ajukan Cuti</Button>
                    </ShortcutButtons>
                    <Image icon={iconNotif} />
                </TopBarContainer>
                <ContentArea>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/karyawan" element={<Karyawan />} />
                        <Route path="/jadwal" element={<Jadwal />} />
                        <Route path="/kehadiran" element={<Kehadiran />} />
                        <Route path="/cuti" element={<Cuti />} />
                        <Route path="/pinjaman" element={<Pinjaman />} />
                        <Route path="/surat-peringatan" element={<SuratPeringatan />} />
                        <Route path="/setting" element={<Setting />} />
                    </Routes>
                </ContentArea>
            </MainContent>
            <NavbarMobile>
                {
                    menu?.map((item, index) => (
                        item?.text !== 'Setting' && item?.text !== 'Keluar' ?
                            <MenuMobile onClick={() => handleActiveMenu(item?.text)} key={index}>
                                <NavLinksMobile to={item?.url} className={activeMenu === item?.text ? 'active' : ""}>
                                    <NavIconMobile icon={item?.icon} className={activeMenu === item?.text ? 'active' : ""} /><span>{item?.text}</span>
                                </NavLinksMobile>
                            </MenuMobile> : ""
                    ))
                }
            </NavbarMobile>
        </AppContainer>
    )
}

export default MainApp
