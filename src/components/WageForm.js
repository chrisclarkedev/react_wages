import React, { useRef } from 'react';

function WageForm({ income, setIncome }) {
  // Referance from input field
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const Add = (e) => {
    e.preventDefault();

    let day = date.current.value.split('-');
    // When displaying the day we split it to be hyphenated

    let newDay = new Date(day[0], day[1], day[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newDay.getTime(),
        //  newDay.getTime() will get the actual timestamp of obect
      },
    ]);

    desc.current.value = '';
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="income-form" onSubmit={Add}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price..."
          ref={price}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Income Date..."
          ref={date}
        />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default WageForm;
