import { UserStyled } from "./styled";
interface Props {
  name: string;
  age: number;
  birthday: string;
  src: string;
}

function User({ name, age, birthday, src }: Props) {
  return (
    <UserStyled>
      <div className="info">
        <div className="text">
          <div className="name">Ho va ten:{name}</div>
          <div className="age">Tuoi:{age}</div>
          <div className="birthday">Ngay Sinh:{birthday}</div>
        </div>
        <div className="image">
          <img src={src} alt="nancy" />
        </div>
      </div>
    </UserStyled>
  );
}

export default User;
