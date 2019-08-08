import React from 'react';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    if (!article) return <h1>Article does not exist!</h1>

    return (
    <>
        <h1>{article.title}</h1>
        {article.content.map((paragraf, key) => (
            <p key={key}>{paragraf}</p>
        ))}

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus ac elit semper pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque viverra convallis lacinia. Sed semper congue posuere. Proin gravida tempus eros sit amet scelerisque. Nulla faucibus neque vitae ex venenatis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Phasellus porta convallis sapien ut sagittis. Duis tristique nibh felis, ac pharetra ipsum varius ut. Curabitur aliquam sapien non venenatis ultrices. Vestibulum consequat sapien a eros sodales, at bibendum nibh vehicula. Sed vestibulum bibendum auctor. Sed pellentesque nibh orci, accumsan lobortis tellus eleifend eget. Nam pulvinar quam eu suscipit rhoncus.</p>

    </>
       

        );
    }

export default ArticlePage;