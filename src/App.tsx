import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/feliippeee.png',
      name: 'Felipe Marques',
      role: 'Web developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'}, 
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉  jane.design/doctorcare'},
                
    ],
    publishedAt: new Date('2022-05-30 20:00:03'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'}, 
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉  jane.design/doctorcare'},
                
    ],
    publishedAt: new Date('2022-06-05 20:00:03'),
  }
];

export function App() {
  return (
    <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}

