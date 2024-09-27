import { useState } from 'react'

export function TwitterFollowCard ({formatUsername, username="unknown", children, initialIsFollowing = false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    function handleClick () {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                src="https://picsum.photos/200" alt="avatar"/>
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-name">{children}</strong>
                    <p className="tw-followCard-username">@{children.toLowerCase()}</p>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
