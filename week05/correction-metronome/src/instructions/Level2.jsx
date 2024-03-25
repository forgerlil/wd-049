const Level2 = () => {
  return (
    <>
      <h4>Triggering the sound</h4>
      <p>
        A metronome ticks periodically. We can already control the timing, but
        now we need to trigger our metronome to tick.
      </p>
      <ul>
        <li>
          It gets a bit hard to know whether you should be listening to
          something or not! For now, let's just make sure to handle our trigger
          state.
          <ul>
            <li>
              The button should set the playing state to toggle{' '}
              <b>upon click</b>.
            </li>
            <li>
              Conditionally render the <b>content</b> of the button to reflect
              the status of the playing state.
            </li>
          </ul>
        </li>
        <li>
          Now that we have a trigger, we can play the sound, or stop it.
          <ul>
            <li>
              If the metronome is <b>not playing</b>, toggling the playing state
              should set the sound to play at the chosen bpm. Remember that the
              bpm can change while the metronome is ticking!
            </li>
            <li>
              If the metronome is <b>playing</b>, toggling the playing state
              should stop it.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Level2;
