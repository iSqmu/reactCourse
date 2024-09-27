import { Fragment } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App () {

    return (
        <section className="app">
           {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard 
                    
                    key={userName}
                    username={userName}
                    initialIsFollowing={isFollowing}
                    
                    >
                    {name}
                    </TwitterFollowCard>
                ))
           }
        </section>
    )
  
}