import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';

import { BASE_URL } from '../config';

const oauthGoogle = `${BASE_URL}/auth/google`;
const oauthFB = `${BASE_URL}/auth/facebook`;
const SignUp = () => {
  return (
    <div>
      <button>
        <a className="flex items-center" href={oauthGoogle}>
          <FcGoogle className="mr-2" />
          Sign up with Google
        </a>
        <a className="flex items-center" href={oauthFB}>
          <GrFacebook className="mr-2" />
          Sign up with FaceBook
        </a>
      </button>
    </div>
  );
};

export default SignUp;
