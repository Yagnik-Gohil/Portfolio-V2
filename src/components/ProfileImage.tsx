const ProfileImage = ({
  background,
  border,
  src,
  className,
}: {
  background: string;
  border: string;
  src: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center p-3 md:p-4 border rounded-[50%] ${className}`}
      style={{
        borderColor: border,
        background: background,
      }}
    >
      <img
        src={src}
        className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[100%]"
      ></img>
    </div>
  );
};

export default ProfileImage;
