import React, { useState, useEffect, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@Githubexplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Please, enter owner/repository');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      console.log(repository);

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repository not found, please try again.');
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@Githubexplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories at Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Enter repository name"
        />
        <button type="submit">Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={40} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
