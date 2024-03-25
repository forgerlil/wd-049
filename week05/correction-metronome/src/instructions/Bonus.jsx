const Bonus = () => {
  return (
    <>
      <h3>BONUS SECTION</h3>
      <h4>Rhythm and Measures</h4>
      <p>
        Often, musicians are not only looking out for the <b>timing</b> between
        beats, but also the <b>measure</b> of the beats - the rhythmical
        patterns of their composition. As an example, a measure of three beats
        could sound like "tick tick tack"!
      </p>
      <ul>
        <li>
          You have a second audio file in your <i>assets</i> folder, with a
          slightly different ticking sound. Import it into <b>Metronome.js</b>{' '}
          and create a new audio element.
        </li>
        <li>
          For this step, you will need another two pieces of state:
          <ul>
            <li>
              How many beats your <b>measure</b> has (2 is a recommended value).
            </li>
            <li>
              A <b>counter</b> to keep track on how many beats have already
              happened in that measure.
            </li>
          </ul>
        </li>
        <li>
          In your logic for triggering the ticking sound, compare your counter
          with your measure:
          <ul>
            <li>Trigger one sound if a measure has reached the end.</li>
            <li>Trigger the other sound if the measure is still ongoing.</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Bonus;
