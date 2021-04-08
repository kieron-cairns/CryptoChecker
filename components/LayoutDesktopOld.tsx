import React, { Children, FunctionComponent } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Link from "next/link";
import { useRouter } from 'next/router'
import DisplayPage from './DisplayPage';

//TODO : Add Inline styles 

var test = null;

const LayoutDesktop = () => (


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
      <Menu.Item as='a'>
        
        <Icon name='home' />
        {/* Here you need to call a function from dislay page and pass the url and redirect within the display page */}
        {/* <DisplayPage url=''></DisplayPage> */}
        
        <Link href="/btc-page">
          Bitcoin 
        </Link>      
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        <Link href="dashboard/#eth-page">
        Ethereum
        </Link>      
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />    
        <Link href="/ltc-page">
        Litecoin 
        </Link>      
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment style={{minHeight: "100vh"}} basic>

      <DisplayPage></DisplayPage>
        
      </Segment>

      {/* {props.children} */}
    
    </Sidebar.Pusher>
  </Sidebar.Pushable>
  
)

export default LayoutDesktop