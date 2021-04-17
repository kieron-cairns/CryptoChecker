import React, { Children, FunctionComponent } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Link from "next/link";
import { useRouter } from 'next/router'
import DisplayPage from './DisplayPage';

//TODO : Add Inline styles 


const LayoutDesktop: FunctionComponent = ({
  children,
}) => {

  const list = [
    {
      key: 1,
      title: 'Bitcoin',
      url: '/bitcoin-page'
    },
    {
      key: 2,
      title: 'Ethereum',
      url: '/ethereum-page',

    },
    {
      key: 3,
      title: 'Litecoin',
      url: 'litecoin-page'
    }
  ]

  const router = useRouter()
  const { id } = router.query

  // {list.map(item => ())}

  return(
   
        <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          inverted
          vertical
          visible
          width='thin'
          style={{minHeight: "100vh"}}
          
        >
    
          {list.map(function(items, idx){
          return(
          // <li key={idx}>
          <Menu.Item as='a'>
            
            <Icon name='home' />
            {/* Here you need to call a function from dislay page and pass the url and redirect within the display page */}
            {/* <DisplayPage url=''></DisplayPage> */}
            
            <Link href={items.url}>
              {items.title}
            </Link>      
          </Menu.Item>
          
          // </li>
          )

          })}
          
          
        </Sidebar>
          
        <Sidebar.Pusher>
          <Segment style={{minHeight: "100vh"}} basic>
    
         {children}
            
          </Segment>
        
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      
  )
}

export default LayoutDesktop