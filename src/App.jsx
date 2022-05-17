import { Route } from 'wouter';
import ImageContextProvider from "./context/ImageContext";
import Upload from './pages/Upload';
import Uploaded from './pages/Uploaded';
import Card from './components/Card';

function App() {
  return (
    <ImageContextProvider>
      <section className="h-screen flex justify-center items-center">
        <Card>
          <Route path='/' component={Upload} />
          <Route path='/uploaded' component={Uploaded} />
        </Card>
      </section>
    </ImageContextProvider>
  )
}

export default App
