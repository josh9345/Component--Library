import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './CheckBox';
 
storiesOf('CheckBox', module)
.add('Checkbox', ()=><CheckBox
type='checkBox'
label='Dont show this pop-up again'
/>)
.add('Checkbox-black', ()=><CheckBox
type='checkBox'
label='Dont show this pop-up again'
black
/>)