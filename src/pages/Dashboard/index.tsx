import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories at Github</Title>
      <Form action="">
        <input type="text" placeholder="Enter repository name" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/63361486?s=460&u=3a441b8aabdb9b7d8afd66ac54d7498d100a0b73&v=4"
            alt="Victor França"
          />
          <div>
            <strong>Victorfclima/nodejs-api</strong>
            <p>
              [Monorep] API developed with NodeJS and Express, integrated with
              React and React-Native via Axios. There is also a version using
              TypeScript.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/63361486?s=460&u=3a441b8aabdb9b7d8afd66ac54d7498d100a0b73&v=4"
            alt="Victor França"
          />
          <div>
            <strong>Victorfclima/nodejs-api</strong>
            <p>
              [Monorep] API developed with NodeJS and Express, integrated with
              React and React-Native via Axios. There is also a version using
              TypeScript.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/63361486?s=460&u=3a441b8aabdb9b7d8afd66ac54d7498d100a0b73&v=4"
            alt="Victor França"
          />
          <div>
            <strong>Victorfclima/nodejs-api</strong>
            <p>
              [Monorep] API developed with NodeJS and Express, integrated with
              React and React-Native via Axios. There is also a version using
              TypeScript.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/63361486?s=460&u=3a441b8aabdb9b7d8afd66ac54d7498d100a0b73&v=4"
            alt="Victor França"
          />
          <div>
            <strong>Victorfclima/nodejs-api</strong>
            <p>
              [Monorep] API developed with NodeJS and Express, integrated with
              React and React-Native via Axios. There is also a version using
              TypeScript.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
