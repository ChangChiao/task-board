import { pickOne } from '../../utils/http';
import Avatar from '../atoms/Avatar';

type ListItemProp = Card.CardDetail & {
  applicant: Card.Applicant[];
};

const CreateTaskItem = ({
  id,
  title,
  description,
  cover = '/assets/images/image-equilibrium.jpg',
  reward,
  status,
  applicant,
  expire = new Date(),
}: ListItemProp) => {
  const handleClick = async (userId: string) => {
    await pickOne({ taskId: id, userId });
  };
  return (
    <div className="rounded-lg shadow-lg min-h-[300px] p-2">
      <img src={cover} alt="" />
      <div className="info">
        <div>
          <span>{expire}</span>
          <button>delete</button>
        </div>
        <h3>{title}</h3>
        <h4>{reward}</h4>
        <p>{description}</p>
        {status === 0 && (
          <ul>
            {applicant.map((item) => (
              // eslint-disable-next-line no-underscore-dangle
              <li key={item.id}>
                <Avatar image={item.avatar} /> <span>{item.author}</span>{' '}
                <button onClick={() => handleClick(item.id)}>選擇這個人</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CreateTaskItem;
