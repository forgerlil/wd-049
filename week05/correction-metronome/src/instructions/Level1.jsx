const Level1 = () => {
  return (
    <>
      <h4>Setting the component up</h4>
      <ul>
        <li>
          Open <b>Metronome.js</b>, and get familiar with the component. You
          have an audio file imported, that should be triggered to play upon
          click, with its frequency depending on the selected bpm. Some setup is
          needed first.
        </li>
        <li>
          For this component you will need two pieces of state:
          <ul>
            <li>
              One to keep track of the current <b>bpm</b>, with an initual value
              of <i>100</i>.
            </li>
            <li>
              One that signals whether the sound should be <b>playing</b>, with
              an initial value of <i>false</i>.
            </li>
          </ul>
        </li>
        <li>
          Your range input should control how often the sound needs to be
          triggered.
          <ul>
            <li>
              <b>Control the input</b>, so that it is in sync with your bpm
              state.
            </li>
            <li>
              For visibility, display the <b>current value</b> of the BPMs above
              the slider.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level1;
