import React from 'react';
import { render, screen } from '@testing-library/react';

import GitHubFollowers from './index';
describe ('followers test', () => {
  const followersMock = [
    { id: 1, login: 'Follower1' },
    { id: 2, login: 'Follower2' },
    { id: 3, login: 'Follower3' },
    { id: 4, login: 'Follower4' },
    { id: 5, login: 'Follower5' },
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
    render(<GitHubFollowers userId="mojombo" />);
    await screen.findByText('Follower1');
    expect(screen.getByText('Follower2')).toBeInTheDocument();
    expect(screen.getByText('Follower3')).toBeInTheDocument();
    expect(screen.getByText('Follower4')).toBeInTheDocument();
    expect(screen.getByText('Follower5')).toBeInTheDocument();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});

