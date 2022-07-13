type AvatarParam = {
  image: string | undefined;
  size?: number;
  onClick?: () => void;
};

const Avatar = ({
  image = '/assets/images/image-avatar.png',
  size = 40,
}: AvatarParam) => {
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
