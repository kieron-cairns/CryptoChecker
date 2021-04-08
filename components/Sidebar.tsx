import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

const SidebarExample = props => {
  const [visible, setVisible] = useState({ name: "visible" });

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        // onHide={() => setVisible(false)}
        vertical
        // visible={visible}
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SidebarExample;
