import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-white w-full h-[982px] overflow-hidden text-left text-xl text-gray-300 font-inter">
      <div className="absolute top-[127px] left-[165px] w-[311px] flex flex-row p-2.5 box-border items-start justify-start text-5xl text-gray-100">
        <div className="flex-1 relative tracking-[0.18em] font-extrabold">{`Create  Account `}</div>
      </div>
      <div className="absolute top-[11px] left-[762px] w-[149px] flex flex-row p-2.5 box-border items-center justify-end gap-[10px] text-base text-gray-200">
        <div className="flex-1 relative">English (UK)</div>
        <img
          className="relative w-[16.52px] h-[16.52px] overflow-hidden shrink-0"
          alt=""
          src="/trianglefill.svg"
        />
      </div>
      <div className="absolute top-[202px] left-[175px] rounded-lg bg-white box-border w-[220px] flex flex-row py-2.5 pr-0 pl-2 items-center justify-start gap-[4px] text-base text-gray-100 border-[1px] border-solid border-gray-400">
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/google-logo.svg"
        />
        <div className="flex-1 relative">{`Sign up with Google `}</div>
      </div>
      <div className="absolute top-[202px] left-[434px] rounded-lg bg-white box-border w-[249px] flex flex-row py-2.5 pr-0 pl-2 items-center justify-start gap-[4px] text-base text-gray-100 border-[1px] border-solid border-gray-400">
        <img
          className="relative w-9 h-9 overflow-hidden shrink-0"
          alt=""
          src="/facebook3-logo.svg"
        />
        <div className="flex-1 relative">{`Sign up with Facebook `}</div>
      </div>
      <div className="absolute top-[357px] left-[365px] bg-white w-[91px] flex flex-row p-2.5 box-border items-start justify-start text-5xl">
        <div className="flex-1 relative tracking-[0.18em] font-extrabold">
          -OR-
        </div>
      </div>
      <div className="absolute top-[477px] left-[178px] w-[502px] flex flex-col items-start justify-start gap-[11px] text-5xl">
        <div className="self-stretch relative">
          <span>{`Full `}</span>
          <span className="text-xl">Name</span>
          <span>{` `}</span>
        </div>
        <img className="relative w-[502px] h-px" alt="" src="/vector-1.svg" />
      </div>
      <div className="absolute top-[575px] left-[178px] w-[502px] flex flex-col items-start justify-start gap-[11px]">
        <div className="self-stretch relative">Email Address</div>
        <img className="relative w-[502px] h-px" alt="" src="/vector-1.svg" />
      </div>
      <div className="absolute top-[668px] left-[175px] h-10 flex flex-col items-start justify-start">
        <div className="w-[500px] flex flex-row items-end justify-start">
          <div className="flex-1 relative">Password</div>
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src="/eyeslashfill.svg"
          />
        </div>
        <img className="relative w-[502px] h-px" alt="" src="/vector-1.svg" />
      </div>
      <div className="absolute top-[766px] left-[178px] rounded-lg bg-seagreen w-[502px] h-12 flex flex-row p-2.5 box-border items-start justify-start text-center text-white">
        <div className="flex-1 relative font-semibold">{`Create Account `}</div>
      </div>
      <div className="absolute top-[825px] left-[178px] w-[330px] h-11 flex flex-row p-2.5 box-border items-start justify-start text-center text-gray-400">
        <div className="flex-1 relative font-medium">
          <span>{`Already have an account ? `}</span>
          <span className="text-lightseagreen">Login</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
