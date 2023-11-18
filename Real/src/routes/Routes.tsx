import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserDetails from '../pages/userdetails/UserDetails';
import NoMatch from '../pages/nomatch/NoMatch';
import Layout from '../DesignSystem/ComplexComponents/Layout';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <ReactRoutes>
        <Route path="/" element={<Home title="GitHub Users" />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="*" element={<NoMatch />} />
      </ReactRoutes>
    </Layout>
  );
};

export {  AppRoutes };
