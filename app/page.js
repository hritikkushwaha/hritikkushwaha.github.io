import TypingText from '../components/TypingText';

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <TypingText text="I am Hritik Kushwaha" speed={120} />
    </main>
  );
      }
