import { Row, Col, Input, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function ReplyBox() {
  return (
    <Row>
      <Col span={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Col>
      <Col span={23}>
        <TextArea rows={1} />
      </Col>
    </Row>
  );
}

export default ReplyBox;
