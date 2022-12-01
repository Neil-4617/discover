import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import AccountMenu from './AccountMenu'

import DataContext from './context/DataContext'

const Nav = () => {
	const {currentUser, sign, setSign} = useContext(DataContext)

	const pageRedirect = sign? '/login' : '/register'
	const propsLabel = sign? 'Login' :'Create account'

	return (
		<>
		<AppBar 
			component='nav' 
			position='static' 
			sx={{
				minHeight: '10vh'
			}}>
			<Toolbar>
			<Box
		        sx={{
		          display: 'flex',
		          flexDirection: 'row',
		          justifyContent: 'space-between',
		          alignItems: 'center',
		          minWidth: '90vW',
		          mx: 'auto',
		        }} 
		        >
		        <Tooltip title="Homepage">
		          <Link to='/'>
		            <Box 
		            component='img' 
		            alt='logo' 
		            src='./assets/images/NavBrand-Portfolio.svg'
		            sx={{ 
		                height:'50px',
		                py: '2px'
		              }}/>
		            
		          </Link>
		        </Tooltip>
		        {
		        	currentUser
		        		?<AccountMenu />
		        		: (<Tooltip title={propsLabel}>
		        				<Button variant='contained' color='warning'>
		        				<Link to={pageRedirect} onClick={() => setSign(!sign) } style={{textDecoration: 'none'}} >
									<Typography variant='caption'>{propsLabel}</Typography>
		        				</Link>
		        				</Button>
					        </Tooltip>)
		        }
			</Box>
			</Toolbar>
		</AppBar>
		</>
	)
}

export default Nav