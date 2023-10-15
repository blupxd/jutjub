import { Stack } from "@mui/material"
import { categories } from "../utils/constants"


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
        direction="row"
        sx={{
           overflowY: 'auto',
           height: {sx:'auto', md: '95%'}, 
           flexDirection: {md: 'column'}
        }}>
            {categories.map((cat) => (
                <button
                style={{
                    background: cat.name === selectedCategory && '#6f03fc',
                    color: 'white'
                }}
                key={cat.name}
                className="category-btn"
                onClick={() => setSelectedCategory(cat.name)}>
                    <span style={{
                        color: cat.name === selectedCategory ? 'white' : '#6f03fc',
                        marginRight: '15px'
                        }}>{cat.icon}</span>
                    <span style={{
                        opacity: cat.name === selectedCategory ? '1' : '0.8'
                    }}>{cat.name}</span>
                </button>
            ))}
    </Stack>
  )


export default Sidebar