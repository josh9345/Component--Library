import React from 'react';
import { storiesOf } from '@storybook/react';

import Email from './Email';

storiesOf('Email', module)
.add('Email', ()=> <Email
label='Email'
type='email'
/>)
.add('Email-large', ()=> <Email
label='Email'
type='email'
large
/>)
.add('Email-Xlarge', ()=> <Email
label='Email'
type='email'
Xlarge
/>)