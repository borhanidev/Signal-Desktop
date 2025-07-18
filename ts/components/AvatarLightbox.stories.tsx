// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';
import { AvatarColors } from '../types/Colors';
import type { PropsType } from './AvatarLightbox';
import { AvatarLightbox } from './AvatarLightbox';
import { getDefaultConversation } from '../test-helpers/getDefaultConversation';

const { i18n } = window.SignalContext;

export default {
  title: 'Components/AvatarLightbox',
  component: AvatarLightbox,
  argTypes: {
    avatarColor: {
      control: { type: 'select' },
      options: AvatarColors,
    },
  },
  args: {
    i18n,
    avatarColor: AvatarColors[0],
    onClose: action('onClose'),
  },
} satisfies Meta<PropsType>;

export function Group(args: PropsType): JSX.Element {
  return <AvatarLightbox {...args} isGroup />;
}

export function Person(args: PropsType): JSX.Element {
  const conversation = getDefaultConversation();
  return (
    <AvatarLightbox
      {...args}
      avatarColor={conversation.color}
      conversationTitle={conversation.title}
    />
  );
}

export function Photo(args: PropsType): JSX.Element {
  return <AvatarLightbox {...args} avatarUrl="/fixtures/kitten-1-64-64.jpg" />;
}
