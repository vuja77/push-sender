import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  const [last, setLast] = useState()
  const Send = async () => {
    await axios.post("https://fcm.googleapis.com/fcm/send", {
      to: "/topics/Blog",
      notification: {
        title: last.title,
        body: last.intro,
        image: last.imageSrc
      }
    },
      {
        headers: {
          'Authorization': 'Bearer AAAAmO5ct6E:APA91bHGDorHYON9OuuZzAV_2Vjh7Auni1ua2y5sF3Roqg3z7Drqq5Kp3Cp2jA6ev__rv-Ukq9bxXgVBEcPevpkIlpbPk4u9slRfdEtXFRthxfX2G_TxSBafpCwNLJ6wr2WRptGqG1YZ'
        }
      }
    )
  }
  const fetchLastNews = async () => {
    await axios.get("https://ura.org.me/wp-json/ura/v1/posts")
    .then(response => setLast(response.data.data[0]))
  }
  useEffect(() => {
    fetchLastNews()
  }, [])
  return (
    <div className="App">
      <button onClick={() => Send()}>Send notification</button>
    </div>
  );
}

export default App;
