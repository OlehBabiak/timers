import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

const TIMER_CHALLENGES = [
  { title: "Easy", targetTime: 1 },
  { title: "Not Easy", targetTime: 5 },
  { title: "Getting tough", targetTime: 10 },
  { title: "Prose Only", targetTime: 15 }
];

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {TIMER_CHALLENGES.map((challenge, index) => {
          return <TimerChallenge key={`${index}_${challenge.title}`} title={challenge.title} targetTime={challenge.targetTime} />
        })}
      </div>
    </>
  );
}

export default App;
