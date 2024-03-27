import Image from 'next/image';

const User = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          <Image src="/svg/like.svg" alt="Home" height="25" width="25" />
        </div>
        <div>
          <Image src="/svg/info.svg" alt="Info" height="25" width="25" />
        </div>
        <div className="flex justify-center mx-auto">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-10 h-10 object-cover"
            alt="profile picture"
          />
        </div>
        {/* <div>
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-full w-[20px]" alt="Info" />
        </div> */}
      </div>
    </>
  );
};

export default User;
