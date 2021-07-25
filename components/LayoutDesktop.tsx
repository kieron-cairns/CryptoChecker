import React, { Children, FunctionComponent } from 'react'
import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Link from "next/link";

//TODO : Add Inline styles 


interface Props {
  // coins: any
}

//Initialise interface and pass the children and
//API list to the sidebar

const LayoutDesktop = ({
  children,
  apilist,
}) => {
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
          {/* Loop through api items  */}
          {apilist.map(function(items, idx){
          return(
          <Menu.Item as='a'>
            
            <Icon name='home' />
            {/* pass the items id and name into the sidebar navigations */}
            <Link href={items.id}><a>{items.name}</a></Link>
          </Menu.Item>
          )
          })}    
        </Sidebar>     
        <Sidebar.Pusher>
          <Segment style={{minHeight: "100vh"}} basic>
            {/* Show page that has been selected by the user in the side bar  */}
         {children}      
          </Segment>  
        </Sidebar.Pusher>
      </Sidebar.Pushable>      
  )
}

export default LayoutDesktop