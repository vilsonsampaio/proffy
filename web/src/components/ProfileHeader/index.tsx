import React from 'react';
import { FiPower } from 'react-icons/fi';

import { history } from '../../routes/history';

import { ProfileHeaderProps } from './ProfileHeader';

import { Container, ProfileWrapper, Button } from './styles';


const ProfileHeader: React.FC<ProfileHeaderProps> = ({ data, handleSignOut }) => {
  if (data) {
    return (
      <Container>
        <ProfileWrapper avatarURL={data.avatar} onClick={() => history.push('/profile')}>
          <div/>

          <h4>{data.name} {data.surname}</h4>
        </ProfileWrapper>

        <Button onClick={() => handleSignOut()}>
          <FiPower />
        </Button>
      </Container>
    );
  }

  else return null;
}

export default ProfileHeader;