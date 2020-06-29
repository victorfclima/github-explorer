import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/63361486?s=460&u=3a441b8aabdb9b7d8afd66ac54d7498d100a0b73&v=4"
            alt="Victor França"
          />
          <div>
            <strong>Victorfrancacl/nodejs-api</strong>
            <p>Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Opened issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`asdad}`}>
          <div>
            <strong>asdsad</strong>
            <p>asdad</p>
          </div>
          <FiChevronRight size={40} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
