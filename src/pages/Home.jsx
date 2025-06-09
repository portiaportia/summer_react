import '../css/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tree from '../components/Tree';

const Home = () => {
    return (
        <div id="main-area">
            <h2>Welcome to Cherry Season</h2>
            <p>It's time to pick</p>

            <div className="trees columns">
                <Tree />
                <Tree />
                <Tree />
            </div>
        </div> 
    );
};

export default Home;