import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

interface Props {
  isMobile?: boolean;
}

const LoginContent = ({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<boolean>;
}) => {
  const [contentMode, setContentMode] = React.useState<
    "login" | "login_email" | "forgot_password"
  >("login");

  const handleBack = () => {
    if (contentMode === "forgot_password") {
      setContentMode("login_email");
    }
    if (contentMode === "login_email") {
      setContentMode("login");
    }
  };
  return (
    <>
      <DialogHeader className="mb-5">
        <div className="relative flex items-center justify-center">
          <DialogTitle className="text-2xl text-center font-bold">
            {contentMode === "login" && "Log in"}
            {contentMode === "login_email" && "Log in"}
          </DialogTitle>
          {["login_email", "forgot_password"].includes(contentMode) && (
            <div
              className="absolute left-0 hover:text-pink-600 cursor-pointer flex items-center justify-center gap-2"
              onClick={handleBack}
            >
              <Icon
                icon={"ic:round-arrow-back-ios"}
                className="text-sm font-light"
              />
              <span className="mb-0.5 text-sm font-light">Back</span>
            </div>
          )}
        </div>
      </DialogHeader>
      {["login_email", "forgot_password"].includes(contentMode) ? (
        <LoginForm contentMode={contentMode} setContentMode={setContentMode} />
      ) : (
        contentMode === "login" && (
          <div className="flex flex-col gap-3">
            <Link href={"/courses"}>
              <div className="bg-pink-600 hover:bg-pink-500 cursor-pointer p-2 md:p-3 flex gap-4 items-center rounded-2xl justify-center">
                <Icon
                  icon={"flat-color-icons:google"}
                  className="bg-white rounded-lg p-1"
                  fontSize={30}
                />
                <span className=" text-white font-bold">
                  Log in with Google
                </span>
              </div>
            </Link>
            <div className="grid gap-2 grid-cols-2">
              <div className="p-2 hover:border-black cursor-pointer md:p-3 border shadow-lg rounded-2xl flex items-center justify-center">
                <Icon
                  icon={"logos:github-icon"}
                  className="bg-white rounded-lg p-1"
                  fontSize={30}
                />
              </div>
              <div
                className="p-2 hover:border-black cursor-pointer md:p-3 border shadow-lg rounded-2xl flex items-center justify-center"
                onClick={() => setContentMode("login_email")}
              >
                <Icon
                  icon={"ic:outline-email"}
                  className="bg-white rounded-lg p-1"
                  fontSize={30}
                />
              </div>
            </div>
          </div>
        )
      )}

      {["login", "login_email"].includes(contentMode) && (
        <>
          <hr className="-mx-6 my-3" />
          <DialogFooter>
            <div className="w-full flex gap-1 items-center justify-center sm:flex-row">
              <span className="text-center text-xs sm:text-sm  whitespace-nowrap">
                New to Tukang Koding?
              </span>
              <span
                className="text-pink-600 text-xs sm:text-sm  whitespace-nowrap cursor-pointer hover:text-pink-500"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </span>
            </div>
          </DialogFooter>
        </>
      )}
    </>
  );
};

const SignUpContent = ({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<boolean>;
}) => {
  const [contentMode, setContentMode] = React.useState<
    "register" | "register_email" | "verification"
  >("register");

  const handleBack = () => {
    if (contentMode === "register_email") {
      setContentMode("register");
      return;
    }
    if (contentMode === "verification") {
      setContentMode("register_email");
      return;
    }
  };

  return (
    <>
      <DialogHeader className="mb-5">
        <div className="relative flex items-center justify-center">
          {contentMode === "register" && (
            <DialogTitle className="text-2xl text-center font-bold ">
              Create an account
            </DialogTitle>
          )}
          {["register_email", "verification"].includes(contentMode) && (
            <div
              className="absolute left-0 hover:text-pink-600 cursor-pointer flex items-center justify-center gap-2"
              onClick={handleBack}
            >
              <Icon
                icon={"ic:round-arrow-back-ios"}
                className="text-sm font-light"
              />
              <span className="mb-0.5 text-sm font-light">Back</span>
            </div>
          )}
        </div>
      </DialogHeader>

      {contentMode === "register" ? (
        <div className="flex flex-col gap-3">
          <Link href={"/courses"}>
            <div className="bg-pink-600 hover:bg-pink-500 cursor-pointer p-2 md:p-3 flex gap-4 items-center rounded-2xl justify-center">
              <Icon
                icon={"flat-color-icons:google"}
                className="bg-white rounded-lg p-1"
                fontSize={30}
              />
              <span className=" text-white font-bold">Sign up with Google</span>
            </div>
          </Link>
          <div className="grid gap-2 grid-cols-2">
            <div className="p-2 hover:border-black cursor-pointer md:p-3 border shadow-lg rounded-2xl flex items-center justify-center">
              <Icon
                icon={"logos:github-icon"}
                className="bg-white rounded-lg p-1"
                fontSize={30}
              />
            </div>
            <div
              className="p-2 hover:border-black cursor-pointer md:p-3 border shadow-lg rounded-2xl flex items-center justify-center"
              onClick={() => setContentMode("register_email")}
            >
              <Icon
                icon={"ic:outline-email"}
                className="bg-white rounded-lg p-1"
                fontSize={30}
              />
            </div>
          </div>
        </div>
      ) : (
        <RegisterForm
          contentMode={contentMode}
          setContentMode={setContentMode}
        />
      )}
      {["register", "register_email"].includes(contentMode) && (
        <>
          <hr className="-mx-6 my-3" />
          <DialogFooter>
            <div className="w-full flex gap-1 items-center justify-center sm:flex-row">
              <span className="text-center text-xs sm:text-sm whitespace-nowrap">
                Already have an account?
              </span>
              <span
                className="text-pink-600 text-xs sm:text-sm   whitespace-nowrap cursor-pointer hover:text-pink-500"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </span>
            </div>
          </DialogFooter>
        </>
      )}
    </>
  );
};

const Auth: React.FC<Props> = ({ isMobile = false }) => {
  const [isLogin, setIsLogin] = React.useState<boolean>(true);

  return (
    <Dialog>
      <div className="flex w-full px-4 gap-4">
        <DialogTrigger
          onClick={() => setIsLogin(true)}
          className={`${
            isMobile
              ? "w-full whitespace-nowrap my-auto px-3 py-2 bg-white rounded-2xl text-pink-600 text-center transition-all duration-500 font-medium  hover:bg-pink-500 border-black"
              : "w-full px-4 py-3 text-center transition-all duration-500 font-medium text-pink-600 hover:text-pink-400 border-black"
          }`}
        >
          Login
        </DialogTrigger>
        <DialogTrigger
          onClick={() => setIsLogin(false)}
          className={`w-full whitespace-nowrap my-auto px-3 py-2 bg-pink-600 rounded-2xl text-white text-center transition-all duration-500 font-medium  hover:bg-pink-500 border-black`}
        >
          Sign Up
        </DialogTrigger>
      </div>
      <DialogContent className="bg-white max-w-xs sm:max-w-sm md:max-w-lg gap-2">
        {isLogin ? (
          <LoginContent setIsLogin={setIsLogin} />
        ) : (
          <SignUpContent setIsLogin={setIsLogin} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
