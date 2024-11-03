import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        return (
          <article key={post.id}>
            <Article
              title={post.title}
              date={post.date}
              preview={post.preview}
            />
          </article>
        );
      })}
    </main>
  );
}
export default ArticleList;
