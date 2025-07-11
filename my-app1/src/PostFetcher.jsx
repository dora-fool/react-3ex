import { useState } from 'react';

function PostFetcher() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    if (!postId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      
      if (!response.ok) {
        throw new Error('Пост не найден');
      }
      
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err.message);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Получить пост по ID</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="Введите ID поста"
          min="1"
        />
        <button onClick={fetchPost} disabled={!postId || loading}>
          {loading ? 'Загрузка...' : 'Получить пост'}
        </button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {post && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostFetcher