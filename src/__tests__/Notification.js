import 'react-native';
import React from 'react';

import { Notification } from '@mobile/components/reusable';
import renderer from 'react-test-renderer';
import "jest-snapshots-svg";

/* eslint-disable indent */
describe('Notification Component', () => {
  it('renders properly in success mode', () => {
    const tree = renderer.create(
      <Notification
        status={'SUCCESS'}
        text={'Succeeded'}
        display={true}
        duration={null}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSVGSnapshot(320, 568);
  });

  it('renders properly in failure mode', () => {
    const tree = renderer.create(
      <Notification
        status={'FAILURE'}
        text={'Failed'}
        display={true}
        duration={null}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSVGSnapshot(320, 568);
  });

  it('renders properly in stateless mode', () => {
    const tree = renderer.create(
      <Notification
        status={'STATELESS'}
        text={'Info message'}
        display={true}
        duration={null}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree).toMatchSVGSnapshot(320, 568);
  });
});
