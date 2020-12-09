function App() {
  return (
    <div>
      <Tweet
        name="Matt Lane"
        username="mmmaaatttttt"
        date={new Date().toDateString()}
        message="This app will disrupt everything!!"
      />
      <Tweet
        name="Jose Terrera"
        username="joseterrera"
        date={new Date().toDateString()}
        message="#Ilovehashtags"
      />
      <Tweet
        name="Bob Hope"
        username="bobhopecd"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
    </div>
  );
}
