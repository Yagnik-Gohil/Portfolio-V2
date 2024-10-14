const Tag = ({
  border,
  background,
  title,
  color,
  className,
}: {
  border: string;
  background: string;
  title: string;
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center px-[10px] py-[8px] border rounded-[100px] text-center ${className}`}
      style={{
        borderColor: border,
        background: background,
        color: color ? color : "white",
      }}
    >
      <div className="text-xs leading-[112%]">{title}</div>
    </div>
  );
};

export default Tag;
