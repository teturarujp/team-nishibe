import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { Transition } from '../components/transition';
import { Loading } from '../components/loading';

const Top = lazy(() => import('./top'));
const News = lazy(() => import('./news'));
const About_Catfish = lazy(() => import('./about_catfish'));
const About_Turtle = lazy(() => import('./about_turtle'));
const About_Frog = lazy(() => import('./about_frog'));
const About_Eel = lazy(() => import('./about_eel'));
const Contact = lazy(() => import('./contact'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Transition>
          <Route path="/" element={<Top />} />
          <Route path="/news" element={<News />} />
          <Route path="/about/catfish" element={<About_Catfish />} />
          <Route path="/about/turtle" element={<About_Turtle />} />
          <Route path="/about/frog" element={<About_Frog />} />
          <Route path="/about/eel" element={<About_Eel />} />
          <Route path="/contact" element={<Contact />} />
        </Transition>
      </Suspense>
    </>
  );
}
