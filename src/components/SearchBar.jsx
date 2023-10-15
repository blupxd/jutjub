import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from "@mui/icons-material"


const SearchBar = () => {
    const [searchterm, setSearchTerm] = useState('')

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(searchterm) {
            navigate(`/search/${searchterm}`)
            setSearchTerm('')
        }
    }

  return (
    <Paper
        component='form'
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}
    >
        <input
            className='search-bar'
            placeholder='Search...' 
            value={searchterm}
            onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' sx={{
            p: '10px', color: '#6f03fc'
        }}>
            <Search />
        </IconButton>
    </Paper>
  )
}
//35:41
export default SearchBar