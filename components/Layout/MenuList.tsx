import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import styles from '@/styles/navbar.module.scss'
import MenuItem from '@mui/material/MenuItem'

type Props = {
    title: string
}

export default function MenuList({title}: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={styles.btnBig}
            >
                {title}
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
    )
}