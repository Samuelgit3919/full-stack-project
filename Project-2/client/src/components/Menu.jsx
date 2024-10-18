// import React from 'react'

const Menu = () => {
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
        <div className="menu">
            <h1>Other Posts You may Like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
