import React from 'react';
import { storiesOf } from '@storybook/react';

import Form from './Form';

storiesOf('Form', module)
.add('Form', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
/>)
.add('Form-large', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
large
/>)
.add('Form-Xlarge', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
Xlarge
/>)
.add('Form-fade', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
fade
/>)
.add('Form-large-fade', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
large
fade
/>)
.add('Form-Xlarge-fade', ()=> <Form
type='Form'
label=''
options={['hello', 'there', 'dude']}
Xlarge
fade
/>)