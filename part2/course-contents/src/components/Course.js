import React from "react";

const Course = ({ course }) => (
    <>
        <Header course = { course.name } />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </>
);

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => (
    <p>
      {name} {exercises}
    </p>
);

const Content = ({ parts }) => (
    <>
        {parts.map(({ name, exercises, id }) => (
            <Part key={id} name={name} exercises={exercises} />
        ))}
    </>
);

const Total = ({ parts }) => {
    const total = parts.reduce(
        (acc, currentValue) => acc + currentValue.exercises, 0
    )
    return <p className="total">Total number of exercises {total}</p>;
};

export default Course;