import resume from "../public/images/resume.svg";

const Headers = () => {
  return (
    <div className="w-full flex justify-center p-30">
      <div className="w-full flex p-[30px]">
        <div className="w-1/2 text-[40px] text-white">
          A Resume that stands out! Makes your own resume. It's free
        </div>
        <div className="w-1/2 ">
          <img className="w-72" src={resume} alt="Resumr" />
        </div>
      </div>
    </div>
  );
};

export default Headers;
