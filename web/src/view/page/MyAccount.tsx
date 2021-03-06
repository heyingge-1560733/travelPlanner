import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Login } from '../auth/Login'
import { Signup } from '../auth/Signup'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    return <div>choose an app</div>
  }
  switch (app) {
    case PlaygroundApp.LOGIN:
      return <Login />
    case PlaygroundApp.SIGNUP:
      return <Signup />
    default:
      throw new Error('no app found')
  }
}
