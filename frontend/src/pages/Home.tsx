import { faBlog, faBookBookmark, faKitchenSet, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css';

function HomePage() {
    const topics = [
        { title: "Blogs", description: "Read the stuff that's been on my mind.", link: "/blog", image: faBlog },
        { title: "Recipes", description: "Explore my favorite gluten free, lactose free, and sometimes vegan recipes.", link: "/recipes", image: faKitchenSet },
        { title: "Book Reviews", description: "Check out the books I read and what I thought of them.", link: "/books", image: faBookBookmark },
        { title: "About Kit", description: "Learn more about Kit.", link: "/about", image: faPerson },
    ];

    return (
    <div>
        <h1>Welcome to Kit's place</h1>
        <p>This is the home page.</p>
        <div className="topic-list">
            {topics.map((topic) => (
                <div key={topic.title} className="topic-card">
                    <FontAwesomeIcon icon={topic.image} size="3x" />
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default HomePage;
