import AppBanner from "../appBanner/appBanner";
import AppHeader from "../appHeader/appHeader";
import RandomChar from "../randomChar/randomChar";
import CharList from "../charList/charList";
import CharInfo from "../charInfo/charInfo";
import ComicsList from "../comicsList/comicsList";


import decoration from '../../resources/img/vision.png';

const App = () => {
    return (
        <div className="app">
            <AppBanner />
            <AppHeader />
            <main>
                <RandomChar />
                <div className="char__content">
                    <CharList />
                    <CharInfo />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
            </main>
        </div>
    )
}

export default App