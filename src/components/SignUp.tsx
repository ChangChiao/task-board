import { FcGoogle } from 'react-icons/fc';

import { BASE_URL } from '../config';

const oauthPath = `${BASE_URL}/auth/google`;

const SignUp = () => {
  return (
    <div>
      <button>
        <a className="flex items-center" href={oauthPath}>
          <FcGoogle className="mr-2" />
          Sign up with Google
        </a>
      </button>
    </div>
  );
};

export default SignUp;
