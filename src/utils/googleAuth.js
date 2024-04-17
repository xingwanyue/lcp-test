import { fetchmy } from './request';
import { api } from '@/utils';

const YOUR_CLIENT_ID = '1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com';
// secret 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
const YOUR_REDIRECT_URI = '/oauth';

/*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
export function oauth2SignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create element to open OAuth 2.0 endpoint in new window.
  const form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  const params = {
    client_id: YOUR_CLIENT_ID,
    redirect_uri: `${window.location.protocol}//${window.location.hostname}${YOUR_REDIRECT_URI}`,
    scope: 'https://www.googleapis.com/auth/userinfo.profile email',
    state: 'try_sample_request',
    include_granted_scopes: 'true',
    response_type: 'token',
  };

  // Add form parameters as hidden input values.
  Object.keys(params).forEach((p) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  });

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}

// If there's an access token, try an API request.
// Otherwise, start OAuth 2.0 flow.
export const oauthLogin = async () => {
  const hashString = window.location.hash.substring(1);
  let accessToken = '';
  hashString.split('&').forEach((str) => {
    const [k, v] = str.split('=');
    if (k === 'access_token') {
      accessToken = v;
    }
  });
  if (accessToken) {
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await res.json();
    const { email, picture, name } = data;
    return fetchmy(`${api}/common/login`, {
      method: 'post',
      body: JSON.stringify({ email, avatar: picture, nickname: name, google: true, type: 'pc' }),
    });
  }
};
export default {};
