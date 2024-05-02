import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Demo from './Component/demo';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      {({ signOut, user }) => (
        <main>
          <h1>User: {user.username}</h1>
          <Demo/>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}