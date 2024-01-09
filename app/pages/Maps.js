"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from 'app/sass/maps.scss'

export default function Maps () {
  return(
    <div ><iframe className='map'  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%C5%81ukowica%20440+(Fizjostacja)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
  )
}

