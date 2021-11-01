import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
    
    const articleElements = posts.map(article => {
        return <Article key={article.id} post={article} />
    })

    return (
        <main>
            {articleElements}
        </main>
    )
}

export default ArticleList