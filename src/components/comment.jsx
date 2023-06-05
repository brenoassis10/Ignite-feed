import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './comment.module.css';
import { Avatar } from './avatar';
import { useState } from 'react';


export function Comment({content, OnDeleteComment}) {
const[likeCount, setLikeCount] = useState(0)

    function handleDeletComment(){
        OnDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1 );
    }

    return (
        <div className={styles.comment}>

            <Avatar src='https://github.com/brenoassis10.png' alt='' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                          <strong>Breno Assis</strong>
                          <time title='31 de março às 11:09h' dateTime='2023-31-03 11:09:25'>Cerca de 1hr há atrás</time>
                        </div>

                        <button onClick={handleDeletComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>


        </div>
    )
}