import React, { useState, useEffect } from 'react';

import api from '../../services/api';

interface UserProps {
  user_id: string,
  name: string,
  email: string
}

export default function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/users');

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>

      <button type="button">Sair</button>
    </>
  );
}