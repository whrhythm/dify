import { getMarketplace } from './base'

export const getUserSAMLSSOUrl = (invite_token?: string) => {
  const url = invite_token ? `/enterprise/sso/saml/login?invite_token=${invite_token}` : '/enterprise/sso/saml/login'
  return getMarketplace<{ url: string }>(url)
}

export const getUserOIDCSSOUrl = (invite_token?: string) => {
  const url = invite_token ? '/enterprise/sso/oidc/login' : '/enterprise/sso/oidc/login'
  return getMarketplace<{ url: string; state: string }>(url)
}

export const getUserOAuth2SSOUrl = (invite_token?: string) => {
  const url = invite_token ? `/enterprise/sso/oauth2/login?invite_token=${invite_token}` : '/enterprise/sso/oauth2/login'
  return getMarketplace<{ url: string; state: string }>(url)
}
