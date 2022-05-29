import { useMetadata } from '@builder.io/mitosis';
import React from 'react';
import { Dynamic, Intent, Variant } from '../../models';
import './button.css';

export type ButtonProps = {
  variant?: Dynamic<Variant>;
  intent?: Dynamic<Intent>;
  outline?: boolean;
  disabled?: boolean;
  children?: any; // TODO change
};

useMetadata({ isAttachedToShadowDom: true });

export default function Button(props: ButtonProps) {
  return (
    <button
      class={
        'pa-button' +
        (props.variant ? ' pa-button--' + props.variant : '') +
        (props.outline ? ' pa-button--outline' : '') +
        (props.intent ? ' is-' + props.intent : '') +
        (props.disabled ? ' is-disabled' : '')
      }
    >
      {props.children}
    </button>
  );
}
