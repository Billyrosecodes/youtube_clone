import { Stack } from '@mui/material';

import { categories } from '../utils/constants';


const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <Stack
    direction="row"
    sx={{
        overflowY: "auto",
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column'},
        background: "#F9F5F6",
      
        
    }} className='sidebar'
    >
      {categories.map((category) => (
        <button
        className='category-btn'
        onClick={() => setSelectedCategory(category.name)}
        style={{
            background: category.name === selectedCategory && '#F9F5F6',
            color: '#952323'
        }}
          key={category.name}
        >
        <span style={{ color: category.name === selectedCategory ? '#952323' :
         '#952323', marginRight: '15px' }}>
            {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>

        </button>
      ))}

    </Stack>
  )


export default Sidebar