import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { FaBookmark, FaCalendar, FaComment, FaEye, FaHeart, FaShare, FaUser } from 'react-icons/fa';
import apiInstance from '../utils/axios';
import moment from 'moment';
import { userdata } from '../plugins/userdata';
import { Toast } from '../plugins/Toast'; 
import Cookies from 'js-cookie'

const BlogDetail = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [createComment, setCreateComment] = useState({
    full_name: '', email: '', comment: ''
  });
  const [likePost, setLikedPost] = useState(() => {
    const likedData = Cookies.get('likedPosts');
    return likedData ? JSON.parse(likedData) : {};
  });
  const [bookmarked, setBookmarked] = useState(() => {
    const bookmarkedData = Cookies.get('bookmarked');
    return bookmarkedData ? JSON.parse(bookmarkedData) : {};
  });

  const fetchData = async () => {
    try {
      const response = await apiInstance.get(`post/detail/${params.slug}`);
      setPost(response.data);
    } catch (error) {
      console.error('Failed to fetch post data:', error);
    }
  };

  const handleLikePost = async (postId) => {
    try {
      const jsonData = {
        user_id: userdata()?.user_id,
        post_id: postId,
      };
      const response = await apiInstance.post('post/like-post/', jsonData);
      const message = response.data.message;
      setLikedPost((prevLikedPosts) => {
        const updatedLikes = {
          ...prevLikedPosts,
          [postId]: message === 'Post Liked',
        };
        Cookies.set('likedPosts', JSON.stringify(updatedLikes));
        return updatedLikes;
      });
      fetchData();
      Toast("success", `${message}`);
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  const handleCommentChange = (event) => {
    setCreateComment({
      ...createComment,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = {
        post_id: post?.id,
        name: createComment.full_name,
        email: createComment.email,
        comment: createComment.comment,
      };
      await apiInstance.post('post/comment-post/', jsonData);
      Toast("success", "Comment added successfully", '');
      setCreateComment({
        full_name: '', email: '', comment: '',
      });
      fetchData();
      
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  const handleBookmarkPost = async (postId, slug) => {
    try {
      const jsonData = {
        user_id: userdata()?.user_id,
        post_id: postId,
      };
      const response = await apiInstance.post('post/bookmark-post/', jsonData);
      const message = response.data.message;
      setBookmarked((previousBookmarked) => {
        const updatedBookmarked = {
          ...previousBookmarked,
          [slug]: message === 'Post Bookmarked'
        };
        Cookies.set('bookmarked', JSON.stringify(updatedBookmarked));
        return updatedBookmarked;
      });
      fetchData();
      Toast("success", response.data.message, "");
    } catch (error) {
      console.error('Failed to bookmark post:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.slug]);

  return (
    <div>
      <Navbar />
      <main className="detail bg-orange-500 pt-20 md:pr-60 md:pl-60">
        <article className="post bg-white shadow-lg rounded-lg md:w-[800px] flex flex-col mx-10">
          <header>
            <img className='rounded-lg md:w-[1500px] md:h-[500px]' src={post?.image} alt={post?.title} />
            <div className='flex gap-2'>
              <div className='h-10 w-10 ml-2 mt-2  '>
                <img className='h-9 w-9 rounded-full border border-orange-500' src={post?.profile?.image} alt={post?.profile?.full_name} />
              </div>
              <div className='mt-2'>
                <h1 className='text-sm font-bold cursor-pointer text-blue-400'><FaUser className='inline' /> {post?.profile?.full_name}</h1>
                <p className='text-gray-500 text-sm'><FaCalendar className='inline' /> {moment(post?.date).format("DD MMM YYYY HH:mm")}</p>
              </div>
            </div>
            <h1 className='font-bold mt-2 ml-4 mr-4 text-3xl w-full'>{post?.title}</h1>
          </header>
          <section>
            <h1 className='m-5 p-2 text-lg w-fit'>{post?.description}</h1>
          </section>
          <footer className='ml-5 flex gap-2 mb-3 justify-between'>
            <button onClick={() => handleLikePost(post?.id)} className='text-2xl cursor-pointer'>
              <FaHeart className={`inline ${likePost[post?.id] ? 'text-red-500' : ''}`} /> {post?.likes?.length}
            </button>
            <p className='text-2xl cursor-pointer'><FaComment className='inline' /> {post?.comments?.length}</p>
            <div className='flex gap-2 mr-2'>
              <button onClick={() => handleBookmarkPost(post?.id, post?.slug)} className='text-2xl cursor-pointer'>
                <FaBookmark className={`${bookmarked[post?.slug] ? 'text-green-500' : ''}`} />
              </button>
              <p className='text-2xl cursor-pointer'><FaShare className='inline' /></p>
              <p className='text-2xl cursor-pointer'><FaEye className='inline' /> {post?.view}</p>
            </div>
          </footer>
        </article>
      </main>
      <section className='bg-orange-500 block pt-5 pb-5 md:pr-60 md:pl-60'>
        <article className='bg-white h-auto shadow-lg md:pr-20  pt-5 pr-5 pl-5 pb-5 md:pl-20 mx-10 md:w-[800px] md:pb-5 rounded-lg md:pt-5'>
          <h1 className='text-xl font-bold text-center m-2'>{post?.comments?.length} Comments</h1>
          <div className='flex flex-col gap-2'>
            <div>
              {post?.comments?.map((c, index) => (
                <div key={index} className='flex gap-2 bg-orange-200 rounded-lg p-2 mb-2 mt-2'>
                  <div className='h-10 w-10 ml-2 mt-2 rounded-full border border-orange-500'>
                    <img src="/ddd.webp" alt={c.name} />
                  </div>
                  <div className='mt-2'>
                    <h1 className='text-sm font-bold cursor-pointer text-blue-400'><FaUser className='inline' /> {c.name}</h1>
                    <p className='text-gray-500 text-sm'><FaCalendar className='inline' /> {moment(c.date).format("DD MMM YYYY HH:mm ")}</p>
                    <p>{c.comment}</p>
                    {c.replay && <p>Replay: {c.replay}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='bg-orange-200 p-5 mt-2 rounded-lg'>
            <h1 className='font-bold text-lg'>Leave a Reply</h1>
            <p className='text-sm'>Your email won't be shared with anyone.</p>
            <form onSubmit={handleFormSubmit}>
              <div className='flex md:flex-row flex-col gap-2'>
                <input
                  placeholder='Name'
                  value={createComment.full_name}
                  onChange={handleCommentChange}
                  className='block my-1 border w-full border-gray-200 rounded-lg p-3 hover:outline outline-blue-500 outline-1'
                  type="text"
                  name="full_name"
                />
                <input
                  placeholder='Email'
                  value={createComment.email}
                  onChange={handleCommentChange}
                  className='rounded-lg my-1 border w-full border-gray-200 p-3 hover:outline outline-blue-500 outline-1'
                  type="email"
                  name="email"
                />
              </div>
              <textarea
                className='block md:w-[500px] my-1 rounded-lg p-2 w-full '
                value={createComment.comment}
                onChange={handleCommentChange}
                name="comment"
                placeholder='Write your message'
              ></textarea>
              <button type='submit' className='rounded-lg mt-2 hover:bg-green-500 hover:text-white bg-white h-fit my-1 p-3 text-black font-bold'>
                Comment
              </button>
            </form>
          </div>
        </article>
      </section>
    </div>
  );
};

export default BlogDetail;
