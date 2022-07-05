import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USERS = [
  {
    name: "Brooke",
    twitter: "breqdev",
    email: "breq",
  },
  {
    name: "Ava",
    twitter: "Avaaa_42",
    email: "ava",
  },
  {
    name: "Quartz",
    twitter: "piezo_electric",
    email: "shockedquartz",
  },
  {
    name: "Marissa",
    twitter: "m4r1ss4m",
    email: "marissa",
  },
];

function App() {
  return (
    <article className="bg-rainbow-stripes min-h-screen p-4 md:p-8">
      <div className="bg-white border-black border-2 rounded-3xl w-full max-w-xl mx-auto p-8 text-4xl text-center font-bold mb-8">
        poggers.lgbt user directory
      </div>
      <ul className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        {USERS.map((user) => (
          <li
            key={user.email}
            className="bg-white border-black border-2 rounded-3xl p-8 flex"
          >
            <span className="w-2/3 text-5xl">{user.name}</span>
            <div className="w-full flex flex-col text-lg">
              <a href={`mailto:${user.email}@poggers.lgbt`}>
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}@poggers.lgbt
              </a>
              <a href={`https://twitter.com/${user.twitter}`}>
                <FontAwesomeIcon icon={faTwitter} /> @{user.twitter}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="bg-white border-black border-2 rounded-3xl w-full max-w-xl mx-auto p-8 mt-8 text-center">
        made with <FontAwesomeIcon icon={faHeart} /> by{" "}
        <a href="https://breq.dev/" className="underline">
          breq
        </a>
        . let her know if you want your own!
      </div>
    </article>
  );
}

export default App;
