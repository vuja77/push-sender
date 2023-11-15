import logo from './logo.svg';
import './App.css';
import axios from "axios"
function App() {
  const Send = async () => {
    await axios.post("https://fcm.googleapis.com/fcm/send", {
      to: "/topics/Blog",
      notification: {
        title: "Milena Vuković: Najoštrije osuđujem sramotne uvrede Šešelja prema Vuksanović Stanković",
        body: "tekst notifikacije.....",
        image: "https://ura.org.me/wp-content/uploads/2023/11/53299325846_4ca27f18f9_o.jpg"
      }
    },
      {
        headers: {
          'Authorization': 'Bearer AAAAmO5ct6E:APA91bHGDorHYON9OuuZzAV_2Vjh7Auni1ua2y5sF3Roqg3z7Drqq5Kp3Cp2jA6ev__rv-Ukq9bxXgVBEcPevpkIlpbPk4u9slRfdEtXFRthxfX2G_TxSBafpCwNLJ6wr2WRptGqG1YZ'
        }
      }
    )
  }
  return (
    <div className="App">
      <button onClick={() => Send()}>Send notification</button>
    </div>
  );
}

export default App;
