import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addPost} from "../../store/postsSlice";


function PostsPage() {

    const dispatch = useDispatch();
    const [values, setValues] = useState('');
    const {posts, title, body} = useSelector((store) => store.postReducer);

    function submit(e) {
        e.preventDefault();
        dispatch(addPost(values))
    }

    function changeInput(e) {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div>
            <h2>Posts page</h2>
            <form onSubmit={submit}>
                <input type="text"
                       name='title'
                       placeholder='title'
                       value={title}
                       onChange={changeInput}
                />

                <input type="text"
                       name='body'
                       placeholder='body'
                       value={body}
                       onChange={changeInput}
                />
                <button>create</button>
            </form>

            {posts ?
                <ul>
                    {posts.map((post, index) => (
                    <div key={index}>
                        <li>Title: {post.title}, body: {post.body}</li>
                    </div>
                    ))}
                </ul>

            : <p>"no posts found"</p>
            }

        </div>
    );
}

export default PostsPage;