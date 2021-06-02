import React, { useState } from 'react'

// each component created in its own block
// it is not good practice to create components inside another component

const Heading = (props) => <h1>{props.text}</h1>;

const Button = (props) => <button onClick = {props.onClick}>{props.text}</button>;

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    )
};

const Statistics = (props) => {
  if (!props.hasFeedback) { return <p>No feedback has been recorded</p> }

  return (
    <div>
        <Heading text="Statistics" />
        <table>
            <tbody>
                <Statistic name="good" value={props.good} />
                <Statistic name="neutral" value={props.neutral} />
                <Statistic name="bad" value={props.bad} />
            </tbody>
        </table>
    </div>
  )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [hasFeedback, setHasFeedback] = useState(false);
    const total = good + neutral + bad;


    const handleButtonClick = (type) => {
        setHasFeedback(true);

        switch (type) {
          case "good":
              setGood(good + 1);
              break;
          case "neutral":
              setNeutral(neutral + 1);
              break;
          case "bad":
              setBad(bad + 1);
              break;
          default:
              break;
        }
    }

    const statisticsProps = {
      hasFeedback: hasFeedback,
      good: good,
      neutral: neutral,
      bad: bad,
      total: total,
    };

    return (
        <div>
            <Heading text = "Give Feedback" />
            <Button onClick = {() => handleButtonClick("good")} text="Good" />
            <Button onClick = {() => handleButtonClick("neutral")} text="Neutral" />
            <Button onClick = {() => handleButtonClick("bad")} text="Bad" />
            <Statistics {...statisticsProps} />
        </div>
    )
}

export default App;