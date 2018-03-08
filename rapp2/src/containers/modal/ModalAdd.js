import React from 'react';

import ModalWrapper from '../ModalWrapper.js';

const AddSolicitation = props => {
  const addSolicitation = provider => {
    props.hideModal();
    props.addSolicitation(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Sign in"
      width={400}
      showOk={false}
    >
      <p>Choose your flavor</p>
      <button onClick={() => signIn('facebook')}>F1</button>
      <button onClick={() => signIn('google')}>F2</button>
      <button onClick={() => signIn('twitter')}>F3</button>
    </ModalWrapper>
  );
};

export default AddSolicitation;
