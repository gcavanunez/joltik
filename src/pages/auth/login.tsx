import type { InferGetServerSidePropsType, NextPage } from 'next'
import { getProviders, signIn } from 'next-auth/react'

const Login: NextPage<ServerSideProps> = ({ providers }) => {
  const loginWithDiscord = () => {}
  return (
    <div className="flex min-h-screen flex-col justify-center sm:py-12">
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
      <div className="mx-auto w-full max-w-md p-1.5">
        <div className="rounded-lg bg-white py-8 px-10 shadow ">
          <div className="py-5 sm:mx-auto sm:w-full sm:max-w-md">
            <a href="/" className="block py-3">
              <img
                alt=""
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/595.png"
                className="mx-auto h-24 w-auto"
              />
            </a>
            <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight ">Sign In</h1>
            <div className="border-b border-gray-200 pb-4 " style={{ position: 'relative' }}>
              <div
                style={{
                  backgroundColor: '#047bf8',
                  width: 26,
                  height: 4,
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  border: '1px solid #047bf8',
                  borderRadius: 1,
                }}
              />
            </div>
          </div>
          <div className="electron-undraggable space-y-5 pt-5">
            <form
              className="form"
              id="new_user"
              action="/users/sign_in"
              acceptCharset="UTF-8"
              method="post"
            >
              <input
                type="hidden"
                name="authenticity_token"
                defaultValue="dHN7BuW-OieWonPv7_T2sCoAosJmMpQVBSAGWnoUjBISAxznVRMGrgX7GRaQDymc4SF0XLCCKm5iUvISpyuDZA"
                autoComplete="off"
              />
              <div className="required">
                <label className="block" htmlFor="user_email">
                  Your Email Address
                </label>
                <div className="mt-1.5">
                  <input
                    id="user_email"
                    className=" focus:ring-blue focus:border-blue block w-full rounded-md border-gray-300 text-sm font-light shadow-sm   "
                    type="email"
                    defaultValue=""
                    name="user[email]"
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  <a href="/users/sign_up">Don't have an account?</a>
                </p>
              </div>
              <div id="step-2" className=" space-y">
                <div className="required">
                  <label className="block" htmlFor="user_password">
                    Your Password
                  </label>
                  <div className="mt-1.5">
                    <input
                      id="user_password"
                      className=" focus:ring-blue focus:border-blue block w-full rounded-md border-gray-300 text-sm font-light shadow-sm   "
                      type="password"
                      name="user[password]"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-gray-500">
                    <a href="/users/password/new">Forgot your password?</a>
                  </p>
                </div>
                <button className="mt-1 cursor-pointer rounded bg-pink-500 p-1 font-bold">
                  Submit
                </button>
              </div>
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="text-blue focus:ring-blue-dark h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="remember_me" className="ml-2 block">
                  Remember me
                </label>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 " />
              </div>
              <div className="relative flex justify-center">
                <span className=" bg-white px-2 text-xs uppercase text-gray-500 ">Or</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <button
                className="mt-1 cursor-pointer rounded bg-pink-500 p-1 font-bold"
                onClick={loginWithDiscord}
              >
                Sign in with Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
export default Login
