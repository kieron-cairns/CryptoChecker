import React, { Children } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import Link from "next/link";

import BitcoinPage from '../pages/btc-page'

//TODO : Add Inline styles 

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
        <Link href="/btc-page">
          Bitcoin
        </Link>      
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        <Link href="/eth-page">
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
        {/* <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default LayoutDesktop