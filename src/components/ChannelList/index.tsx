import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton ChannelName="chat-livre" />
      <ChannelButton ChannelName="trabalho" />
      <ChannelButton ChannelName="games" />
      <ChannelButton ChannelName="filmes" />
      <ChannelButton ChannelName="musicas" /> */}
    </Container>
  );
};

export default ChannelList;
