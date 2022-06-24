type AvatarParam = {
  image: string;
  size: number;
  onClick: () => void;
};

const Avatar = ({ image, size }: AvatarParam) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div className="overflow-hidden rounded-full" style={style}>
      <img src={image} alt="" />
    </div>
  );
};

export default Avatar;
