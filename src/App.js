import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new window.URLSearchParams
  (window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
    <GlobalStyle />
    <Logo />
    {
      detailId
      ? <h1>Detail Id</h1>
      : <Fragment>
        <ListOfCategories />
        <ListOfPhotoCards />
      </Fragment>
    }
  </div>
  )
}
