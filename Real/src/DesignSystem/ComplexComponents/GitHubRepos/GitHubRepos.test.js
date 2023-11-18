import React from 'react';
import { render, screen } from '@testing-library/react';

import GitHubRepos from './index';
describe ('followers test', () => {
  const followersMock = [
            { id: 1, name: 'Repo1' },
            { id: 2, name: 'Repo2' },
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
    render(<GitHubRepos userId="mojombo" />);
    await screen.findByText('Repo1');
    expect(screen.getByText('Repo2')).toBeInTheDocument();
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});
