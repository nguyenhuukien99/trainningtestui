import renderer from "react-test-renderer";
import User from "./user";
// Updated test case with a Link to a different address
it("renders correctly", () => {
  const tree = renderer
    .create(
      <User name="Nguyen Huu Kien" age={18} birthday="20/04/1999" src="nancy" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot(`
  <UserStyled>
  <div className="info">
    <div className="text">
      <div className="name">Ho va ten:Nguyen Huu Kien</div>
      <div className="age">Tuoi:18</div>
      <div className="birthday">Ngay Sinh:20/04/1999</div>
    </div>
    <div className="image">
      <img
        src="nancy"
        alt="nancy"
      />
    </div>
  </div>
</UserStyled>
  `);
});
