import React from 'react'
import Image from 'next/image';
import styles from '@/styles/navbar.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from './MenuList';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Logo from '../../public/Logo.svg'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import CatIcon from '@/public/svg/kubiks.svg'
import SearchIcon from '@mui/icons-material/Search';



function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.menu_bar}>
        <div className="container">
          <div className={styles.menu}>
            <div className={styles.navLinks}>
              <div className={styles.menuIcons}>
                <MenuIcon
                  className={styles.icon}
                />
              </div>
              <nav>
                <MenuList title="Акции" />
                <MenuList title="Кредит" />
                <MenuList title="Оплата и доставка" />
                <MenuList title="Помощь" />
                <MenuList title="Скупка Б/У" />
                <MenuList title="Контакты" />
              </nav>
            </div>
            <div className={styles.fromUser}>
              <div className={styles.btns}>
                <button id="ru-lang" className={styles.btn}>RU</button>
                <span> / </span>
                <button id="eu-lang" className={styles.btn}>EU</button>
              </div>
              <PersonOutlineOutlinedIcon
                className={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.nav_bottom}>
          <Image width={168} height={33} src={Logo} alt='/' />
          <div >
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className={styles.btnCatalog}
            >
              <Image src={CatIcon} alt='/' />
              КАТАЛОГ ТОВАРОВ
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>lorem</MenuItem>
              <MenuItem onClick={handleClose}>lorem</MenuItem>
              <MenuItem onClick={handleClose}>lorem</MenuItem>
            </Menu>
          </div>
          <div className={styles.searchBox}>
            <input type="text" placeholder='Поиск ' />
            <div className={styles.searchBtn}>
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar