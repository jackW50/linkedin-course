import React from 'react';
import { tsPropertySignature } from '@babel/types';

export const Demo = props => {
    return <div style={{ color: 'blue', textDecoration: 'underline' }}>{props.children}</div>
}