import { Box, Image, SimpleGrid } from "@chakra-ui/react"
import card1 from '../assets/cate/card1.jpeg';
import card2 from '../assets/cate/card2.jpeg';
import card3 from '../assets/cate/card3.jpeg';
import card4 from '../assets/cate/card4.jpeg';
import card5 from '../assets/cate/card5.jpeg';
import card6 from '../assets/cate/card6.jpeg';
import card7 from '../assets/cate/card7.jpeg';
import card8 from '../assets/cate/card8.jpeg';
import card9 from '../assets/cate/card9.jpeg';
import card10 from '../assets/cate/card10.jpeg';
import card11 from '../assets/cate/card11.jpeg';
import card12 from '../assets/cate/card12.jpeg';
import card20 from '../assets/cate/card20.jpg';
const Homecard=()=>{

    const imagecard=[{id:1,image:card1,name:"card1",link:"#"},
        {id:2,image:card2,name:"card2",link:"#"},
        {id:3,image:card3,name:"card3",link:"#"},
        {id:4,image:card4,name:"card4",link:"#"},
        {id:5,image:card5,name:"card5",link:"#"},
        {id:6,image:card6,name:"card6",link:"#"},
        {id:7,image:card7,name:"card7",link:"#"},
        {id:8,image:card8,name:"card8",link:"#"},
        {id:9,image:card9,name:"card9",link:"#"},
        {id:10,image:card10,name:"card10",link:"#"},
        {id:11,image:card11,name:"card11",link:"#"},
        {id:12,image:card12,name:"card12",link:"#"}
    ]
    return(
        <>
        <Image src={card20}
    objectFit='cover' alt='Dan Abramov'  marginBottom={[5,null,10]}/>

        <SimpleGrid columns={[2, null, 6]} gap='15px' marginLeft={10} marginRight={10}>
        {imagecard.map((element) => (
        <Box key={element.id} height='auto'>
        <Image src={element.image}
    objectFit='cover' alt='Dan Abramov' />
        </Box>
      ))}

   
</SimpleGrid>
        
        </>
    )
}
export default  Homecard;