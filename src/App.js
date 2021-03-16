import { Layout } from "antd";
import "./App.css";
import Qa from "./containers/Qa";
import JSON from "./test.json";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header></Header>
      <Content className="main-content">
        <div className="App">
          <Qa data={JSON} />
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
