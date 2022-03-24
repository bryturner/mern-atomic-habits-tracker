function CheckboxInput({ value, habitTitle, checkboxesChecked, getHabits }) {
  const [boxChecked, setBoxChecked] = useState(false);

  async function updateCheckboxesChecked(
    habitTitle,
    checkboxesChecked,
    checkboxValueIndexNum,
    boxChecked
  ) {
    try {
      if (boxChecked === false) {
        checkboxesChecked.pop(checkboxValueIndexNum);

        const checkboxData = {
          habitTitle: habitTitle,
          checkboxesChecked: checkboxesChecked,
        };
        await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
      }

      if (boxChecked === true) {
        checkboxesChecked.push(checkboxValueIndexNum);

        const checkboxData = {
          habitTitle: habitTitle,
          checkboxesChecked: checkboxesChecked,
        };
        await axios.put('http://localhost:5020/habit/checkboxes', checkboxData);
      }

      getHabits();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <input
      type="checkbox"
      value={value}
      defaultChecked={boxChecked}
      onChange={e => {
        const checkboxValueIndexNum = +e.target.value;

        setBoxChecked(!boxChecked);

        updateCheckboxesChecked(
          habitTitle,
          checkboxesChecked,
          checkboxValueIndexNum,
          boxChecked
        );
      }}
    />
  );
}
