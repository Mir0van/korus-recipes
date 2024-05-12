import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";


export default function NotFoundPage() {
  return (
    <div style={{flexGrow: 1, display: 'grid', placeItems: 'center'}}>
      <Result
        status="404"
        title="404"
        subTitle="Такой еды нету =(("
        extra={
          <NavLink to='/'>
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    </div>
  );
}