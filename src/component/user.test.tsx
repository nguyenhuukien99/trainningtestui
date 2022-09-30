import renderer from "react-test-renderer";
import User from "./user";
// Updated test case with a Link to a different address
it("renders correctly", () => {
  const tree = renderer
    .create(
      <User
        name="Nguyen Huu Kien"
        age={23}
        birthday="20/04/1999"
        src="https://znews-photo.zingcdn.me/w660/Uploaded/unvjuas/2021_01_12/106228561_288966105802103_4617392174817760819_n.jpg"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
