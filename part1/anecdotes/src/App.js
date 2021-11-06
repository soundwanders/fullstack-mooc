import React, { useState } from 'react'

const MaxVotes = (props) => {
  const leader = Math.max(...props.vote);
  const maxIndex = props.vote.indexOf(leader);

  if (leader === 0) {
    return <p>No results. Be the first to vote!</p>;
  }
  else if (leader === 1 ) {
    return (
      <>
        <blockquote>{props.anecdotes[maxIndex]}</blockquote>
        <p>is in the lead with {leader} vote</p>
      </>
    )
  }
  else return (
    <>
      <blockquote>{props.anecdotes[maxIndex]}</blockquote>
      <p>is in the lead with {leader} votes</p>
    </>
  )
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Through friction comes growth, shedding the old to make room for the new',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent.',
    'Anybody can write code that a computer can understand. The challenge is to write code that humans can understand just as easily.',
    'If you become caught in a sudden rain storm, you will still get drenched even though you try to keep dry by hurrying along and taking cover. If you are prepared to get wet from the start, the result is still the same but it is no hardship',
    'In offering one’s opinion, one must first ascertain whether or not the recipient is in the right frame of mind to receive counsel',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by your own definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
    'Behind every error blamed on a computer there are at least two human errors, including the error of blaming the computer',
    'Allow yourself to be excessively obstinate. Anything done in moderation will fall short of your goals. If you feel that you are doing more than is needed, it will be just right',
  ];
  
  const randomState = Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(randomState);

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
    console.log(setSelected);
  };

  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const handleVotes = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  return (
    <>
      <div>
        <h1>Anecdote Generator</h1>
        <p>{anecdotes[selected]}</p>
        <p>is in the lead with {vote[selected]} votes</p>
        <Button handleClick={handleVotes} text="Vote +1" />
        <Button handleClick={randomAnecdote} text="Go to Next Anecdote" />
        <h3>The People's Champion (Highest Votes)</h3>
      </div>

      <div>
        <MaxVotes anecdotes={anecdotes} vote={vote} />
      </div>
    </>
  );
};

export default App;
