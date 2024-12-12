import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Login Image" style="width: 100%; max-width: 400px; margin-bottom: 20px;">
      <button id="google-auth" class="btn btn-success" style="width: 100%; max-width: 400px;">Login To Get Started!</button>
    </div>
  `;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
