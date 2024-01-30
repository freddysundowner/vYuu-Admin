import { Button } from "@windmill/react-ui";

import Error from "../components/form/Error";
import LabelArea from "../components/form/LabelArea";
import InputArea from "../components/form/InputArea";
import useLoginSubmit from "../hooks/useLoginSubmit";
const Login = () => {
  const { onSubmit, register, handleSubmit, errors, loading } =
    useLoginSubmit();
  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto">
            <div className="h-32 md:h-auto md:w-1/2"></div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/1">
              <div className="w-1/2 ">
                <h1 className="flex justify-center text-2xl items-center font-semibold text-gray-700 dark:text-gray-200">
                  TokShop Admin
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <LabelArea label="Email" />
                  <InputArea
                    register={register}
                    defaultValue="admin@gmail.com"
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@doe.com"
                  />
                  <Error errorName={errors.email} />
                  <div className="mt-6"></div>
                  <LabelArea label="Password" />
                  <InputArea
                    register={register}
                    defaultValue="123456"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="***************"
                  />
                  <Error errorName={errors.password} />
                  <div className="mt-6"></div>
                  
                  <Button
                    disabled={loading}
                    type="submit"
                    className="mt-4 h-12 w-full"
                    to="/dashboard"
                  >
                    Log in
                  </Button>
                  <div className="mt-6"></div>
                  <div className="my-10" />
                </form>

                <div className="flex flex-col text-white">
                  <h3 className="text-1xl font-semibold">Test Logins</h3>
                  <div>Email: admin@gmail.com</div>
                  <div>Password: 123456</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
