import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

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
        Bitcoin
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Ethereum
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Litecoin
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        XRP
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment style={{minHeight: "100vh"}} basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default LayoutDesktop
