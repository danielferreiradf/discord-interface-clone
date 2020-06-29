import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Daniel Ferreira" />

      <Role>Offline - 15</Role>
      <UserRow nickname="Pessoa 1" isBot />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
      <UserRow nickname="Usuario" />
    </Container>
  );
};

export default UserList;
