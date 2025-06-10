import '../css/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tree from '../components/Tree';
import SlideShow from '../components/SlideShow';

const Home = () => {
    return (
        <div id="main-area">
            <h2>Welcome to Cherry Season</h2>
            <p>It's time to pick</p>

            <SlideShow />

            <div className="trees columns">
                <Tree 
                    name="Live Oak" 
                    description="Doesn't lose it's leaves"
                    image="images/live-oak.webp" />
                <Tree 
                    name="Evergreen"
                    description="Is forever green"
                    image="images/evergreen.jpg"/>
                <Tree 
                    name="Dogwood"
                    description="Pretty white flowers"
                    image="images/dogwood.webp"/>
            </div>
        </div> 
    );
};

export default Home;