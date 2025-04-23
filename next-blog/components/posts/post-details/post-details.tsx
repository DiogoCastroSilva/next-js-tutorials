import Image from 'next/image';
import ReactMarkdown, { Components } from 'react-markdown';

import PostHeader from './post-header';
import styles from './post-details.module.css';

import type { IPost } from '@/contracts/post';

export default function PostDetails({ title, image, content }: IPost) {
  const imagePath = `/images/posts/${image}`;

  const customMarkdownComponents: Components = {
    p(paragraph) {
      const { node } = paragraph;

      if (
        node?.children[0].type === 'element' &&
        node?.children[0].tagName === 'img'
      ) {
        const image = node.children[0];

        if (image.properties.alt) {
          return (
            <div className={styles.image}>
              <Image
                src={`/images/posts/${image.properties.src}`}
                alt={image.properties.alt.toString()}
                width={600}
                height={300}
              />
            </div>
          );
        }
      }

      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customMarkdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
