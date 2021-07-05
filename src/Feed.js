import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
                message="Hello World!"
                timestamp="23-78-54 67:90 AM"
                username="Prakhar"
                image="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
            />
            <Post 
                profilePic="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
                message="Hello World!"
                timestamp="23-78-54 67:90 AM"
                username="Prakhar"
                image="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
            />
            <Post 
                profilePic="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
                message="Hello World!"
                timestamp="23-78-54 67:90 AM"
                username="Prakhar"
                image="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
            />
            <Post 
                profilePic="https://st2.depositphotos.com/2056297/7333/i/950/depositphotos_73331715-stock-photo-handsome-man.jpg"
                message="Hello World!"
                timestamp="23-78-54 67:90 AM"
                username="Prakhar"
            />
        </div>
    );
}

export default Feed;
