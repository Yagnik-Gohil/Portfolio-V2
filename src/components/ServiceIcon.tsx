const ServiceIcon = ({
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
        className={`flex justify-center items-center p-6 md:p-8 border rounded-[50%] ${className}`}
        style={{
          borderColor: border,
          background: background,
        }}
      >
        <img
          src={src}
          className="w-8 h-8 md:w-11 md:h-11 lg:w-14 lg:h-14"
        ></img>
      </div>
    );
  };
  
  export default ServiceIcon;
  