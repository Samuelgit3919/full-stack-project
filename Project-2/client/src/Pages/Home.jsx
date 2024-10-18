import { Link } from "react-router-dom";


const Home = () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur.",
            desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel ipsum repudiandae corporis deserunt iure impedit ratione illo voluptatum commodi.",
            img: "https://i.pinimg.com/enabled/564x/25/e3/92/25e3929901ce9902fbc6e16de05a43bd.jpg",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel ipsum repudiandae corporis deserunt iure impedit ratione illo voluptatum commodi.",
            img: "https://i.pinimg.com/736x/77/46/56/77465603e3d08819bfff7e2de4cd562f.jpg",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur.",
            desc: "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel ipsum repudiandae corporis deserunt iure impedit ratione illo voluptatum commodi.",
            img: "https://i.pinimg.com/736x/08/80/00/08800035c88c2c3abc3dd1ccee9043a5.jpg",
        },
    ]
    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Home;
