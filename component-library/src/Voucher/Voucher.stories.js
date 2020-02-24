import React from 'react';
import { storiesOf } from '@storybook/react';

import Voucher from './Voucher';
 
storiesOf('Voucher', module)
.add('Voucher', ()=><Voucher
    type='voucher'
    label='Reedem'
/>)
.add('Voucher-large', ()=><Voucher
type='voucher'
label='Reedem'
large
/>)