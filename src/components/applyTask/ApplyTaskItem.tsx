import Avatar from '../atoms/Avatar';

type ListItemProp = Task.TaskDetail & Task.ApplyResult;

const ApplyTaskItem = ({
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  avatar,
  author,
  status,
  contactInfo,
  expire = new Date(),
}: ListItemProp) => {
  return (
    <div className="rounded-lg shadow-lg min-h-[300px] p-2">
      {status === 1 && !contactInfo && <div className="card-mask">已結束</div>}
      {status === 2 && <div className="card-mask">已過期</div>}
      <img src={cover} alt="" />
      <div className="info">
        <div>
          <span>{expire}</span>
          <button>delete</button>
        </div>
        <h3>{title}</h3>
        <h4>{reward}</h4>
        <p>{description}</p>
      </div>
      <Avatar image={avatar} /> <span> {author} </span>
      <div>{contactInfo}</div>
    </div>
  );
};

export default ApplyTaskItem;
