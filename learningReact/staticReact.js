import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
function Page(){
    return (
      <div>
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    );
}

ReactDOM.render(<Page></Page>, document.querySelector('#main'));
