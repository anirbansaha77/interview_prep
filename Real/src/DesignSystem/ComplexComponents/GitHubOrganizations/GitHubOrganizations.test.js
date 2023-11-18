import React from 'react';
import { render, screen } from '@testing-library/react';

import GitHubOrganizations from './index';
describe ('followers test', () => {
  const followersMock = [
            { id: 1, login: 'Org1' },
            { id: 2, login: 'Org2' },
          ];
  let originFetch;
  beforeEach(() => {
    originFetch = (global).fetch;
  });
  afterEach(() => {
    (global).fetch = originFetch;
  });
  it('should pass', async () => {
    const fakeResponse = followersMock;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes);
    (global).fetch = mockedFetch;
    render(<GitHubOrganizations userId="mojombo" />);
    await screen.findByText('Org1');
    expect(screen.getByText('Org2')).toBeInTheDocument();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});

