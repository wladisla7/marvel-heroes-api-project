import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/appHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../../pages/404'));
const MainPage = lazy(() => import('../../pages/MainPage'));
const CosmicPage = lazy(() => import('../../pages/CosmicPage'));
const SingleComicPage = lazy(() => import('../../pages/singleComicPage/SingleComicPage'));

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />}>
                        <Routes>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/comics" element={<CosmicPage />} />
                            <Route path="/comics/:comicId" element={<SingleComicPage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Suspense>
                </main>

            </div>
        </Router>
    )
}


export default App