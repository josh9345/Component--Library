import React from 'react';
import { storiesOf } from '@storybook/react';
import cart from '../../img/cart_2.png'

import Button from './Button';

storiesOf('Button', module)
.add('Primary', ()=> <Button 
    label='primary'
    type='primary'
/>)
.add('Danger', () => <Button 
label="Danger"
type="danger"
 
/>)
.add('Success', () => <Button 
label="Success"
type="success"

 />)
.add('Warning', () => <Button 
label="Warning"
type="warning"

/>)
.add('Hollow-primary', () => <Button 
label="primary-outline"
type="primary-outline"

/>)
.add('Hollow-danger', () => <Button 
label="danger-outline"
type="danger-outline"

/>)
.add('Hollow-success', () => <Button 
label="success-outline"
type="success-outline"

/>)
.add('Hollow-warning', () => <Button 
label="warning-outline"
type="warning-outline"

/>)
.add('Faded-primary', ()=> <Button 
label='faded-primary'
type='faded-primary'
/>)
.add('Faded-danger', ()=> <Button 
label='faded-danger'
type='faded-danger'
/>)
.add('Faded-success', ()=> <Button 
label='faded-success'
type='faded-success'
/>)
.add('Faded-warning', ()=> <Button 
label='faded-warning'
type='faded-warning'
/>)
.add('Add-to-cart', ()=> <Button 
label='Add-to-cart'
type='add-cart'
/>)
.add('Cart', ()=> <Button 
icon='cart'
label=''
type='cart'
/>)
.add('Add-favorite', ()=> <Button 
label='Add-to-favorite'
type='add-favorite'
/>)
.add('Favorite', ()=> <Button 
label=''
type='favorite'
/>)